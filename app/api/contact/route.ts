import { NextResponse } from "next/server";

const TELEGRAM_API_BASE = "https://api.telegram.org";

export async function POST(request: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        {
          error:
            "Server is not configured to send messages yet. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.",
        },
        { status: 503 }
      );
    }

    const payload = await request.json().catch(() => null);
    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }
    const fullName = String(payload.fullName ?? "").trim();
    const companyName = String(payload.companyName ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const phone = String(payload.phone ?? "").trim();
    const interest = String(payload.interest ?? "").trim();

    if (!fullName || !email || !interest) {
      return NextResponse.json(
        { error: "Full name, email, and interest are required." },
        { status: 400 }
      );
    }

    const messageLines = [
      "New collaborate request:",
      `Name: ${fullName}`,
      companyName ? `Company: ${companyName}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Interest: ${interest}`,
    ].filter(Boolean);

    const telegramResponse = await fetch(
      `${TELEGRAM_API_BASE}/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageLines.join("\n"),
          disable_web_page_preview: true,
        }),
      }
    );

    if (!telegramResponse.ok) {
      const contentType = telegramResponse.headers.get("content-type") ?? "";
      const errorPayload = contentType.includes("application/json")
        ? await telegramResponse.json().catch(() => null)
        : { description: await telegramResponse.text().catch(() => "") };
      console.error("Telegram send failed", {
        status: telegramResponse.status,
        statusText: telegramResponse.statusText,
        errorPayload,
      });
      return NextResponse.json(
        {
          error:
            errorPayload?.description ??
            `Telegram error (${telegramResponse.status}).`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error", error);
    const message = error instanceof Error ? error.message : "Unexpected error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
