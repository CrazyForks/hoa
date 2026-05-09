import Hoa from '../../src/hoa.js'

describe('req.length', () => {
  it('should return content-length value', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    ctx.req.set('content-length', '10')
    expect(ctx.req.length).toBe(10)
  })

  it('should return null when no content-length', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    expect(ctx.req.length).toBeNull()
  })

  it('should return zero content-length', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    ctx.req.set('content-length', '0')
    expect(ctx.req.length).toBe(0)
  })

  it('should return null for non-numeric content-length', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    ctx.req.set('content-length', 'abc')
    expect(ctx.req.length).toBeNull()
  })

  it('should return null for content-length with letters', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    ctx.req.set('content-length', '10abc')
    expect(ctx.req.length).toBeNull()
  })

  it('should return null for negative content-length', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    ctx.req.set('content-length', '-10')
    expect(ctx.req.length).toBeNull()
  })

  it('should return null for content-length that exceeds Number.MAX_SAFE_INTEGER', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    ctx.req.set('content-length', '999999999999999999')
    expect(ctx.req.length).toBeNull()
  })

  it('should return null for empty string content-length', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    ctx.req.set('content-length', '')
    expect(ctx.req.length).toBeNull()
  })

  it('should accept content-length above 2 GB but within Number.MAX_SAFE_INTEGER', () => {
    const app = new Hoa()
    const request = new Request('https://example.com/')
    const ctx = app.createContext(request)
    // 2 GiB exactly (a common large-upload boundary)
    ctx.req.set('content-length', '2147483648')
    expect(ctx.req.length).toBe(2147483648)
    // Just below MAX_SAFE_INTEGER (9007199254740991)
    ctx.req.set('content-length', '9007199254740990')
    expect(ctx.req.length).toBe(9007199254740990)
  })
})
