import { render } from '@testing-library/react'
import RootLayout from '../app/layout'

// Mock Next.js font imports
jest.mock('next/font/google', () => ({
  Playfair_Display: () => ({ className: 'playfair-display' }),
}))

// Mock CSS import
jest.mock('../app/globals.css', () => ({}))

describe('RootLayout', () => {
  it('renders without crashing', () => {
    const TestChild = () => <div data-testid="test-child">Test Content</div>
    
    expect(() => {
      render(
        <RootLayout>
          <TestChild />
        </RootLayout>
      )
    }).not.toThrow()
  })

  it('renders children content', () => {
    const TestChild = () => <div data-testid="test-child">Test Content</div>
    
    const { getByTestId } = render(
      <RootLayout>
        <TestChild />
      </RootLayout>
    )
    
    expect(getByTestId('test-child')).toBeInTheDocument()
  })

  it('exports metadata correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { metadata } = require('../app/layout')
    
    expect(metadata).toBeDefined()
    expect(metadata.title.default).toBe('Sastrería en Envigado | Blanco y Negro - Trajes a la Medida')
    expect(metadata.title.template).toBe('%s | Blanco y Negro Sastrería')
    expect(metadata.description).toContain('Sastrería en Envigado')
  })

  it('exposes SEO metadata for indexing', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { metadata } = require('../app/layout')

    expect(metadata.metadataBase.href).toBe('https://blancoynegrosastreria.com/')
    expect(metadata.alternates.canonical).toBe('/')
    expect(metadata.robots.index).toBe(true)
    expect(metadata.robots.follow).toBe(true)
    expect(metadata.openGraph.locale).toBe('es_CO')
    expect(metadata.openGraph.siteName).toBe('Blanco y Negro Sastrería')
    expect(metadata.twitter.card).toBe('summary_large_image')
  })

  it('renders LocalBusiness structured data', () => {
    const TestChild = () => <div data-testid="test-child">Test Content</div>

    const { container } = render(
      <RootLayout>
        <TestChild />
      </RootLayout>
    )

    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()

    const data = JSON.parse(script!.textContent || '{}')
    const types = data['@graph'].map((node: { '@type': string }) => node['@type'])
    expect(types).toContain('LocalBusiness')
    expect(types).toContain('WebSite')

    const business = data['@graph'].find(
      (node: { '@type': string }) => node['@type'] === 'LocalBusiness'
    )
    expect(business.name).toBe('Blanco y Negro Sastrería')
    expect(business.telephone).toBe('+573003268025')
    expect(business.address.streetAddress).toContain('Calle 36 Sur # 41-32')
    expect(business.address.addressLocality).toBe('Envigado')
    expect(business.address.addressCountry).toBe('CO')
    expect(business.hasMap).toContain('google.com/maps')
  })
})