import { InvalidImageUrlError } from '#src/domain/errors/image-url-error'
import { ImagesURL } from '#src/domain/value-objects/imagesUrl'

describe('ImagesURL Entity', () => {
  it('Should throw InvalidImageUrlError when the list is empty', () => {
    expect(() => {
      new ImagesURL([])
    }).toThrow(InvalidImageUrlError)
  })

  it('Should throw InvalidImageUrlError when the list has more than six urls', () => {
    const sevenUrls = Array.from({ length: 7 }, (_, i) => `https://example.com/img-${i}.png`)

    expect(() => {
      new ImagesURL(sevenUrls)
    }).toThrow(InvalidImageUrlError)
  })

  it.each([['not-a-url'], ['https://valid.com/img.png', 'invalid-url']])(
    'Should throw InvalidImageUrlError when any url is malformed: %j',
    (...invalidUrls) => {
      expect(() => {
        new ImagesURL(invalidUrls)
      }).toThrow(InvalidImageUrlError)
    },
  )

  it('Should create an ImagesURL instance with a single valid url', () => {
    const urls = ['https://example.com/img.png']
    const sut = new ImagesURL(urls)

    expect(sut.getValue()).toStrictEqual(urls)
  })

  it('Should create an ImagesURL instance with the maximum amount of valid urls', () => {
    const urls = Array.from({ length: 6 }, (_, i) => `https://example.com/img-${i}.png`)
    const sut = new ImagesURL(urls)

    expect(sut.getValue()).toStrictEqual(urls)
  })
})
