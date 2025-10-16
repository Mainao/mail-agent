import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        return NextResponse.json({ message: "ok" });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: error.status }
        );
    }
}
