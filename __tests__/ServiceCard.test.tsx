import { render, screen } from '@testing-library/react';
import ServiceCard from '../components/ServiceCard';

describe('ServiceCard Component', () => {
  const mockProps = {
    num: '01',
    title: 'Test Service',
    description: 'This is a test service description'
  };

  it('renders service number correctly', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('renders service title correctly', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('Test Service')).toBeInTheDocument();
  });

  it('renders service description correctly', () => {
    render(<ServiceCard {...mockProps} />);
    
    expect(screen.getByText('This is a test service description')).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const cardElement = container.firstChild;
    
    expect(cardElement).toHaveClass('bg-white/5');
    expect(cardElement).toHaveClass('backdrop-blur-sm');
    expect(cardElement).toHaveClass('border');
    expect(cardElement).toHaveClass('border-white/20');
    expect(cardElement).toHaveClass('rounded-xl');
  });

  it('has hover transition effects', () => {
    const { container } = render(<ServiceCard {...mockProps} />);
    const cardElement = container.firstChild;
    
    expect(cardElement).toHaveClass('hover:border-purple-400/40');
    expect(cardElement).toHaveClass('transition-all');
    expect(cardElement).toHaveClass('duration-300');
  });
});
