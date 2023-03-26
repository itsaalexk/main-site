// Footer.test.js
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'

test('renders "Alex Kononenko" in the footer', () => {
  const { getByText } = render(<Footer />)
  const linkElement = getByText(/Created By Alex Kononenko/i)
  expect(linkElement).toBeInTheDocument()
})
