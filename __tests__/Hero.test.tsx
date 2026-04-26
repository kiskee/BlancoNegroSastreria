import { render, screen } from '@testing-library/react'
import HeroWomen from '../components/Hero'

jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  )
  MockImage.displayName = 'MockImage'
  return MockImage
})

jest.mock('../components/ui/button', () => ({
  Button: ({ children, className, variant, ...props }: { children: React.ReactNode; className?: string; variant?: string }) => (
    <button className={className} data-variant={variant} {...props}>
      {children}
    </button>
  ),
}))

describe('HeroWomen Component', () => {
  it('renders without crashing', () => {
    expect(() => render(<HeroWomen />)).not.toThrow()
  })

  it('renders the background image with correct alt text', () => {
    render(<HeroWomen />)
    expect(screen.getByAltText('Sastre mujer confeccionando traje')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<HeroWomen />)
    expect(screen.getByText('Sastrería para mujer')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<HeroWomen />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Diseñamos tu esencia.')).toBeInTheDocument()
    expect(screen.getByText('Confeccionamos tu poder.')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<HeroWomen />)
    expect(screen.getByText(/Cada prenda es una extensión de quién eres/)).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<HeroWomen />)
    expect(screen.getByRole('button', { name: 'Reservar cita' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ver colección' })).toBeInTheDocument()
  })

  it('outline button has correct variant', () => {
    render(<HeroWomen />)
    const outlineBtn = screen.getByRole('button', { name: 'Ver colección' })
    expect(outlineBtn).toHaveAttribute('data-variant', 'outline')
  })
})
