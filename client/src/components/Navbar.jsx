import { useEffect,useState } from 'react'
import woodpecker from '../assets/logo.png'

function Navbar() {

  const [activeSection,setActiveSection]= useState("home")

  useEffect(() =>{
    const handleScroll =() => {
      const section = [
        "home",
        "products",
        "about",
        "gallery",
        "contact",
      ]

      section.forEach((section)=>{
        const element = document.getElementById(section)
        if(element){
          const top = element.offsetTop - 200
          const height = element.offsetHeight

          if(
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section)
          }
        }
      })
    }
    window.addEventListener("scroll",handleScroll)
    return() => window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50">

      <div className="max-w-7xl m-auto py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">

          
          <img
            src={woodpecker}
            alt=""
            className="w-11 h-11"
          />
        

          <h1 className="text-3xl font-semibold tracking-wide">
            Mahima Art & Export
          </h1>

        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">

          <a href='#home' 
            className={`duration-300 hover:text-yellow-500 ${
              activeSection === "home"
              ? "text-yellow-500"
              : "text-white"
            }`}>
            Home
          </a>

          <a href='#about' className={`duration-300 hover:text-yellow-500 ${
            activeSection === "about"
            ? "text-yellow-500"
            : "text-white"
          }`}>
            About
          </a>

          <a href='#products' className={`duration-300 hover:text-yellow-500 ${
            activeSection === "products"
            ? "text-yellow-500"
            : "text-white"
          }`}>
            Products
          </a>

          <a href='#gallery' className={`duration-300 hover:text-yellow-500 ${
            activeSection === "gallery"
            ? "text-yellow-500"
            : "text-white"
          }`}>
            Gallery
          </a>

          <a href='#contact' className={`duration-300 hover:text-yellow-500 ${
            activeSection === "contact"
            ? "text-yellow-500"
            : "text-white"
          }`}>
            Contact
          </a>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar