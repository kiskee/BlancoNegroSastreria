import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

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

describe('Hero Component', () => {
  it('renders without crashing', () => {
    expect(() => render(<Hero />)).not.toThrow()
  })

  it('renders the background image with correct alt text', () => {
    render(<Hero />)
    expect(screen.getByAltText('Sastre mujer confeccionando traje')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Hero />)
    expect(screen.getByText('Sastrería para mujer')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Diseñamos tu esencia.')).toBeInTheDocument()
    expect(screen.getByText('Confeccionamos tu poder.')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Cada prenda es una extensión de quién eres/)).toBeInTheDocument()
  })

  it('renders both CTA links', () => {
    render(<Hero />)
    const reservar = screen.getByRole('link', { name: 'Reservar cita' })
    expect(reservar.getAttribute('href')).toContain('wa.me/573003268025')
    expect(reservar).toHaveAttribute('target', '_blank')

    const coleccion = screen.getByRole('link', { name: 'Ver colección' })
    expect(coleccion).toHaveAttribute('href', '#coleccion')
  })

  it('outline button has correct variant', () => {
    render(<Hero />)
    const outlineBtn = screen.getByRole('link', { name: 'Ver colección' })
    expect(outlineBtn).toHaveAttribute('data-variant', 'outline')
  })
})
