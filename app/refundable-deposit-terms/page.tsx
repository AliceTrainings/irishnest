import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Refundable Deposit Terms",
  description: "Irish Nest refundable deposit terms for reservation requests.",
};

export default function RefundableDepositTermsPage() {
  return (
    <LegalPage eyebrow="Terms" title="Refundable deposit terms">
      <p>
        This MVP does not process online payments. A reservation request is
        stored as <strong>pending_payment</strong> until Irish Nest provides
        payment instructions and confirms receipt.
      </p>
      <p>
        A pending reservation does not confirm product availability, final
        specification, pricing, delivery timeline, site suitability, planning
        status, or supplier acceptance.
      </p>
      <p>
        Refund handling, deposit amount, payment provider terms, cancellation
        windows, and any deductions must be confirmed in the final commercial
        terms before payment is accepted.
      </p>
    </LegalPage>
  );
}
