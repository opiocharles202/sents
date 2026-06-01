import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/app/components/auth/LoginForm";

export const metadata = {
  title: "Sign In | Scents — Luxury Perfume",
  description: "Sign in to access your Scents account and exclusive collections.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column: Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-background relative z-10 pt-20">
        <LoginForm />
      </div>

      {/* Right Column: Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/perfume-floral.png"
            alt="Scents luxury perfume collection"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay to blend edges if needed, or just dark overlay for text contrast if we had text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent mix-blend-multiply" />
          
          {/* Optional decorative quote on the image */}
          <div className="absolute bottom-12 left-12 right-12 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="font-serif text-2xl text-white/90 italic drop-shadow-md">
              "A woman's perfume tells more about her than her handwriting."
            </p>
            <p className="mt-3 text-sm font-semibold tracking-widest uppercase text-gold-400 drop-shadow-sm">
              — Christian Dior
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
