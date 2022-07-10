import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header>
        <a href="/">Home</a>
        <a href="/about">About</a>  
        <a href="/project">Projects</a>
        <a href="/blog">Blog</a>
    </header>
  )
}

export default Header