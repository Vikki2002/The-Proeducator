// src/lib/sse.ts

type MessageHandler<T> = (data: T) => void;
type ErrorHandler = (error: Event) => void;

export function setupSSE<T>(
  url: string,
  onMessage: MessageHandler<T>,
  onError?: ErrorHandler
) {
  let eventSource: EventSource | null = null;
  let reconnectTimeout: NodeJS.Timeout | null = null;
  let reconnectAttempts = 0;
  const maxReconnectAttempts = 5;

  const connect = () => {
    eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        onMessage(parsed);
        reconnectAttempts = 0; // reset on success
      } catch (error) {
        console.error("❌ Error parsing SSE data:", error);
      }
    };

    eventSource.onerror = (event) => {
      console.error("❌ SSE connection error:", event);
      if (onError) onError(event);
      eventSource?.close();

      if (reconnectAttempts < maxReconnectAttempts) {
        const delay = Math.min(1000 * 2 ** reconnectAttempts, 30000); // exponential backoff up to 30s
        console.log(`🔁 Reconnecting in ${delay / 1000}s... (Attempt ${reconnectAttempts + 1})`);
        reconnectTimeout = setTimeout(() => {
          reconnectAttempts++;
          connect();
        }, delay);
      } else {
        console.warn("⚠️ Max reconnect attempts reached.");
      }
    };
  };

  connect();

  const close = () => {
    eventSource?.close();
    if (reconnectTimeout) clearTimeout(reconnectTimeout);
    console.log("🧹 SSE connection closed manually");
  };

  return { close }; // optionally expose `getEventSource()` if you ever need it
}
