import { render, screen } from '@testing-library/react'
import Servicios from '../app/servicios/page'
import Contacto from '../app/contacto/page'

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

// Mock ServiceCard component
jest.mock('../components/ServiceCard', () => {
  return function MockServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
    return (
      <div data-testid="service-card">
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
});

describe('Servicios Page', () => {
  it('renders the servicios title', () => {
    render(<Servicios />)
    
    expect(screen.getByRole('heading', { name: 'SERVICIOS' })).toBeInTheDocument()
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

  it('has WhatsApp link with correct href', () => {
    render(<Servicios />)
    
    const whatsappLink = screen.getByRole('link', { name: /300 326 8025/ })
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/573003268025')
  })
})

describe('Contacto Page', () => {
  it('renders the contacto title', () => {
    render(<Contacto />)
    
    expect(screen.getByRole('heading', { name: 'CONTACTO' })).toBeInTheDocument()
  })

  it('renders construction message', () => {
    render(<Contacto />)
    
    expect(screen.getByText('PÁGINA EN CONSTRUCCIÓN')).toBeInTheDocument()
  })
})