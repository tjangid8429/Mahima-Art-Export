import img1 from "../assets/heroimg.avif"
import img2 from "../assets/sofa/SOFA_WSSFASTFNN2FMSGGB_1.avif"

function AboutCompany() {
  return (
    <section id="about" className="bg-[#5a544b] py-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Images */}
        <div className="relative">

          <img
            src={img1}
            alt=""
            className="rounded-3xl w-full h-158 object-cover"
          />

          <div className="absolute -bottom-10 -right-10 hidden md:block">
            <img
              src={img2}
              alt=""
              className="w-75 h-87.5 object-cover rounded-3xl border-8 border-[#5a544b]"
            />
          </div>

        </div>

        {/* Right Content */}
        <div className="text-white">

          <p className="text-yellow-500 tracking-[5px] mb-4">
            ABOUT COMPANY
          </p>

          <h1 className="text-3xl md:text-6xl font-bold  mb-8">
            Crafting Timeless Furniture With Passion & Elegance
          </h1>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Every piece is crafted with premium materials, modern
            aesthetics, and exceptional attention to detail,
            creating furniture that reflects sophistication and style.
          </p>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Our commitment to premium craftsmanship, quality materials,
            and modern design has made us a trusted name in furniture
            exports and interior styling.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mb-10">

            <div>
              <h2 className="text-4xl font-bold text-yellow-500">
                15+
              </h2>

              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-500">
                500+
              </h2>

              <p className="text-gray-400 mt-2">
                Premium Products
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 duration-300 text-black font-semibold rounded-md">
            Learn More
          </button>

        </div>

      </div>

    </section>
  )
}

export default AboutCompany