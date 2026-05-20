import chair1 from "../assets/chair/1.avif"
import sofa1 from "../assets/sofa/SOFA_WSSFASTFNN2FMSGGB_1.avif"
import decore1 from "../assets/wooden decorations/decoration.avif"
import table1 from "../assets/dining tables/dining table.jpg"

const categories = [
  {
    title: "Wooden Chairs",
    image:
      chair1,
  },
  {
    title: "Luxury Sofas",
    image:
      sofa1,
  },
  {
    title: "Home Decor",
    image:
      decore1,
  },
  {
    title: "Dining Tables",
    image:
      table1,
  },
]

function Categories() {
  return (
    <section className=" py-20 px-6">

      {/* Heading */}
      <div className="text-center text-white mb-16">

        <p className="text-yellow-500 tracking-[4px] mb-3">
          OUR COLLECTION
        </p>

        <h1 className="text-black text-5xl font-bold">
          Explore Categories
        </h1>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {categories.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl h-112.5 cursor-pointer hover:shadow-[0_0_50px_rgba(0,0,0,10)] hover:shadow-black/40 duration-500"
          >

            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 duration-500" />

            {/* Text */}
            <div className="absolute bottom-10 left-6 text-white">

              <h1 className="text-3xl font-semibold mb-3">
                {item.title}
              </h1>

              <button className="border border-white px-5 py-2 hover:bg-yellow-500 hover:border-yellow-500 duration-300">
                View More
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Categories