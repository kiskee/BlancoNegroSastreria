import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// Mock del componente Header
jest.mock('../components/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header Component</header>;
  };
});

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Home Page', () => {
  it('does not render main title in center', () => {
    render(<Home />);
    
    // El título principal ya no está en el centro, solo en el header
    expect(screen.queryByText('BLANCO')).not.toBeInTheDocument();
    expect(screen.queryByText('NEGRO')).not.toBeInTheDocument();
    expect(screen.queryByText('SASTRERÍA')).not.toBeInTheDocument();
  });

  it('renders the header component', () => {
    render(<Home />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders the services call-to-action section', () => {
    render(<Home />);
    
    expect(screen.getByText('SERVICIOS PROFESIONALES')).toBeInTheDocument();
    expect(screen.getByText(/Descubre nuestra amplia gama de servicios/)).toBeInTheDocument();
  });

  it('has link to services page', () => {
    render(<Home />);
    
    const servicesLink = screen.getByRole('link', { name: 'VER TODOS LOS SERVICIOS' });
    expect(servicesLink).toHaveAttribute('href', '/servicios');
  });

  it('renders WhatsApp contact section', () => {
    render(<Home />);
    
    expect(screen.getByText('CONTACTO DIRECTO')).toBeInTheDocument();
    expect(screen.getByText('300 326 8025')).toBeInTheDocument();
  });

  it('has WhatsApp link with correct href', () => {
    render(<Home />);
    
    const whatsappLink = screen.getByRole('link', { name: /300 326 8025/ });
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/573003268025');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has proper professional background styling', () => {
    const { container } = render(<Home />);
    const mainDiv = container.firstChild;
    
    expect(mainDiv).toHaveClass('min-h-screen');
    expect(mainDiv).toHaveClass('bg-gradient-to-br');
    expect(mainDiv).toHaveClass('from-black');
    expect(mainDiv).toHaveClass('via-gray-900');
    expect(mainDiv).toHaveClass('to-black');
  });

  it('renders decorative geometric elements', () => {
    const { container } = render(<Home />);
    
    // Verificar que hay elementos decorativos geométricos
    const decorativeElements = container.querySelectorAll('.border-white');
    expect(decorativeElements.length).toBeGreaterThan(0);
  });

  it('renders hero section with valuable information', () => {
    render(<Home />);
    
    expect(screen.getByText('+15 Años')).toBeInTheDocument();
    expect(screen.getByText('de experiencia profesional')).toBeInTheDocument();
    expect(screen.getByText('Calidad Premium')).toBeInTheDocument();
    expect(screen.getByText('Materiales de primera y acabados perfectos')).toBeInTheDocument();
    expect(screen.getByText('Entrega Puntual')).toBeInTheDocument();
    expect(screen.getByText('Cumplimos con los tiempos acordados')).toBeInTheDocument();
  });

  it('renders hero section in grid layout', () => {
    const { container } = render(<Home />);
    
    const heroGrid = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
    expect(heroGrid).toBeInTheDocument();
  });

  it('maintains professional styling with proper opacity and backdrop blur', () => {
    const { container } = render(<Home />);
    
    const serviceSection = container.querySelector('.bg-black.bg-opacity-60.backdrop-blur-sm');
    expect(serviceSection).toBeInTheDocument();
  });

  it('does not render individual service items on home page', () => {
    render(<Home />);
    
    expect(screen.queryByText('Confección a la medida')).not.toBeInTheDocument();
    expect(screen.queryByText('Reparación profesional')).not.toBeInTheDocument();
  });
});