import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />)
    
    expect(screen.getByText('BLANCO Y NEGRO')).toBeInTheDocument()
    expect(screen.getByText('SASTRERÍA')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    const navigation = screen.getByRole('navigation')
    expect(navigation).toContainElement(screen.getByText('INICIO'))
    expect(navigation).toContainElement(screen.getByText('SERVICIOS'))
    expect(navigation).toContainElement(screen.getByText('CONTACTO'))
  })

  it('navigation links have correct href attributes', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /INICIO/ })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /SERVICIOS/ })).toHaveAttribute('href', '/servicios')
    expect(screen.getByRole('link', { name: /CONTACTO/ })).toHaveAttribute('href', '/contacto')
  })
})