import { mock, type MockProxy } from 'vitest-mock-extended'

import { DataBaseConnectionError } from '#src/application/erros/database-connection-error'
import { InvalidTokenError } from '#src/application/erros/invalid-token-error'
import type { AccessTokenDisabler, AccessTokenVerifier, Payload } from '#src/application/interfaces/token-manipulate'
import { SignOutUseCase, type SignOutInput } from '#src/application/use-cases/sign-out/sign-out-use-case'
import { userRole } from '#src/domain/entity/user'
import { UniqueEntityId } from '#src/domain/value-objects/uniqueId'

describe('SignOut UseCase', () => {
  let input: SignOutInput
  let mockPayload: Payload
  let tokenVerifier: MockProxy<AccessTokenVerifier>
  let tokenDisabler: MockProxy<AccessTokenDisabler>

  let sut: SignOutUseCase

  beforeEach(() => {
    mockPayload = {
      sub: new UniqueEntityId(),
      role: userRole.EDITOR,
    }

    tokenVerifier = mock<AccessTokenVerifier>()
    tokenVerifier.verifyToken.mockResolvedValue(mockPayload)

    tokenDisabler = mock<AccessTokenDisabler>()
    tokenDisabler.disableToken.mockResolvedValue(undefined)

    input = {
      userToken: 'any_valid_token',
    }

    sut = new SignOutUseCase(tokenVerifier, tokenDisabler)
  })

  describe('Behavior', () => {
    it('Should garanted TokenVerifier is called with received token', async () => {
      await sut.execute(input)

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(tokenVerifier.verifyToken).toHaveBeenLastCalledWith(input.userToken)
    })

    it('Should garanted TokenDisabler is called with received token when verify passes', async () => {
      await sut.execute(input)

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(tokenDisabler.disableToken).toHaveBeenLastCalledWith(input.userToken)
    })

    it('Should resolve when token is valid and disabled successfully', async () => {
      await expect(sut.execute(input)).resolves.toBeUndefined()
    })

    it('Should resolve when token is already disabled (idempotent)', async () => {
      tokenDisabler.disableToken.mockResolvedValueOnce(undefined)

      await expect(sut.execute(input)).resolves.toBeUndefined()
    })

    it('Should throw InvalidTokenError when TokenVerifier fails', async () => {
      tokenVerifier.verifyToken.mockRejectedValueOnce(new Error('jwt malformed'))

      await expect(sut.execute(input)).rejects.toThrow(InvalidTokenError)
    })

    it('Should not call TokenDisabler when token is invalid', async () => {
      tokenVerifier.verifyToken.mockRejectedValueOnce(new Error('jwt malformed'))

      await expect(sut.execute(input)).rejects.toThrow(InvalidTokenError)
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(tokenDisabler.disableToken).not.toHaveBeenCalled()
    })
  })

  describe('Infrastructure', () => {
    it('Should throw DataBaseConnectionError if TokenDisabler failure', async () => {
      tokenDisabler.disableToken.mockImplementation(() => {
        throw new DataBaseConnectionError()
      })

      await expect(() => sut.execute(input)).rejects.toThrow(DataBaseConnectionError)
    })
  })
})
