import { InvalidActionDateError } from '#src/domain/errors/action-date-error'
import { ActionDate } from '#src/domain/value-objects/actionDate'

describe('ActionDate Entity', () => {
  it.each(['2020/01/01', '01-01-2020', '2020-1-1', '20200101', 'not-a-date', ''])(
    'Should throw InvalidActionDateError when format is invalid: "%s"',
    (invalidDate) => {
      expect(() => {
        new ActionDate(invalidDate)
      }).toThrow(InvalidActionDateError)
    },
  )

  it.each(['2020-13-01', '2020-00-10'])(
    'Should throw InvalidActionDateError when date is impossible: "%s"',
    (invalidDate) => {
      expect(() => {
        new ActionDate(invalidDate)
      }).toThrow(InvalidActionDateError)
    },
  )

  it('Should throw InvalidActionDateError when date is in the future', () => {
    expect(() => {
      new ActionDate('2999-01-01')
    }).toThrow(InvalidActionDateError)
  })

  it('Should create an ActionDate instance when date is valid and not in the future', () => {
    const validDate = '2020-01-15'
    const sut = new ActionDate(validDate)

    expect(sut.getValue()).toStrictEqual(new Date(validDate))
  })
})
