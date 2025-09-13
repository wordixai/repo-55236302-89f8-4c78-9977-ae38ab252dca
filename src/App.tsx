import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App