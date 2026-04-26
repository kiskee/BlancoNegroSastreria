import { render } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    expect(() => render(<Home />)).not.toThrow();
  });

  it('has min-h-full and bg-black styling', () => {
    const { container } = render(<Home />);
    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('min-h-full');
    expect(mainDiv).toHaveClass('bg-black');
  });
});
