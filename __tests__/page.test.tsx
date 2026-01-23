import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders the main title', () => {
    render(<Home />)
    
    expect(screen.getByText('BLANCO')).toBeInTheDocument()
    expect(screen.getByText('NEGRO')).toBeInTheDocument()
    // Buscar SASTRERÍA específicamente en el contenido principal (más grande)
    expect(screen.getByText((content, element) => {
      return element?.className.includes('text-xl md:text-2xl lg:text-3xl') && content === 'SASTRERÍA'
    })).toBeInTheDocument()
  })

  it('renders the construction message', () => {
    render(<Home />)
    
    expect(screen.getByText('SITIO BAJO CONSTRUCCIÓN')).toBeInTheDocument()
  })

  it('renders the header component', () => {
    render(<Home />)
    
    expect(screen.getByText('BLANCO Y NEGRO')).toBeInTheDocument()
  })
})