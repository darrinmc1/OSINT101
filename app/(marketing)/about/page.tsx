import { JsonLd, organizationSchema } from "@/components/json-ld"
import ContentPage from "@/components/ContentPage"

export const metadata = {
  title: "About OSINT 101 — Our Mission & Story",
  description:
    "Learn about OSINT 101's mission to make open-source intelligence training accessible, ethical, and practical for analysts, investigators, and security professionals worldwide."
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <ContentPage
        title="About OSINT 101"
        subtitle="Our mission, story, and the team behind the training platform."
        sections={[
          {
            heading: "Our Mission",
            content:
              "OSINT 101 exists to make professional open-source intelligence training accessible to everyone — from curious beginners to seasoned analysts. We believe that ethical, well-structured OSINT education makes the world safer and more transparent."
          },
          {
            heading: "What We Build",
            content:
              "We create structured, hands-on training modules covering the full OSINT spectrum: digital footprinting, social media intelligence, advanced search operators, dark web monitoring, and professional tradecraft. Every module is designed to be immediately practical."
          },
          {
            heading: "Our Principles",
            content:
              "Legality and ethics are non-negotiable. Every technique we teach is grounded in responsible, lawful intelligence gathering. We emphasize operational security, source verification, and the responsible use of information throughout our curriculum."
          },
          {
            heading: "Who We Serve",
            content:
              "Our community includes cybersecurity professionals, private investigators, journalists, law enforcement personnel, corporate security teams, researchers, and anyone with a genuine interest in learning how to find and verify information from open sources."
          }
        ]}
      />
    </>
  )
}
