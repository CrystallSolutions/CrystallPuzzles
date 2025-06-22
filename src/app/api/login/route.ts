import { signIn } from "@/middleware/auth";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({ message: "Hello, Next.js!" });
}
export async function POST() {
	await signIn();
	return NextResponse.json({ message: "Hello, Next.js!" });
}