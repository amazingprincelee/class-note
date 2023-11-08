import React from 'react'

function Footer() {

    const date = new Date();

    const year = date.getFullYear()


  return (
    <footer>
        <p>Copywrite {year}</p>
        <p className='mt-0'>Designed by Prince Nna @agxcash</p>
    </footer>
  )
}

export default Footer