import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { reportId: string } }
) {
  try {
    const { params } = await context; // Await the context to get params
    const report = await prisma.report.findUnique({
      where: {
        reportId: params.reportId,
      },
    });

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error: unknown) {
    console.error("Error fetching report details:", error);
    return NextResponse.json(
      { error: "Failed to fetch report details" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  
    const { userId } = await auth();
    if(!userId) {
        return NextResponse.json({error: "Unauthorized" } , { status: 401 });
    }

  try {
    const { status } = await request.json();
    const report = await prisma.report.update({
      where: { id: params.id },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error: unknown) {
    console.error("Error updating daata: ", error);
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}
