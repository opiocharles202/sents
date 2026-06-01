import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/app/components/auth/RegisterForm";

export const metadata = {
  title: "Create an Account | Scents — Luxury Perfume",
  description: "Join Scents to track your orders, save your favorite fragrances, and unlock exclusive rewards.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-row-reverse">
      {/* Right Column: Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-background relative z-10 pt-20">
        <RegisterForm />
      </div>

      {/* Left Column: Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/hero-perfume.png"
            alt="Scents luxury perfume collection"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent mix-blend-multiply" />
          
          {/* Decorative quote on the image */}
          <div className="absolute bottom-12 left-12 right-12 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="font-serif text-2xl text-white/90 italic drop-shadow-md">
              "Perfume is the key to our memories."
            </p>
            <p className="mt-3 text-sm font-semibold tracking-widest uppercase text-gold-400 drop-shadow-sm">
              — The Perfumer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
