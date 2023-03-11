export function getClosestNumber(range: number[], value: number): number {
  return range.reduce((closest, current) => Math.abs(current - value) < Math.abs(closest - value) ? current : closest)
}
