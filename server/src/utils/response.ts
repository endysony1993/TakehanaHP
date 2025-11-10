export function ok<T>(data: T) {
  return { success: true, data }
}
export function fail(message: string, code = 400) {
  return { success: false, error: { message, code } }
}
