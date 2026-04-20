export async function fetchWithRetry(
    input: RequestInfo,
    init: RequestInit & { retries?: number } = {}
  ) {
    const { retries = 3, ...rest } = init;
  
    const controller = new AbortController();
    const signal = controller.signal;
  
    let attempt = 0;
  
    while (attempt <= retries) {
      try {
        const res = await fetch(input, {
          ...rest,
          signal,
        });
  
        if (res.ok) return res;
  
        if (res.status === 429 || res.status >= 500) {
          throw new Error(`Retryable error: ${res.status}`);
        }
  
        throw new Error(`Request failed: ${res.status}`);
      } catch (err) {
        attempt++;
  
        if (attempt > retries) throw err;
  
        await new Promise((r) =>
          setTimeout(r, 300 * Math.pow(2, attempt))
        );
      }
    }
  
    throw new Error("Unreachable");
  }