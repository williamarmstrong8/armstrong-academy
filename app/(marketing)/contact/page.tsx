import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata = {
  title: "Contact | Armstrong Academy",
  description: "Get in touch with Armstrong Academy.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Have a question about a component? Need a custom enterprise license?
            We&apos;re here to help. Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 space-y-12">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
