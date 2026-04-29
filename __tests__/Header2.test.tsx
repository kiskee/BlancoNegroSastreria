import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header2 from '../components/Header2'

jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  )
  MockImage.displayName = 'MockImage'
  return MockImage
})

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('Header2 Component', () => {
  it('renders without crashing', () => {
    expect(() => render(<Header2 />)).not.toThrow()
  })

  it('renders the logo text', () => {
    render(<Header2 />)
    expect(screen.getByText('BLANCO & NEGRO')).toBeInTheDocument()
    expect(screen.getByText('SASTRERÍA')).toBeInTheDocument()
  })

  it('renders the logo image', () => {
    render(<Header2 />)
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Header2 />)
    const links = screen.getAllByRole('link')
    const hrefs = links.map((l) => l.getAttribute('href'))
    expect(hrefs).toContain('/')
    expect(hrefs).toContain('/servicios')
    expect(hrefs).toContain('/contacto')
  })

  it('desktop nav shows Inicio, Servicios, Contacto', () => {
    render(<Header2 />)
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Servicios')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('logo link points to home', () => {
    render(<Header2 />)
    const logoLink = screen.getAllByRole('link').find((l) => l.getAttribute('href') === '/')
    expect(logoLink).toBeDefined()
  })
})
