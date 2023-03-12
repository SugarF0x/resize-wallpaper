export default function getClosestNumber(range: number[], value: number): number {
  return range.reduce((closest, current) => Math.abs(current - value) < Math.abs(closest - value) ? current : closest)
}

/// VITEST

if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest

  describe("getClosestNumber", () => {
    it("should floor when rounding the middle point", () => {
      expect(getClosestNumber([0, 1], .49)).toBe(0)
      expect(getClosestNumber([0, 1], .5)).toBe(0)
      expect(getClosestNumber([0, 1], .51)).toBe(1)
    })

    it("should handle negatives", () => {
      expect(getClosestNumber([-3, -7, 0, 4], -5)).toBe(-3)
    })

    it("should handle floats", () => {
      expect(getClosestNumber([1, 1.25, 1/3, 1.5, 2/3, 1.9, 2], 1/4)).toBe(1/3)
    })
  })
}
