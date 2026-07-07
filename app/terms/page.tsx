import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Irish Nest MVP website terms.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms">
      <p>
        Irish Nest provides a curated modular-home enquiry and consultation
        experience. Public website information is indicative only and must not
        be treated as final supplier, planning, engineering, pricing, delivery,
        warranty, or availability confirmation.
      </p>
      <p>
        Product copy, dimensions, imagery, specifications, and floor plans are
        indicative concept content subject to supplier confirmation and site
        assessment.
      </p>
    </LegalPage>
  );
}
