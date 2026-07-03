import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Irish Nest MVP privacy policy.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacy policy">
      <p>
        Irish Nest stores submitted enquiry, feasibility, appointment, and
        reservation details only after form submission. This data is used to
        respond to customer requests and manage follow-up inside the private
        admin workspace.
      </p>
      <p>
        Public users cannot read other user submissions. Supabase row-level
        security policies restrict public access to insert-only form workflows.
      </p>
    </LegalPage>
  );
}
