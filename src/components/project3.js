import React from "react";
import Pet from '../asset/pet.jpg';

const project3 = () => {
return (
    <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Keajaiban Dunia</h2>
    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={Pet} alt="Anggreani" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Petra, Yordania</h3>
                        <p className="text-gray-700">Petra, awalnya dikenal penduduknya sebagai Raqmu adalah kota bersejarah dan arkeologi di Yordania selatan. Berbatasan dengan gunung Jabal Al-Madbah, di cekungan yang dikelilingi oleh pegunungan yang membentuk sisi timur lembah Arabah yang membentang dari Laut Mati ke Teluk Aqaba.</p>
                </div>
                </div>
                </div>
                </section>

    )
}

export default project3;
