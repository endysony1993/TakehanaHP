const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${baseURL}${path}`)
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`)
  return res.json() as Promise<T>
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${baseURL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    // try to read error json if available
    try {
      const err = await res.json()
      const msg = err?.error?.message || err?.message
      if (msg) throw new Error(msg)
    } catch (_) {
      // ignore parse error, fall through
    }
    throw new Error(`POST ${path} failed: ${res.status}`)
  }
  return res.json() as Promise<T>
}
