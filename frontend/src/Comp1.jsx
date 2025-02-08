import React, { useEffect, useRef } from 'react';
import { Button } from '@mui/material';

const Comp1 = () => {
    const newsOrders = [
        "Registration for Scheme Crop Residue Management @1000/- per acre extended to 08/12/2024",
        "Apply for Water Tank with Micro Irrigation under promotion of Cotton Cultivation",
        "Advertisement CRM & Paddy Supply Chain 2024-25",
        "CRM 2024-25",
        "PADDY SUPPLY CHAIN 2024-25",
        "Recommended Price of the machines for year 2023-24 to calculate subsidy under CRM Scheme.",
        "Expression of Interest (EoI) - Reclamation of Waterlogged and Saline Soils through Sub-Surface Drainage Technology.",
        "Letter of Invitation - Reclamation of Waterlogged and Saline Soils through Sub-Surface Drainage Technology.",
        "Expression of Interest (EoI) - Reclamation of Waterlogged and Saline Soils through Sub-Surface Drainage Technology.",
        "Letter of Invitation - Reclamation of Waterlogged and Saline Soils through Sub-Surface Drainage Technology.",
        "Expression of Interest (EoI) - Reclamation of Waterlogged and Saline Soils through Sub-Surface Drainage Technology.",
    ];

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const scrollInterval = setInterval(() => {
            if (scrollContainer) {
                scrollContainer.scrollTop += 1;
                scrollAmount += 1;
                if (scrollAmount >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
                    scrollAmount = 0;
                    scrollContainer.scrollTop = 0;
                }
            }
        }, 60);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className=" mx-auto mt-10  border border-gray-300 flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/4 w-full flex flex-col gap-4  p-4 bg-gray-50">
                <div>
                    <h2 className="text-md font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3 p-2">
                        DIVISION & SECTIONS
                    </h2>
                    <ul className="list-none pl-4 text-green-700 text-sm mt-2">
                        {["Crop Improvement", "Crop Production", "Plant Physiology & Biochemistry", "Agricultural Engineering"].map((item, index) => (
                            <li key={index} className="p-2 flex items-center">
                                <span className="text-green-600 font-bold mr-2">›</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="bg-green-200 rounded-lg shadow-md">
                    <h2 className="text-sm font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3 p-2">
                        QUICK LINKS
                    </h2>
                    <ul className="text-sm p-3">
                        {["LOREM IPSUM DOLOR SIT 1", "LOREM IPSUM DOLOR SIT 2", "LOREM IPSUM DOLOR SIT 3", "LOREM IPSUM DOLOR SIT 4"].map((item, index) => (
                            <li key={index} className="mb-3">
                                <button className="w-full flex items-center gap-2 p-2 rounded-md text-green-700 font-bold hover:bg-green-300 transition">
                                    <span>›</span>{item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>



                <div className="bg-green-200 rounded-lg shadow-md">
                    <h2 className="text-sm font-bold bg-green-600 text-white p-2 border-l-8 border-green-900 pl-3">
                        USEFUL LINKS
                    </h2>
                    <ul className="text-sm mt-2 p-3">
                        {["KRISHI KOSH", "CERA", "UNIFIED ESPUPPORT SYSTEM", "PAYMENT GATEWAY"].map((item, index) => (
                            <li key={index} className="">
                                <button className="w-full flex items-center gap-2 p-2 rounded-md text-green-700 font-bold hover:bg-green-300 transition">
                                    <span>›</span>{item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>


            <div className="lg:w-3/5 w-full p-4 border-l border-r border-gray-300">
                <div className="mb-4">
                    <h2 className="text-md font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3 p-2">
                        ABOUT INSTITUTE
                    </h2>
                    <p className="text-sm p-2 text-green-700 text-justify">
                        The Indian Institute of Sugarcane Research (IISR), Lucknow was established in 1952 by the erstwhile Indian Central Sugarcane Committee for conducting research on sugarcane culture. The Government of India took over the Institute on 1st January 1954, and it was later transferred to the Indian Council of Agricultural Research (ICAR) in 1969.
                    </p>
                    <div className="flex justify-end mt-3">
                        <Button variant="contained" color="success" size="small">
                            Read More
                        </Button>
                    </div>
                </div>



                <div className=" w-full ">
                    <div className="border border-green-500 shadow-md bg-white">
                        <h2 className="text-sm font-bold bg-green-600 text-white p-2 border-l-8 border-green-900 pl-3">
                            WHAT'S NEW & ORDERS
                        </h2>
                        <div
                            ref={scrollRef}
                            className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-green-600"
                        >
                            <ul className="text-sm text-green-700">
                                {newsOrders.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-2 px-3 border-b border-dotted border-green-500 flex items-center gap-2"
                                    >
                                        <span className="text-green-700 font-bold">›</span>
                                        <span>{item}</span>
                                        {[0, 2, 5].includes(index) && (
                                            <span className="text-white text-xs font-bold px-2 py-1 rounded-lg bg-red-500 color-blink">
                                                NEW
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/4 w-full pt-4  border-gray-300">
                <div className="mb-4 shadow-md bg-white">
                    <h2 className="text-sm font-bold bg-green-600 text-white p-2 border-l-8 border-green-900">
                        WHO IS WHO?
                    </h2>
                    <div className="text-sm mt-2 text-green-700">
                        {[
                            { name: "Dr. T. John Zachariah", title: "Acting Director", img: "http://iisr3.bootgrow.com/assets/img/dic2.jpg" },
                            { name: "Rasappa Viswanathan", title: "Director", img: "http://iisr3.bootgrow.com/assets/img/directorphoto.png" }
                        ].map((person, index) => (
                            <div key={index} className="flex items-center gap-3 border-b border-gray-300 pb-3">
                                <img src={person.img} alt={person.name} className="w-20 h-20 rounded-md" />
                                <div>
                                    <p className="font-bold">{person.name}</p>
                                    <p>{person.title}</p>
                                    <p>Government of Uttar Pradesh</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" rounded-lg shadow-md">
                    <h2 className="text-sm font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3 p-2">
                        ONLINE SERVICES
                    </h2>
                    <ul className="text-sm p-3">
                        {["Service 1", "Service 2", "Service 3", "Service 4"].map((item, index) => (
                            <li key={index} className="mb-3">
                                <button className="w-full flex items-center gap-2 p-2 rounded-md text-green-700 font-bold hover:bg-green-300 transition">
                                    <span>›</span>{item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Comp1;
