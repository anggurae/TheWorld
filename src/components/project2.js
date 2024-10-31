import React from "react";
import World from '../asset/great_wall.jpg';
import Machu from '../asset/machu_picchu.jpg';
import Taj from '../asset/taj_mahal.jpg';

const project2 = () => {
return (
    <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Keajaiban Dunia</h2>
    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={World} alt="Anggreani" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Tembok Besar Tiongkok</h3>
                        <p className="text-gray-700">Tembok Besar Tiongkok atau Tembok Raksasa Tiongkok juga dikenal di Tiongkok dengan nama Tembok Sepanjang 10.000 Li¹ adalah bangunan terpanjang yang pernah diciptakan manusia yang berada di Tiongkok. Tembok Besar Tiongkok dianggap sebagai salah satu dari Tujuh Keajaiban Dunia.</p>
                </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={Machu} alt="Anggreani" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Machu Picchu, Peru</h3>
                        <p className="text-gray-700">Machu Picchu adalah sebuah lokasi reruntuhan Inca pra-Columbus yang terletak di wilayah pegunungan pada ketinggian sekitar 2.350 m di atas permukaan laut. Machu Picchu berada di atas lembah Urubamba di Peru, sekitar 70 km barat laut Cusco. Menurut banyak peneliti, nama aslinya adalah Llaqtapata.</p>
                </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={Taj} alt="Anggreani" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Taj Mahal, Agra, India</h3>
                        <p className="text-gray-700">Mausoleum Taj Mahal adalah sebuah mausoleum yang terletak di Agra, India. Dibangun atas keinginan Kaisar Mughal Shāh Jahān, anak Jahangir, sebagai sebuah mausoleum untuk istri Persianya, Arjumand Banu Begum, juga dikenal sebagai Mumtaz-ul-Zamani atau Mumtaz Mahal.</p>
                </div>
            </div>
        </div>
</section>
    )
}


export default project2;