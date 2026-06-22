import { InvalidDescriptionError } from '#src/domain/errors/description-error'
import { Description } from '#src/domain/value-objects/description'

describe('Description Entity', () => {
  it.each(['', '   ', 'a'.repeat(19), 'a'.repeat(501)])(
    'Should throw InvalidDescriptionError when description is invalid: "%s"',
    (invalidDescription) => {
      expect(() => {
        new Description(invalidDescription)
      }).toThrow(InvalidDescriptionError)
    },
  )

  it('Should create a Description instance when it reaches the minimum length', () => {
    const minimumDescription = 'a'.repeat(20)
    const sut = new Description(minimumDescription)

    expect(sut.getValue()).toStrictEqual(minimumDescription)
  })

  it('Should create a Description instance when it reaches the maximum length', () => {
    const maximumDescription = 'a'.repeat(500)
    const sut = new Description(maximumDescription)

    expect(sut.getValue()).toStrictEqual(maximumDescription)
  })

  it('Should trim the value before validating and storing', () => {
    const sut = new Description('   A valid trimmed description   ')

    expect(sut.getValue()).toStrictEqual('A valid trimmed description')
  })
})
