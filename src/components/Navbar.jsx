import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center">
      <div className="logo">
        <img
          src="./logo.png"  // Update this path
          alt="Company Logo"
          width="130px"
        />
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-light ${index == 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
