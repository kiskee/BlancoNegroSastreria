import { render, screen } from '@testing-library/react'
import AlterationsSection from '../components/AlterationsSection'

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

describe('AlterationsSection Component', () => {
  it('renders without crashing', () => {
    expect(() => render(<AlterationsSection />)).not.toThrow()
  })

  it('renders the background image', () => {
    render(<AlterationsSection />)
    expect(screen.getByAltText('Servicio de arreglos')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<AlterationsSection />)
    expect(screen.getByText('Ajustes y arreglos')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<AlterationsSection />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText('Perfección en cada detalle.')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<AlterationsSection />)
    expect(screen.getByText(/No importa la prenda/)).toBeInTheDocument()
  })

  it('renders all four feature items', () => {
    render(<AlterationsSection />)
    expect(screen.getByText('Ajuste de trajes')).toBeInTheDocument()
    expect(screen.getByText('Arreglo de vestidos')).toBeInTheDocument()
    expect(screen.getByText('Modificación de tallas')).toBeInTheDocument()
    expect(screen.getByText('Reparaciones finas')).toBeInTheDocument()
  })

  it('renders both CTA links', () => {
    render(<AlterationsSection />)
    const solicitar = screen.getByRole('link', { name: 'Solicitar arreglo' })
    expect(solicitar.getAttribute('href')).toContain('wa.me/573003268025')

    const servicios = screen.getByRole('link', { name: 'Ver servicios' })
    expect(servicios).toHaveAttribute('href', '/servicios')
  })

  it('outline button has correct variant', () => {
    render(<AlterationsSection />)
    expect(screen.getByRole('link', { name: 'Ver servicios' })).toHaveAttribute(
      'data-variant',
      'outline'
    )
  })
})
