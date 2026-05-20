import chair1 from "../assets/chair/xxwchu.webp"
import sofa1 from "../assets/sofa/mid-century-wooden-sofa-designs.jpg"
import table1 from "../assets/tables/table.webp"

const products = [
  {
    title: "Luxury Wooden Chair",
    price: "₹5,499",
    image:
      chair1,
  },
  {
    title: "Modern Sofa",
    price: "₹25,000",
    image:
      sofa1,
  },
  {
    title: "Premium Table",
    price: "₹9,485",
    image:
      table1,
  },
]

function FeaturedProducts() {
  return (
    <section id="products" className="bg-[#5a544b] py-16 px-6">

      {/* Heading */}
      <div className="text-center text-white mb-13">

        <p className="text-yellow-500 tracking-[5px] mb-3">
          FEATURED COLLECTION
        </p>

        <h1 className="text-5xl font-bold">
          Featured Products
        </h1>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-3xl overflow-hidden group cursor-pointer"
          >

            {/* Image */}
            <div className="overflow-hidden h-100">

              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

            </div>

            {/* Content */}
            <div className="p-6 text-white">

              {/* <p className="text-yellow-500 mb-2">
                Luxury Collection
              </p> */}

              <h2 className="text-3xl font-semibold mb-4">
                {item.title}
              </h2>

              <div className="flex items-center justify-between">

                <span className="text-2xl font-bold">
                  {item.price}
                </span>

               

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default FeaturedProducts