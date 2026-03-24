import { NextResponse } from "next/server";
import { ElevenLabsClient } from "elevenlabs";

export async function GET() {
  const agentId = process.env.VOICE_AGENT_ID;
  const apiKey = process.env.VOICE_API_KEY;

  if (!agentId || !apiKey) {
    throw Error("VOICE_AGENT_ID or VOICE_API_KEY is not set");
  }

  try {
    const client = new ElevenLabsClient({ apiKey });
    const response = await client.conversationalAi.getSignedUrl({
      agent_id: agentId,
    });
    return NextResponse.json({ signedUrl: response.signed_url });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to get signed URL" },
      { status: 500 }
    );
  }
}
