import { UniqueEntityId } from '#src/domain/value-objects/uniqueId'

describe('UniqueEntityId Entity', () => {
  it('Should generate a uuid when no value is provided', () => {
    const sut = new UniqueEntityId()

    expect(sut.toValue()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
  })

  it('Should use the provided value', () => {
    const value = 'a-custom-id'
    const sut = new UniqueEntityId(value)

    expect(sut.toValue()).toStrictEqual(value)
    expect(sut.toString()).toStrictEqual(value)
  })

  it('Should generate different ids for different instances', () => {
    const first = new UniqueEntityId()
    const second = new UniqueEntityId()

    expect(first.toValue()).not.toStrictEqual(second.toValue())
  })
})
