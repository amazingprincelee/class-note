import React from 'react'

function Footer() {

    const date = new Date();

    const year = date.getFullYear()


  return (
    <footer className='container'>
        <p>Copywrite {year}</p>
    </footer>
  )
}

export default Footer