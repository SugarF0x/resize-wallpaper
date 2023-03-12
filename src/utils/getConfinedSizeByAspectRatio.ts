export default function getConfinedSizeByAspectRatio(width: number, height: number, widthAspect: number, heightAspect: number): [number, number] {
  const parentAspectRatio = width / height
  const childAspectRatio = widthAspect / heightAspect

  const isHuggingVertically = parentAspectRatio > childAspectRatio

  if (isHuggingVertically) return [height * widthAspect / heightAspect, height]
  return [width, width * heightAspect / widthAspect]
}

/// VITEST

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  describe("getConfinedSizeByAspectRatio", () => {
    it.each<[number, number]>([
      [300, 300],
      [300, 400],
      [300, 200],
    ])("should reduce size to smallest axis on aspect ratio of 1", (width, height) => {
      const min = Math.min(width, height)
      expect(getConfinedSizeByAspectRatio(width, height, 1, 1)).toEqual([min, min])
    })

    it.each<[[number, number], [number, number]]>([
      [[100, 100], [1, 1]],
      [[400, 100], [2, 1]],
      [[800, 100], [4, 1]],
      [[200, 50], [2, 1]],
    ])("should hug vertical axis", ([width, height], [widthAspect, heightAspect]) => {
      const [newWidth, newHeight] = getConfinedSizeByAspectRatio(width, height, widthAspect, heightAspect)
      expect(newHeight).toBe(height)
      expect(newWidth).toBeLessThanOrEqual(width)
    })

    it.each<[[number, number], [number, number]]>([
      [[100, 100], [2, 1]],
      [[100, 200], [1, 2]],
      [[100, 400], [1, 2]],
      [[354, 23674], [1, 8]],
    ])("should hug horizontal axis", ([width, height], [widthAspect, heightAspect]) => {
      const [newWidth, newHeight] = getConfinedSizeByAspectRatio(width, height, widthAspect, heightAspect)
      expect(newWidth).toBe(width)
      expect(newHeight).toBeLessThanOrEqual(height)
    })
  })
}
