import type { Metadata } from "next";

import { FlowPage } from "@/components/forms/flow-page";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Request an Irish Nest consultation for a curated modular-home conversation.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ home?: string }>;
}) {
  const { home } = await searchParams;

  return <FlowPage type="appointment" selectedHome={home} />;
}
