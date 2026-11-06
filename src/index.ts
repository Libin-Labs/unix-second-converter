export function toUnixSeconds(iso: string): number {
  if (typeof iso !== 'string' || !/(?:Z)$/i.test(iso))
    throw new RangeError('Expected ISO timestamp ending in Z');
  const ms = Date.parse(iso);
  if (!Number.isFinite(ms)) throw new RangeError('Invalid timestamp');
  const seconds = ms / 1000;
  if (!Number.isSafeInteger(Math.trunc(seconds)))
    throw new RangeError('Timestamp outside safe range');
  return seconds;
}
export function fromUnixSeconds(seconds: number): string {
  if (!Number.isFinite(seconds)) throw new TypeError('Expected finite epoch seconds');
  const ms = seconds * 1000;
  if (!Number.isFinite(ms) || Math.abs(ms) > 8.64e15)
    throw new RangeError('Timestamp outside Date range');
  return new Date(ms).toISOString();
}
