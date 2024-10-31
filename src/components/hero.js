import React from "react";
import cover from '../asset/Travel_.jpg';

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white bg-size'cover'"
        style={{ backgroundImage: `url(${cover})` }} 
        >
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center p-6">
                    <h2 className="text-5xl font-bold mb-4">7 Keajaiban Dunia
                    </h2>
                    <a href="#projects" className="bg-sky-700 hover:bg-violet-300 text-white font-bold py-2 px-6 rounded-lg shadow-lgm transition duration-300">
                    Lihat Sekarang
                    </a>
                </div> 

        </section>

    )

}

export default Hero;