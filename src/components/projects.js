import React from "react";
import dpr from '../asset/coloseum.jpg';
import maximum from '../asset/chichen_itza.jpg';
import bi from '../asset/christ_the.jpg';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Keajaiban Dunia</h2>
    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={dpr} alt="Anggreani" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Colosseum di Roma, Italia</h3>
                        <p className="text-gray-700">Koloseum adalah sebuah peninggalan bersejarah berupa arena gladiator, dibangun oleh Vespasian. Tempat pertunjukan yang besar berbentuk elips yang disebut amfiteater atau dengan nama aslinya Amphitheatrum Flavium, yang termasuk salah satu dari Enam Puluh Sembilan Keajaiban Dunia Pertengahan.</p>
                </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={maximum} alt="Anggreani" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Chichén Itzá di Yucatán, Meksiko</h3>
                        <p className="text-gray-700">Chichen Itza adalah salah satu situs arkeologi utama di Semenanjung Yucatan, Meksiko. Kota ini dulu dan sekarang merupakan kota suci dan pusat ziarah Maya yang didirikan oleh Itza, yang disebut sebagai penyihir air, pada abad ke-5 Masehi.</p>
                </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={bi} alt="Anggreani" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Patung Christ the Redeemer di Brazil</h3>
                        <p className="text-gray-700">Christ the Redeemer merupakan patung kolosal Yesus Kristus yang terletak di puncak Gunung Corocovado, Rio de Janeiro, Brasil. Patung yang juga disebut Cristo Redentor dalam bahasa Portugis itu memiliki tinggi 30 meter, sedangkan panjang kedua lengannya yang terentang mencapai 28 meter. </p>
                </div>
            </div>
        </div>
</section>
    )
}                

export default Projects;