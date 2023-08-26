import React from 'react'
import TopBar from './top-bar'
import Navigation from './navigation'

const Header = () => {
  return (
    <header>
      <div>
        <TopBar />
        <Navigation />
      </div>
    </header>
  )
}

export default Header