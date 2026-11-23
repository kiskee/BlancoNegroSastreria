import { render, screen } from '@testing-library/react'
import WomenSection from '../components/WomenSection'

jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  )
  MockImage.displayName = 'MockImage'
  return MockImage
})

jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: { children: React.ReactNode; href: string } & React.ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('WomenSection Component', () => {
  it('renders without crashing', () => {
    expect(() => render(<WomenSection />)).not.toThrow()
  })

  it('renders the section image', () => {
    render(<WomenSection />)
    const images = screen.getAllByAltText('Colección femenina')
    expect(images.length).toBeGreaterThan(0)
  })

  it('renders the section label', () => {
    render(<WomenSection />)
    expect(screen.getByText('Para ella')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<WomenSection />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText('Diseñamos')).toBeInTheDocument()
    expect(screen.getByText('tu esencia.')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<WomenSection />)
    expect(screen.getByText(/Cada mujer es única/)).toBeInTheDocument()
  })

  it('renders all four feature categories', () => {
    render(<WomenSection />)
    expect(screen.getByText('Trajes')).toBeInTheDocument()
    expect(screen.getByText('Vestidos')).toBeInTheDocument()
    expect(screen.getByText('Blusas')).toBeInTheDocument()
    expect(screen.getByText('Abrigos')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<WomenSection />)
    expect(screen.getByText('Elegancia que empodera')).toBeInTheDocument()
    expect(screen.getByText('Diseños que hablan por ti')).toBeInTheDocument()
  })

  it('renders the CTA link pointing to WhatsApp', () => {
    render(<WomenSection />)
    const cta = screen.getByRole('link', { name: 'Ver colección' })
    expect(cta.getAttribute('href')).toContain('wa.me/573003268025')
  })

  it('renders feature numbers', () => {
    render(<WomenSection />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })
})
