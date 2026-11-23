import sitemap from '../app/sitemap'
import robots from '../app/robots'

describe('sitemap', () => {
  it('lists all public pages with absolute URLs', () => {
    const entries = sitemap()
    const urls = entries.map((entry) => entry.url)

    expect(urls).toEqual([
      'https://blancoynegrosastreria.com',
      'https://blancoynegrosastreria.com/servicios',
      'https://blancoynegrosastreria.com/contacto',
    ])
    urls.forEach((url) => expect(url).toMatch(/^https:\/\/blancoynegrosastreria\.com/))
  })

  it('includes image entries for image search', () => {
    const entries = sitemap()
    entries.forEach((entry) => {
      expect(entry.images && entry.images.length).toBeGreaterThan(0)
    })
  })

  it('has lastModified dates and priorities', () => {
    const entries = sitemap()
    entries.forEach((entry) => {
      expect(entry.lastModified).toBeDefined()
      expect(entry.priority).toBeGreaterThan(0)
      expect(entry.changeFrequency).toBe('monthly')
    })
  })
})

describe('robots', () => {
  it('allows crawling of the whole site', () => {
    const config = robots()

    expect(config.rules).toEqual({
      userAgent: '*',
      allow: '/',
    })
  })

  it('points to the sitemap with absolute URL', () => {
    const config = robots()

    expect(config.sitemap).toBe('https://blancoynegrosastreria.com/sitemap.xml')
  })
})
