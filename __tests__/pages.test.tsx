import { render, screen } from '@testing-library/react'
import Servicios from '../app/servicios/page'
import { metadata as serviciosMetadata } from '../app/servicios/page'
import Contacto from '../app/contacto/page'
import { metadata as contactoMetadata } from '../app/contacto/page'

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: { children: React.ReactNode; href: string } & React.ComponentProps<'a'>) => {
    return <a href={href} {...props}>{children}</a>
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

// Mock Next.js Image component
jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  )
  MockImage.displayName = 'MockImage'
  return MockImage
})

// Mock ServiceCard component
jest.mock('../components/ServiceCard', () => {
  return function MockServiceCard({ num, title, description }: { num: string; title: string; description: string }) {
    return (
      <div data-testid="service-card">
        <span>{num}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
});

describe('Servicios Page', () => {
  it('renders the servicios banner heading', () => {
    render(<Servicios />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/El oficio/)).toBeInTheDocument()
  })

  it('renders service cards', () => {
    render(<Servicios />)

    const serviceCards = screen.getAllByTestId('service-card')
    expect(serviceCards).toHaveLength(6)
  })

  it('renders all service titles', () => {
    render(<Servicios />)

    expect(screen.getByText('Confección a la Medida')).toBeInTheDocument()
    expect(screen.getByText('Reparación Profesional')).toBeInTheDocument()
    expect(screen.getByText('Arreglo de Prendas')).toBeInTheDocument()
    expect(screen.getByText('Lencería de Hogar')).toBeInTheDocument()
    expect(screen.getByText('Tejido de Prendas')).toBeInTheDocument()
    expect(screen.getByText('Artículos de Cuero')).toBeInTheDocument()
  })

  it('renders WhatsApp contact section', () => {
    render(<Servicios />)

    expect(screen.getByText('¿Necesitas más información?')).toBeInTheDocument()
    expect(screen.getByText('300 326 8025')).toBeInTheDocument()
  })

  it('has WhatsApp link with icon and correct href', () => {
    render(<Servicios />)

    const whatsappLink = screen.getByRole('link', { name: /300 326 8025/ })
    expect(whatsappLink.getAttribute('href')).toContain('wa.me/573003268025')
    expect(whatsappLink).toHaveAttribute('target', '_blank')
    expect(whatsappLink.querySelector('svg')).not.toBeNull()
  })
})

describe('Contacto Page', () => {
  it('renders the contacto banner heading', () => {
    render(<Contacto />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Hablemos de tu/)).toBeInTheDocument()
  })

  it('renders WhatsApp contact card', () => {
    render(<Contacto />)

    expect(screen.getByRole('heading', { name: 'WhatsApp' })).toBeInTheDocument()
    expect(screen.getByText('300 326 8025')).toBeInTheDocument()
  })

  it('renders location card with the full address', () => {
    render(<Contacto />)

    expect(screen.getByRole('heading', { name: 'Ubicación' })).toBeInTheDocument()
    expect(screen.getAllByText(/Calle 36 Sur # 41-32/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Arriba de Las Granjas/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Envigado, Antioquia/).length).toBeGreaterThan(0)
  })

  it('renders the Google Maps embed with an accessible title', () => {
    render(<Contacto />)

    const map = screen.getByTitle('Mapa de ubicación de Blanco y Negro Sastrería')
    expect(map.tagName).toBe('IFRAME')
    expect(map.getAttribute('src')).toContain('maps.google.com')
    expect(map.getAttribute('src')).toContain('output=embed')
    expect(map.getAttribute('loading')).toBe('lazy')
    expect(map.getAttribute('referrerpolicy')).toBe('no-referrer-when-downgrade')
  })

  it('renders directions links pointing to Google Maps', () => {
    render(<Contacto />)

    const directionsLinks = screen.getAllByRole('link', { name: /Cómo llegar/ })
    expect(directionsLinks.length).toBeGreaterThan(0)
    directionsLinks.forEach((link) => {
      expect(link.getAttribute('href')).toContain('google.com/maps')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('all contact links point to WhatsApp or Google Maps', () => {
    render(<Contacto />)

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      const href = link.getAttribute('href') || ''
      const isWhatsApp = href.includes('wa.me/573003268025')
      const isGoogleMaps = href.includes('google.com/maps')
      expect(isWhatsApp || isGoogleMaps).toBe(true)
    })
  })

  it('renders the WhatsApp CTA with icon', () => {
    render(<Contacto />)

    const cta = screen.getByRole('link', { name: /Escríbenos por WhatsApp/ })
    expect(cta.getAttribute('href')).toContain('wa.me/573003268025')
    expect(cta.querySelector('svg')).not.toBeNull()
  })
})

describe('Page SEO metadata', () => {
  it('servicios exposes its own canonical URL', () => {
    expect(serviciosMetadata.alternates?.canonical).toBe('/servicios')
    expect(serviciosMetadata.openGraph?.url).toBe('/servicios')
    expect(serviciosMetadata.description).toContain('sastrería')
  })

  it('contacto exposes its own canonical URL', () => {
    expect(contactoMetadata.alternates?.canonical).toBe('/contacto')
    expect(contactoMetadata.openGraph?.url).toBe('/contacto')
    expect(contactoMetadata.description).toContain('WhatsApp')
  })
})
