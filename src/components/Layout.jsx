import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100">
            { children }
        </div>
    </div>
  )
}
