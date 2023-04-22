import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const chat = await prisma.chat.create({
        data: {
            message: body.message,
        }
    })

    return NextResponse.json({ chat });
}

export async function GET(_request: NextRequest) {
    const chats = await prisma.chat.findMany({
        orderBy: {
            created_at: 'desc',
        }
    });

    return NextResponse.json({ chats });
}