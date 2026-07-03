import type { Metadata } from "next";

import { FlowPage } from "@/components/forms/flow-page";

export const metadata: Metadata = {
  title: "Reserve a Home",
  description:
    "Create a pending Irish Nest reservation request with refundable-deposit terms.",
};

export default async function ReservePage({
  searchParams,
}: {
  searchParams: Promise<{ home?: string }>;
}) {
  const { home } = await searchParams;

  return <FlowPage type="reservation" selectedHome={home} />;
}
