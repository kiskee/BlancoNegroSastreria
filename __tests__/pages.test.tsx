import { render, screen } from '@testing-library/react'
import Servicios from '../app/servicios/page'
import Contacto from '../app/contacto/page'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Servicios Page', () => {
  it('renders the servicios title', () => {
    render(<Servicios />)
    
    expect(screen.getByRole('heading', { name: 'SERVICIOS' })).toBeInTheDocument()
  })

  it('renders construction message', () => {
    render(<Servicios />)
    
    expect(screen.getByText('PÁGINA EN CONSTRUCCIÓN')).toBeInTheDocument()
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