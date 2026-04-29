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

jest.mock('../components/ui/button', () => ({
  Button: ({ children, variant, ...props }: { children: React.ReactNode; variant?: string }) => (
    <button data-variant={variant} {...props}>{children}</button>
  ),
}))

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

  it('renders both CTA buttons', () => {
    render(<AlterationsSection />)
    expect(screen.getByRole('button', { name: 'Solicitar arreglo' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ver servicios' })).toBeInTheDocument()
  })

  it('outline button has correct variant', () => {
    render(<AlterationsSection />)
    expect(screen.getByRole('button', { name: 'Ver servicios' })).toHaveAttribute('data-variant', 'outline')
  })
})
