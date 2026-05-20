import {motion} from "framer-motion"

import herombgimg from "../assets/heroimg.avif"

function HeroSection(){
    return(
        <section id="home"
                className="h-screen bg-cover bg-center flex items-center"
                style={{
                backgroundImage:
                    `url(${herombgimg})`,
                }}
            >
                <div className="bg-black/50 w-full h-full flex items-center">
                
                <motion.div
                    initial={{opacity:0,y:80}}
                    animate={{opacity:1,y:0}} 
                    transition={{duration:1}}
                    className="max-w-7xl mx-auto px-8 text-white">

                    <p className="text-yellow-500 tracking-[5px] mb-4">
                        LUXURY FURNITURE
                    </p>

                    <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-4xl">
                    Timeless Art For Modern Living
                    </h1>

                    <p className="mt-6 mb-8 text-lg max-w-2xl text-gray-300">
                    Discover handcrafted luxury furniture and artistic decor
                    designed to elevate your interior spaces.
                    </p>

                    <a href="#products" className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 duration-300 text-black font-semibold rounded-sm">
                    Explore Collection
                    </a>

                </motion.div>

                </div>
            </section>
    )
}
export default HeroSection