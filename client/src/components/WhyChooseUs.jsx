const features = [
  {
    number: "01",
    title: "Premium Craftsmanship",
    description:
      "Every product is carefully handcrafted using high-quality materials and timeless techniques.",
  },
  {
    number: "02",
    title: "Luxury Modern Design",
    description:
      "We combine elegance and modern aesthetics to create furniture that transforms interiors.",
  },
  {
    number: "03",
    title: "Worldwide Export",
    description:
      "Trusted by clients globally for reliable delivery, premium quality, and professional service.",
  },
  {
    number: "04",
    title: "Custom Furniture",
    description:
      "We create customized furniture solutions tailored to your unique interior and lifestyle needs.",
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-[#5a544b] py-28 px-6">

      {/* Heading */}
      <div className="text-center text-white mb-20">

        <p className="text-yellow-500 tracking-[5px] mb-4">
          WHY CHOOSE US
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Excellence In Every Detail
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          We deliver premium handcrafted furniture with exceptional
          craftsmanship, luxury design, and a commitment to quality
          that elevates every living space.
        </p>

      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#fdfafa] border border-[#222] hover:border-yellow-900 duration-300 rounded-3xl p-10 group"
          >

            {/* Number */}
            <h1 className="text-6xl font-bold text-yellow-400 group-hover:text-yellow-500/50 duration-300">
              {item.number}
            </h1>

            {/* Title */}
            <h2 className="text-3xl font-semibold text-black mt-6 mb-5">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 leading-8 text-lg">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default WhyChooseUs