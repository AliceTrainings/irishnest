import type { Metadata } from "next";

import { FlowPage } from "@/components/forms/flow-page";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request an Irish Nest modular-home quote review, subject to consultation and supplier confirmation.",
};

export default async function RequestQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ home?: string }>;
}) {
  const { home } = await searchParams;

  return <FlowPage type="quote" selectedHome={home} />;
}
