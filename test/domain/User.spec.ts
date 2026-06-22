import { User, userRole } from '#src/domain/entity/user'
import { UniqueEntityId } from '#src/domain/value-objects/uniqueId'

describe('User Entity', () => {
  const makeProps = () => ({
    name: 'Joe Doe',
    email: 'joe@doe.com',
    passwordHash: 'hashed-password',
    role: userRole.ADMIN,
    createdAt: new Date('2020-01-10'),
  })

  it('Should expose every provided prop through its getters', () => {
    const props = makeProps()
    const sut = new User(props)

    expect(sut.name).toStrictEqual(props.name)
    expect(sut.email).toStrictEqual(props.email)
    expect(sut.passwordHash).toStrictEqual(props.passwordHash)
    expect(sut.role).toStrictEqual(userRole.ADMIN)
    expect(sut.createdAt).toStrictEqual(props.createdAt)
  })

  it('Should generate a UniqueEntityId when no id is provided', () => {
    const sut = new User(makeProps())

    expect(sut.id).toBeInstanceOf(UniqueEntityId)
  })

  it('Should use the provided id when one is given', () => {
    const id = new UniqueEntityId('user-id')
    const sut = new User(makeProps(), id)

    expect(sut.id).toBe(id)
    expect(sut.id.toValue()).toStrictEqual('user-id')
  })

  it('Should return null for deletedAt and updatedAt when they are not provided', () => {
    const sut = new User(makeProps())

    expect(sut.deletedAt).toBeNull()
    expect(sut.updatedAt).toBeNull()
  })

  it('Should return deletedAt and updatedAt when they are provided', () => {
    const deletedAt = new Date('2020-02-01')
    const updatedAt = new Date('2020-01-20')
    const sut = new User({ ...makeProps(), deletedAt, updatedAt })

    expect(sut.deletedAt).toStrictEqual(deletedAt)
    expect(sut.updatedAt).toStrictEqual(updatedAt)
  })
})
