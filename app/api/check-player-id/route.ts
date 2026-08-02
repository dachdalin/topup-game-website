import { NextResponse } from "next/server";

// Stub only — PUBG Mobile has no official public nickname-lookup API.
// Real verification requires a top-up wholesaler account (Digiflazz, ApiGames,
// UniPin, Moogold, etc.) called from here with a server-side API key
// (e.g. process.env.PLAYER_ID_LOOKUP_API_KEY). Never call that key from the
// client — this route is the only place it should live once connected.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const playerId = typeof body?.playerId === "string" ? body.playerId.trim() : "";

  if (!playerId) {
    return NextResponse.json({ error: "Player ID is required." }, { status: 400 });
  }

  // Simulated latency so the loading state in the UI is visible/testable.
  await new Promise((resolve) => setTimeout(resolve, 900));

  return NextResponse.json({
    demo: true,
    nickname: `Player-${playerId.slice(-4).padStart(4, "0")}`,
  });
}
