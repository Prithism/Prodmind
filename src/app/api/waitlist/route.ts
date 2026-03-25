import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const EMAILS_PATH = path.join(process.cwd(), "emails.json");

/**
 * Handle waitlist email submission.
 * Stores emails in a local JSON file to avoid external database overhead.
 */
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // 1. Basic Validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    // 2. Read existing emails or create empty list
    let emails: string[] = [];
    try {
      const data = await fs.readFile(EMAILS_PATH, "utf-8");
      emails = JSON.parse(data);
    } catch (error: any) {
      if (error.code !== "ENOENT") {
        throw error;
      }
      // File doesn't exist, start with empty list
    }

    // 3. Check for duplicates
    if (emails.includes(email)) {
      return NextResponse.json(
        { message: "Already joined" },
        { status: 200 }
      );
    }

    // 4. Update and save
    emails.push(email);
    await fs.writeFile(EMAILS_PATH, JSON.stringify(emails, null, 2));

    return NextResponse.json(
      { message: "Success" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
