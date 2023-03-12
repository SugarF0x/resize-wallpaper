export default function getWrapperSizeByAspectRatio(width: number, height: number, widthAspect: number, heightAspect: number): [number, number] {
  const parentAspectRatio = widthAspect / heightAspect
  const childAspectRatio = width / height

  const isHuggingVertically = parentAspectRatio > childAspectRatio

  if (isHuggingVertically) return [height * widthAspect / heightAspect, height]
  return [width, width * heightAspect / widthAspect]
}

/// VITEST

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  describe("getWrapperSizeByAspectRatio", () => {
    it.each<[[number, number, number, number], [number, number]]>([
      [[100, 100, 1, 1], [100, 100]],
      [[200, 100, 1, 1], [200, 200]],
      [[200, 400, 1, 1], [400, 400]],
      [[100, 100, 1, 2], [100, 200]],
      [[100, 100, 2, 1], [200, 100]],
      [[100, 100, 16, 9], [100 * 16 / 9, 100]],
      [[100, 100, 9, 16], [100, 100 * 16 / 9]],
      [[1280, 1558, 16, 10], [2492.8, 1558]],
    ])("should expand size to fit given image size into a aspect rario parent wrapper", (inputs, output) => {
      expect(getWrapperSizeByAspectRatio(...inputs)).toEqual(output)
    })
  })
}
