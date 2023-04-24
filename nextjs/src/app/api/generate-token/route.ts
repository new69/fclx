import { encode } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const user = {
        name: "admin",
        sub: body.user_id ?? "d1574772-8973-4180-a560-95ea03228f0f",
    };

    const secret = process.env.NEXTAUTH_SECRET as string;

    const token = await encode({
        secret,
        token: user,
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return NextResponse.json({ token });
}