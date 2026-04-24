import { render, screen } from '@testing-library/react';
import Home from '../app/page';

jest.mock('../components/Header2', () => {
  return function MockHeader2() {
    return <header data-testid="header2">Header2 Component</header>;
  };
});

describe('Home Page', () => {
  it('renders without crashing', () => {
    expect(() => render(<Home />)).not.toThrow();
  });

  it('renders the Header2 component', () => {
    render(<Home />);
    expect(screen.getByTestId('header2')).toBeInTheDocument();
  });

  it('has min-h-screen and bg-black styling', () => {
    const { container } = render(<Home />);
    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('min-h-screen');
    expect(mainDiv).toHaveClass('bg-black');
  });
});
