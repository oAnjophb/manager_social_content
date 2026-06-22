import { Content, status } from '#src/domain/entity/content'
import { UniqueEntityId } from '#src/domain/value-objects/uniqueId'

describe('Content Entity', () => {
  const makeProps = () => ({
    authorId: 'author-id',
    title: 'A valid content title',
    description: 'A valid content description with enough characters',
    Actiondate: new Date('2020-01-15'),
    imagesUrl: ['https://example.com/img.png'],
    status: status.PUBLISHED,
    createdAt: new Date('2020-01-10'),
  })

  it('Should expose every provided prop through its getters', () => {
    const props = makeProps()
    const sut = new Content(props)

    expect(sut.authorId).toStrictEqual(props.authorId)
    expect(sut.title).toStrictEqual(props.title)
    expect(sut.description).toStrictEqual(props.description)
    expect(sut.Actiondate).toStrictEqual(props.Actiondate)
    expect(sut.imagesUrl).toStrictEqual(props.imagesUrl)
    expect(sut.Status).toStrictEqual(status.PUBLISHED)
    expect(sut.createdAt).toStrictEqual(props.createdAt)
  })

  it('Should generate a UniqueEntityId when no id is provided', () => {
    const sut = new Content(makeProps())

    expect(sut.id).toBeInstanceOf(UniqueEntityId)
  })

  it('Should use the provided id when one is given', () => {
    const id = new UniqueEntityId('content-id')
    const sut = new Content(makeProps(), id)

    expect(sut.id).toBe(id)
    expect(sut.id.toValue()).toStrictEqual('content-id')
  })

  it('Should return null for deletedAt and updatedAt when they are not provided', () => {
    const sut = new Content(makeProps())

    expect(sut.deletedAt).toBeNull()
    expect(sut.updatedAt).toBeNull()
  })

  it('Should return deletedAt and updatedAt when they are provided', () => {
    const deletedAt = new Date('2020-02-01')
    const updatedAt = new Date('2020-01-20')
    const sut = new Content({ ...makeProps(), deletedAt, updatedAt })

    expect(sut.deletedAt).toStrictEqual(deletedAt)
    expect(sut.updatedAt).toStrictEqual(updatedAt)
  })
})
