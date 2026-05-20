import sonu from "../assets/testimonial/sonu rathi .jpeg"
import lucky from "../assets/testimonial/Lucky.JPG"
import mhaveer from "../assets/testimonial/mhaveer.jpg"

const testimonials = [
  {
    name: "Sonu Rathi",
    role: "Interior Designer",
    image:
      sonu,
    review:
      "The craftsmanship and attention to detail are absolutely outstanding. Their furniture completely transformed our interior projects.",
  },
  {
    name: "Lucky Jangid",
    role: "Lucky House Owner",
    image:
      lucky,
    review:
      "Elegant designs, premium quality, and professional service. Every piece feels luxurious and timeless.",
  },
  {
    name: "Mhaveer Jangid",
    role: "Architect",
    image:
      mhaveer,
    review:
      "Their custom furniture collection exceeded our expectations. Highly recommended for modern luxury interiors.",
  },
]

function Testimonials() {
  return (
    <section className=" py-28 px-6">

      {/* Heading */}
      <div className="text-center text-white mb-20">

        <p className="text-yellow-500 tracking-[5px] mb-4">
          TESTIMONIALS
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-black">
          What Our Clients Say
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          Trusted by clients worldwide for premium craftsmanship,
          elegant furniture collections, and exceptional customer experience.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#817d7b] border border-[#222] hover:border-yellow-500 duration-300 rounded-3xl p-10"
          >

            {/* Stars */}
            <div className="flex gap-1 text-yellow-500 text-2xl mb-6">
              ★ ★ ★ ★ ★
            </div>

            {/* Review */}
            <p className="text-gray-900 text-lg leading-8 mb-8">
              "{item.review}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>

                <h2 className="text-white text-xl font-semibold">
                  {item.name}
                </h2>

                <p className="text-yellow-500">
                  {item.role}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Testimonials