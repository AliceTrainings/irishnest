import { NextResponse } from "next/server";

import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

function csvCell(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export async function GET() {
  const data = await getAdminDashboardData();
  const rows = [
    ["Name", "Email", "Interest", "Status", "Owner", "Created"],
    ...data.leads.map((lead) => [
      lead.name,
      lead.email,
      lead.interest,
      lead.status,
      lead.owner,
      lead.createdAt,
    ]),
  ];
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");

  return new NextResponse(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="irish-nest-enquiries.csv"',
    },
  });
}
