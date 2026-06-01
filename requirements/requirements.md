# Requirements Document

## Introduction

This document defines the requirements for a perfume e-commerce platform that enables marketing and selling perfumes online. The system provides a customer-facing storefront for browsing and purchasing perfumes, along with an administrative dashboard for managing products, orders, and clients.

## Glossary

- **Storefront**: The public-facing web interface where customers browse and purchase perfumes
- **Admin_Dashboard**: The secure administrative interface for managing the e-commerce platform
- **Product_Catalog**: The collection of perfumes available for sale
- **Shopping_Cart**: A temporary storage for items a customer intends to purchase
- **Order**: A completed purchase transaction containing customer details and purchased items
- **Customer**: A registered or guest user who purchases perfumes
- **Administrator**: A privileged user who manages the platform
- **Product**: A perfume item available for sale, including name, brand, description, price, and image

## Requirements

### Requirement 1: Product Catalog Display

**User Story:** As a customer, I want to browse the perfume catalog, so that I can discover perfumes available for purchase.

#### Acceptance Criteria

1. THE Storefront SHALL display a list of all available perfumes with their name, brand, price, and thumbnail image, WHERE the list is limited to 20 products per page with pagination controls.
2. WHEN a customer clicks on a perfume, THE Storefront SHALL display detailed product information including description, size options, and price. IF the product has size options available, THEN THE Storefront SHALL display the available sizes.
3. WHEN a customer searches for a perfume by name or brand, THE Storefront SHALL filter the product catalog to show matching results. IF no matching results exist, THEN THE Storefront SHALL display a message indicating no products were found.
4. THE Storefront SHALL allow customers to filter perfumes by brand, fragrance family, and price range, WHERE the price range filter uses minimum and maximum bounds from 0 to 999,999.99.
5. THE Storefront SHALL define "available" perfumes as products that are not discontinued and have at least one unit in stock.
6. THE Storefront product catalog pages SHALL export `unstable_instant = { prefetch: 'static' }` and utilize the Next.js 16 `'use cache'` directive to ensure page navigations load instantly (under 100ms) from the static cache shell.
7. ALL product images on the catalog and details pages SHALL utilize the Next.js `<Image>` component for WebP/AVIF format optimization and to prevent layout shifts.

### Requirement 2: Shopping Cart Management

**User Story:** As a customer, I want to add perfumes to a shopping cart, so that I can collect items before purchasing.

#### Acceptance Criteria

1. WHEN a customer clicks "Add to Cart" on a product with quantity greater than zero, THE Shopping_Cart SHALL add the selected perfume with specified quantity bounded by minimum of 1 and maximum of 99.
2. THE Shopping_Cart SHALL display the current total price of all items, updated immediately upon any cart modification.
3. WHEN a customer modifies the quantity of an item to zero, THE Shopping_Cart SHALL automatically remove the item from the cart.
4. WHEN a customer modifies the quantity of an item to a value greater than zero, THE Shopping_Cart SHALL update the total price accordingly.
5. WHEN a customer removes an item from the cart, THE Shopping_Cart SHALL recalculate the total price.
6. THE Shopping_Cart SHALL persist its contents across customer sessions until checkout or cart expiration of 72 hours.
7. WHEN a customer attempts to add a product with quantity exceeding available stock, THE Shopping_Cart SHALL display an error message indicating insufficient stock.
8. THE Shopping_Cart SHALL enforce a maximum quantity of 99 units per product.
9. THE Storefront SHALL use React 19's `useOptimistic` hook and client-side persistent storage (Zustand or local storage) for instant cart updates, ensuring that adding, modifying, or removing items reflects immediately on the UI before network requests complete.

### Requirement 3: Order Checkout

**User Story:** As a customer, I want to complete a purchase, so that I can receive my selected perfumes.

#### Acceptance Criteria

1. WHEN a customer proceeds to checkout, IF the Shopping_Cart contains at least one item, THEN THE System SHALL collect shipping address, contact information consisting of email and phone number, and payment details.
2. WHEN a customer proceeds to checkout, IF the Shopping_Cart is empty, THEN THE System SHALL prevent checkout and notify the customer.
3. WHEN the customer confirms the order, THE System SHALL create an Order with unique order number and store customer details consisting of shipping address, contact information, and items purchased.
4. WHEN an order is placed, THE System SHALL send a confirmation email to the customer with order details consisting of order number, items purchased, total amount, and shipping address.
5. IF the email sending fails, THE System SHALL log the failure and continue order processing without notifying the customer via email.
6. WHEN the System creates an order successfully, THEN THE System SHALL display an order confirmation page with order number and order summary consisting of items purchased, quantities, and total amount.
7. IF the payment fails, THE System SHALL display an error message indicating payment failure, allow retry up to 3 attempts, and clear the cart after exceeding the retry limit.
8. THE System SHALL handle checkout processing and payments via Stripe API integration with secure server-side validation using Next.js Server Actions and Stripe Webhook reconciliation for eventual consistency.
9. THE System SHALL dispatch transactional emails via the Resend API. If email delivery fails, the event will be queued for retries to preserve user notification.

### Requirement 4: Customer Account Management

**User Story:** As a customer, I want to create an account, so that I can track my orders and manage my profile.

#### Acceptance Criteria

1. WHEN a customer registers with a valid email address and password of 8 to 128 characters, THE System SHALL validate the email format, verify email uniqueness, create a Customer account, and send a confirmation email.
2. WHEN a customer logs in with valid credentials, THE System SHALL authenticate the customer, establish an edge-compatible stateless session using HttpOnly secure cookies managed by Next.js middleware with a 30-minute timeout, and provide access to account features including order history and profile management.
3. IF a customer provides invalid credentials, THE System SHALL deny authentication, display an error message indicating invalid credentials, increment the failed attempt counter, AND IF the failed attempts reach 5 within 15 minutes, THE System SHALL lock the account for 15 minutes and display a lockout message.
4. WHEN a customer requests to view order history, THE System SHALL display all orders including active, completed, and cancelled orders with no time limit.
5. WHEN a customer updates profile information, THE System SHALL validate the input including name with maximum 100 characters, shipping address with maximum 500 characters, and phone number with maximum 20 characters, THEN save the validated information.
6. ALL customer registration and login forms SHALL utilize Next.js Server Actions with schema-based input validation via Zod, and React 19's `useActionState` and `useTransition` to handle loading states smoothly.

### Requirement 5: Product Management

**User Story:** As an administrator, I want to add, edit, and remove products, so that I can keep the product catalog current.

#### Acceptance Criteria

1. WHEN an administrator adds a new perfume with name, brand, description, price, images, and fragrance family, THE Admin_Dashboard SHALL create a Product with price bounded between 0.01 and 9,999,999,999.99, images limited to a maximum of 10 per product.
2. WHEN an administrator updates a product, THE Admin_Dashboard SHALL modify the existing Product attributes. IF the update fails, THE Admin_Dashboard SHALL display an error message and retain the original product data.
3. WHEN an administrator deletes a product, THE Admin_Dashboard SHALL remove the Product from the catalog. IF the deletion fails, THE Admin_Dashboard SHALL display an error message and retain the product in the catalog.
4. THE Admin_Dashboard SHALL display a list of all products with pagination using a default page size of 20 items and maximum page size of 100 items.
5. WHERE a product has associated orders, THE System SHALL prevent deletion, notify the administrator via error message, and treat any failure in either protection as a system error that preserves the product.
6. Product mutations inside the Admin Dashboard SHALL be processed using secure Next.js Server Actions that trigger targeted revalidation of the product catalog's Next.js cached pages via `revalidatePath` or `revalidateTag`.

### Requirement 6: Order Management

**User Story:** As an administrator, I want to view and manage customer orders, so that I can fulfill customer purchases.

#### Acceptance Criteria

1. THE Admin_Dashboard SHALL display a list of all orders with status, customer information, and order date, with pagination of 50 orders per page.
2. WHEN an administrator updates an order status, THE System SHALL record the new status and notify the customer via Resend email. IF notification fails, THE System SHALL display an error message to the administrator.
3. THE Admin_Dashboard SHALL allow filtering orders by status, date range with a maximum span of 1 year, and customer.
4. WHEN an administrator cancels an order, THE System SHALL update the order status and process any applicable refunds via Stripe. IF refund processing fails, THE System SHALL display an error message and preserve the order in a pending refund state.
5. THE Admin_Dashboard SHALL display order details including all items, shipping information, and payment status.

### Requirement 7: Customer Management

**User Story:** As an administrator, I want to view and manage customer accounts, so that I can provide support and manage access.

#### Acceptance Criteria

1. THE Admin_Dashboard SHALL display a list of all registered customers with contact information and registration date, with pagination of up to 25 customers per page.
2. WHEN an administrator searches for a customer by name or email, THE Admin_Dashboard SHALL filter the customer list to show matching results. IF no customers match the search criteria, THE Admin_Dashboard SHALL display a message indicating no results found.
3. WHEN an administrator selects a customer from the list, THE Admin_Dashboard SHALL display the customer's order history.
4. WHERE a customer requests account deletion, THE System SHALL anonymize the customer's name, email address, and phone number by replacing them with redacted values while preserving order history for compliance. IF either anonymization or order preservation fails, THE System SHALL fail the entire deletion process.

### Requirement 8: User Authentication and Authorization

**User Story:** As a system, I want to ensure only authorized users access appropriate features, so that data is protected.

#### Acceptance Criteria

1. WHEN an unauthenticated user attempts to access the Admin_Dashboard, THE System SHALL redirect to the login page.
2. THE Administrator SHALL have access to all product, order, and customer management features, including creating, reading, updating, and deleting products, viewing and managing all orders, and viewing and managing all customer accounts.
3. THE Customer SHALL only have access to their own account data and their own order history, and SHALL NOT have access to Admin_Dashboard, other customers' accounts, or other customers' orders.
4. WHEN a session expires after 30 minutes of inactivity, THE System SHALL require re-authentication for the following protected actions: accessing Admin_Dashboard, accessing account settings, viewing order history, placing an order, and modifying account information.
5. WHEN an authenticated but unauthorized user attempts to access a restricted feature, THE System SHALL deny access and display an error message indicating insufficient permissions.

### Requirement 9: Product Search and Filtering

**User Story:** As a customer, I want to search and filter products, so that I can find specific perfumes quickly.

#### Acceptance Criteria

1. WHEN a customer enters at least 3 characters in the search bar, THE Storefront SHALL filter products by matching name, brand, or description using case-insensitive partial matching.
2. THE Storefront SHALL display a "no products found" message when search or filter results return zero products.
3. THE Storefront SHALL allow filtering by fragrance family (floral, woody, oriental, fresh).
4. THE Storefront SHALL allow filtering by price range using minimum and maximum bounds. IF minimum exceeds maximum, THE System SHALL display an error message indicating invalid price range.
5. THE Storefront SHALL allow sorting products by name (A-Z or Z-A), price (ascending or descending), and newest first.
6. THE Storefront SHALL sort by newest first based on product creation date in descending order.

### Requirement 10: Inventory Management

**User Story:** As an administrator, I want to track product stock levels, so that I can prevent overselling.

#### Acceptance Criteria

1. THE Admin_Dashboard SHALL display current stock levels for each product.
2. THE Administrator SHALL configure a positive threshold value for low stock alerts, bounded between 1 and 999,999.
3. WHEN stock falls below the threshold, THE System SHALL notify the administrator via dashboard alert and Resend email.
4. WHEN stock reaches zero, THE System SHALL notify the administrator via dashboard alert and Resend email about depletion.
5. WHEN an order is placed, THE System SHALL decrement the available stock by the ordered quantity.
6. IF requested quantity exceeds available stock, THE System SHALL prevent addition to cart and notify the customer.
7. THE System SHALL ensure stock levels never go negative.
8. THE System SHALL enforce thread-safe inventory decrements during checkout using ACID-compliant database transaction locking (`SELECT FOR UPDATE` via Drizzle ORM) to prevent race conditions and overselling.