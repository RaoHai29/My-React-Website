import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { CvDownloadButtons } from "@/components/ui/CvDownloadButtons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        id="contact-title"
        eyebrow="Get in touch"
        title="Let's build something great"
        description="Ready to start a project or just want to chat? Drop me a message and I'll get back to you soon."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="glass-subtle flex flex-col justify-between gap-8 rounded-3xl p-7 sm:p-8">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-violet/30 to-accent-cyan/20 ring-1 ring-inset ring-white/15">
              <Mail aria-hidden className="h-5 w-5 text-ink-100" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink-100">Hiring or have a project in mind?</h3>
            <p className="mt-3 leading-relaxed text-ink-300">
              Download my Europass CV in Italian or English, or send a message using the form — I usually reply within a
              day.
            </p>
          </div>
          <CvDownloadButtons variant="stacked" />
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
