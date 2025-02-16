import Image from "next/image";

export default function WhatWeDO() {
    return (
        <section className="w-full py-12 bg-gray-100 px-5 text-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
                    What We Do?
                </h2>
                <p className="text-center mb-10 text-xl text-black">
                    At Ayothi Consultancy, we specialize in delivering innovative solutions through comprehensive feasibility studies and detailed project reports.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-blue-800 mb-4">Feasibility Study & DPR</h3>
                        <ul className="text-lg sm:text-xl text-black space-y-2 list-disc list-inside">
                            <li className="">Inception, Concept Planning, and Feasibility Studies</li>
                            <li className="">Soil Investigations & Environmental Studies</li>
                            <li className="">Preparation of Key Plans and Working Drawings</li>
                            <li className="">Analysis and Design of Structural Components</li>
                            <li className="">Preparation of Structural Drawings</li>
                            <li className="">Design of Highways and Structures</li>
                            <li className="">BOQ, Rate Analysis, and Costing</li>
                            <li className="">Tender Preparation - RFP, Agreement, and Technical Schedules</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image width={800} height={800} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSzUCbLozCxvUDFO65dQk2Gb8d7mGZuw_ML6BwhDrrIjRmYDu0pzZQrDmEmjnzWViHCDC-FY440QoJTQrW59C8xkFP6dwWawQUgVMynLv-X8ggdR-bmb042vbi4zFNUb4R2RkSAKfkwi7K4jGPycZsTx5D5Nl5YL3uz846n1rASXoi8KlrZWEqke85t2mL/w640-h427/dpr.jpg" alt="Feasibility Study" className="w-full h-auto rounded-lg shadow-md"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
