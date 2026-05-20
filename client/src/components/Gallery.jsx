import bed from "../assets/beds/bed.jpg"
import sofa from "../assets/sofa/sofa.jpg"
import decorative from "../assets/wooden decorations/decorative.webp"
import tvcabinate from "../assets/Tv cabinate/tvcabinate.webp"
import sideboard from "../assets/sideboard/sideboard.webp"
import almari from "../assets/almari/almari.jpg"

const galleryImages = [
  {
    image: bed,
    title: "Luxury Wooden Bed",
    subtitle: "Modern Bedroom Collection",
  },
  {
    image: sofa,
    title: "Modern Sofa",
    subtitle: "Elegant Living Comfort",
  },
  {
    image: decorative,
    title: "Wooden Decor",
    subtitle: "Premium Decorative Art",
  },
  {
    image: tvcabinate,
    title: "TV Cabinet",
    subtitle: "Luxury Entertainment Setup",
  },
  {
    image: sideboard,
    title: "Premium Sideboard",
    subtitle: "Elegant Storage Design",
  },
  {
    image: almari,
    title: "Modern Almari",
    subtitle: "Stylish Wardrobe Collection",
  },
  
  
]

function Gallery() {
  return (
    <section id="gallery" className=" py-28 px-6">

      {/* Heading */}
      <div className="text-center text-white mb-16">

        <p className="text-yellow-500 tracking-[5px] mb-4">
          OUR GALLERY
        </p>

        <h1 className="text-black text-5xl md:text-6xl font-bold">
          Crafted Luxury Collection
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
          Explore our premium handcrafted furniture and artistic
          interior collections designed for elegant modern living.
        </p>

      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl group cursor-pointer relative"
          >

            {/* Image */}
            <img
              src={image.image}
              alt=""
              className="w-full h-105 object-cover group-hover:scale-110 duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 duration-500" />

            {/* Text */}
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 duration-500">

              <h2 className="text-2xl font-semibold mb-2">
                {image.title}
              </h2>

              <p className="text-gray-300">
                {image.subtitle}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Gallery