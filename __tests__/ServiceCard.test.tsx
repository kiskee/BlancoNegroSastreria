import { render, screen } from '@testing-library/react';
import ServiceCard from '../components/ServiceCard';

describe('ServiceCard Component', () => {
  const mockProps = {
    title: 'Test Service',
    description: 'This is a test service description',
    icon: '🧵'
  };

  it('renders service title correctly', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('Test Service')).toBeInTheDocument();
  });

  it('renders service description correctly', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('This is a test service description')).toBeInTheDocument();
  });

  it('renders service icon correctly', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('🧵')).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const cardElement = container.firstChild;
    
    expect(cardElement).toHaveClass('bg-black');
    expect(cardElement).toHaveClass('bg-opacity-60');
    expect(cardElement).toHaveClass('backdrop-blur-sm');
    expect(cardElement).toHaveClass('border');
    expect(cardElement).toHaveClass('border-white');
    expect(cardElement).toHaveClass('rounded-lg');
  });

  it('has hover transition effects', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const cardElement = container.firstChild;
    
    expect(cardElement).toHaveClass('hover:border-opacity-50');
    expect(cardElement).toHaveClass('transition-all');
    expect(cardElement).toHaveClass('duration-300');
  });
});