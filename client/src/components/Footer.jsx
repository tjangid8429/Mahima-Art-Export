import { useState } from "react"

function Footer() {

  const [email, setEmail] = useState("")

  const handleSubscribe = () => {
    if(!email){
      alert("Please enter email")
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)){
      alert("Please enter valid email")
      return
    }

    alert ("Subscribed Successfully")
    setEmail("")
  }

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-[#222]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* Company */}
        <div>

          <h1 className="text-3xl font-bold mb-6">
            Mahima Art & Export
          </h1>

          <p className="text-gray-400 leading-8 mb-6">
            We create premium handcrafted furniture and luxury
            interior collections designed for elegant modern living.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#151515] hover:bg-yellow-500 hover:text-black duration-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#151515] hover:bg-yellow-500 hover:text-black duration-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#151515] hover:bg-yellow-500 hover:text-black duration-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#151515] hover:bg-yellow-500 hover:text-black duration-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a href="#home" className="hover:text-yellow-500 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-yellow-500 duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-yellow-500 duration-300">
                Products
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-yellow-500 duration-300">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-500 duration-300">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Contact Info
          </h2>

          <div className="space-y-5 text-gray-400">

            <a
              href="tel:+918233411070"
              className="flex items-center gap-4 hover:text-yellow-500 duration-300"
            >
              <i className="fa-solid fa-phone"></i>
              +91 8233411070
            </a>

            <a
              href="mailto:mahimaexport@gmail.com.com"
              className="flex items-center gap-4 hover:text-yellow-500 duration-300"
            >
              <i className="fa-solid fa-envelope"></i>
              info@mahimaexport.com
            </a>

            <a
              href="https://www.google.com/maps/place/MAHIMA+ART/@26.1682461,73.0020513,244m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39418a2a9f241797:0x9d047fa36458d95e!8m2!3d26.1682461!4d73.002695!16s%2Fg%2F11clvtvdft?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="flex items-start gap-4 hover:text-yellow-500 duration-300"
            >
              <i className="fa-solid fa-location-dot mt-1"></i>

              <span>
                MAHIMA ART & EXPORT, Jodhpur Rajasthan
              </span>
            </a>

          </div>

        </div>

        {/* Newsletter */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Newsletter
          </h2>

          <p className="text-gray-400 leading-8 mb-6">
            Subscribe to receive updates about our latest
            collections and luxury furniture designs.
          </p>

          <div className="flex flex-col gap-4">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-[#151515] border border-[#333] rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
            />

            <button onClick={handleSubscribe} className="bg-yellow-500 hover:bg-yellow-600 duration-300 text-black font-semibold py-4 rounded-xl">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#222] mt-16 pt-8 text-center text-gray-500">

        <p>
          © 2026 Mahima Art. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer