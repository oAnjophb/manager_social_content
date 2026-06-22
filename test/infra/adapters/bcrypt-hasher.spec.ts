import { BcryptAdapter } from '#src/infra/adapters/bcrypt-adapter'

describe('BcryptAdapter (integration with real bcrypt)', () => {
  const TEST_COST = 4
  let sut: BcryptAdapter
  let plainPassword: string

  beforeEach(() => {
    sut = new BcryptAdapter(TEST_COST)
    plainPassword = 'SenhaForte1!'
  })

  describe('Hash password', () => {
    it('Should return a non-empty string', async () => {
      const result = await sut.hash(plainPassword)

      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('Should return a string different from the plaintext password', async () => {
      const result = await sut.hash(plainPassword)

      expect(result).not.toBe(plainPassword)
    })

    it('Should return different hashes for the same password on distinct calls (random salt)', async () => {
      const first = await sut.hash(plainPassword)
      const second = await sut.hash(plainPassword)

      expect(first).not.toBe(second)
    })

    it('Should embed the configured cost factor in the hash prefix', async () => {
      const result = await sut.hash(plainPassword)

      expect(result).toMatch(/^\$2[aby]\$04\$/)
    })

    it('Should never contain the plaintext password as a substring of the hash', async () => {
      const result = await sut.hash(plainPassword)

      expect(result).not.toContain(plainPassword)
    })
  })

  describe('compare(plain, hash)', () => {
    it('Should return true for a matching password/hash pair', async () => {
      const hashed = await sut.hash(plainPassword)

      const result = await sut.compare(plainPassword, hashed)

      expect(result).toBe(true)
    })

    it('Should return false when the password is wrong', async () => {
      const hashed = await sut.hash(plainPassword)

      const result = await sut.compare('WrongPass1!', hashed)

      expect(result).toBe(false)
    })

    it('Should return false when the hash is not a bcrypt-shaped string', async () => {
      const result = await sut.compare(plainPassword, 'definitely-not-a-bcrypt-hash')

      expect(result).toBe(false)
    })

    it('Should return false when the hash is an empty string', async () => {
      const result = await sut.compare(plainPassword, '')

      expect(result).toBe(false)
    })
  })

  describe('Performance sanity check', () => {
    it('Should complete a hash + compare cycle in under 500ms at cost 4', async () => {
      const start = Date.now()

      const hashed = await sut.hash(plainPassword)
      await sut.compare(plainPassword, hashed)

      const elapsed = Date.now() - start
      expect(elapsed).toBeLessThan(500)
    })
  })
})
