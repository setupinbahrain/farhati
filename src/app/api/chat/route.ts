export async function POST(req: Request) {
  const { messages } = await req.json();
  const latestMessage = messages[messages.length - 1].content;

  // We are simulating the Vercel AI SDK string stream to protect the demo without API keys
  const simulatedResponse = `I completely understand. If you need something emotional for "${latestMessage}", I highly recommend the "Midnight Rose Anniversary Box." It is currently in stock locally. Should I prepare an expedited order with a custom apology card via our Riffa warehouse?`;

  const stream = new ReadableStream({
    async start(controller) {
      const chunks = simulatedResponse.split(' ');
      for (const chunk of chunks) {
        controller.enqueue(new TextEncoder().encode(chunk + ' '));
        // Simulate thinking delay
        await new Promise((r) => setTimeout(r, 50));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
