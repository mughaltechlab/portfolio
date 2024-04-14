import React from 'react'

function Footer() {
    const date = new Date()
  return (
    <footer className="max-w-[1200px] mx-auto sm:h-[150px] p-12 flex justify-between">
        <span className="primary-color">S.A.M</span>
        <p className="text-gray-600">mughalsaqib.dev@gmail.com <br /> #webDev{date.getFullYear()} </p>
    </footer>
  )
}

export default Footer