import { useState } from "react"

function ContactSection() {

  const API_URL = 
    window.location.hostname === "localhost"
      ? "https://localhost:7139/api/contact"
      : "https://mahima-art-export.onrender.com/api/contact";

  const [formData, setFormdata] = useState({
    name : "",
    email : "",
    phone : "",
    message : "",
  })

  const handeChanges = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message 
    ){
      alert("Please fill all fields")
      return
    }

    try{
      const response = await fetch(API_URL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      alert(data.message)
      setFormdata({
        name:"",
        email:"",
        phone:"",
        message:"",
      })
    }catch(error){
      console.log(error)
      alert("Something went wrong")
    }
  }

  return (
    <section id="contact" className="bg-[#5a544b] py-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div className="text-white">

          <p className="text-yellow-500 tracking-[5px] mb-4">
            CONTACT US
          </p>

          <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-8">
            Let’s Create Something Beautiful Together
          </h1>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Get in touch with us for premium handcrafted furniture,
            custom interior collections, and luxury decor solutions
            tailored to your space.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">

            <div>
                <h2 className="text-2xl font-semibold mb-2 ">
                    Address
                </h2>
                
                <a
                    href="https://www.google.com/maps/place/MAHIMA+ART/@26.1682461,73.0020513,244m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39418a2a9f241797:0x9d047fa36458d95e!8m2!3d26.1682461!4d73.002695!16s%2Fg%2F11clvtvdft?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-gray-400 hover:text-yellow-500 duration-300"
                    >
                        <i className="fa-solid fa-location-dot mr-3" ></i>
                    MAHIMA ART & EXPORT, Jodhpur Rajasthan
                </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Email
              </h2>

                <a
                    href="mailto:mahimaimpex23@gmail.com"
                    
                    className="text-gray-400 hover:text-yellow-500 duration-300"
                    >
                    <i className="fa-solid fa-envelope mr-3"></i>
                    mahimaimpex23@gmail.com
                </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Phone
              </h2>

                <a
                    href="tel:+918233411070"
                    
                    className="text-gray-400 hover:text-yellow-500 duration-300"
                    >
                    <i class="fa-solid fa-phone mr-3"></i>
                    +91 8233411070
                </a>
            </div>

          </div>

        </div>

        {/* Form */}
        <div className=" bg-[#c9c4c2] p-10 rounded-3xl border border-[#222]">

          <form className="space-y-3" onSubmit={handleSubmit}>

            {/* Name */}
            <div>

              <label className="text-black block mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handeChanges}
                placeholder="Enter your name"
                className="w-full bg-[#fffefe] border border-[#333] rounded-xl px-5 py-3 text-gray-800 outline-none focus:border-yellow-500"
              />

            </div>

            {/* Email */}
            <div>

              <label className="text-black block mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handeChanges}
                placeholder="Enter your email"
                className="w-full bg-[#fffefe] border border-[#333] rounded-xl px-5 py-3 text-gray-800 outline-none focus:border-yellow-500"
              />

            </div>

            {/* Phone */}
            <div>

              <label className="text-black block mb-2">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handeChanges}
                placeholder="Enter phone number"
                className="w-full bg-[#fffefe] border border-[#333] rounded-xl px-5 py-3 text-gray-800 outline-none focus:border-yellow-500"
              />

            </div>

            {/* Message */}
            <div>

              <label className="text-black block mb-2">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handeChanges}
                placeholder="Write your message..."
                className="w-full bg-[#fffefe] border border-[#333] rounded-xl px-5 py-4 text-gray-800 outline-none focus:border-yellow-500 resize-none"
              />

            </div>

            {/* Button */}
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 duration-300 text-black font-semibold py-4 rounded-xl cursor-pointer"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default ContactSection