import { InvalidTitleError } from '#src/domain/errors/title-error'
import { Title } from '#src/domain/value-objects/title'

describe('Title Entity', () => {
  it.each(['', '   ', 'a'.repeat(4), 'a'.repeat(101)])(
    'Should throw InvalidTitleError when title is invalid: "%s"',
    (invalidTitle) => {
      expect(() => {
        new Title(invalidTitle)
      }).toThrow(InvalidTitleError)
    },
  )

  it('Should create a Title instance when it reaches the minimum length', () => {
    const minimumTitle = 'a'.repeat(5)
    const sut = new Title(minimumTitle)

    expect(sut.getValue()).toStrictEqual(minimumTitle)
  })

  it('Should create a Title instance when it reaches the maximum length', () => {
    const maximumTitle = 'a'.repeat(100)
    const sut = new Title(maximumTitle)

    expect(sut.getValue()).toStrictEqual(maximumTitle)
  })

  it('Should trim the value before validating and storing', () => {
    const sut = new Title('   A valid title   ')

    expect(sut.getValue()).toStrictEqual('A valid title')
  })
})
