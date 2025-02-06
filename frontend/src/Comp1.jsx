import React from 'react';
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
        "Letter of Invitation - Reclamation of Waterlogged and Saline Soils through Sub-Surface Drainage Technology.",
    ];

    return (
        <div className="flex  container mx-auto mt-10 border-r-1 border-t-1 border-b-1 border-gray-300">
            <div className=" border-r-1 border-l-1 border-gray-300 p-4">
                <div className="mb-10 ">
                    <h2 className="text-md font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3 ">DIVISION & SECTIONS</h2>
                    <ul className="list-none pl-4 text-sm p-4">
                        <li className="before:content-['>'] before:text-green-600 before:mr-2 p-1">Crop Improvement</li>
                        <li className="before:content-['>'] before:text-green-600 before:mr-2 p-1">Crop Production</li>
                        <li className="before:content-['>'] before:text-green-600 before:mr-2 p-1">Plant Physiology & Biochemistry</li>
                        <li className="before:content-['>'] before:text-green-600 before:mr-2 p-1">Agricultural Engineering</li>
                    </ul>
                </div>


                <div className="mb-5   bg-green-200 w-72">
                    <h2 className="text-sm font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3 p-1">QUICK LINKS</h2>
                    <ul className="pl-4 text-sm pb-4">
                        <li className='mb-3 mt-3'>LOREM IPSUM DOLOR SIT 1</li>
                        <li className='mb-3 mt-3'>LOREM IPSUM DOLOR SIT 2</li>
                        <li className='mb-3 mt-3'>LOREM IPSUM DOLOR SIT 3</li>
                        <li className='mb-3 mt-3'>LOREM IPSUM DOLOR SIT 4</li>
                    </ul>
                </div>

                <div className="bg-green-200 h-80  rounded-lg shadow-md w-72">
                    <h2 className="text-sm font-bold bg-green-600 text-white p-1 border-l-8 border-green-900 pl-3">USEFUL LINKS</h2>
                    <ul className="text-sm mt-3 mr-10 pl-5">
                        {[
                            "KRISHI KOSH",
                            "CERA",
                            "UNIFIED ESPUPPORT SYSTEM",
                            "PAYMENT GATEWAY",
                            "PAYMENT GATEWAY",
                            "PAYMENT GATEWAY",
                            "PAYMENT GATEWAY",
                            "PAYMENT GATEWAY",
                            "PAYMENT GATEWAY"
                        ].map((item, index) => (
                            <li key={index} className="mb-3 mt-3 flex items-center gap-2">
                                <span className="text-green-700 font-bold">›</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>


            <div className="w-3/5 p-4">
                <div className="mb-4">
                    <h2 className="text-md font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3">
                        ABOUT INSTITUTE
                    </h2>
                    <p className="text-sm p-2 max-w-auto mx-auto text-justify">
                        The Indian Institute of Sugarcane Research (IISR), Lucknow was established in 1952 by the erstwhile Indian Central Sugarcane Committee for conducting researches on fundamental and applied aspects of sugarcane culture as well as to co-ordinate the research work done on this crop in different States of the country. The Government of India took over the Institute from the Indian Central Sugarcane Committee on 1st January, 1954. On April 1, 1969, it was transferred to the Indian Council of Agricultural Research (ICAR), New Delhi along with other central agricultural research.
                    </p>

                    <div className="flex justify-end mt-3">
                        <Button variant="contained" color="success" size="small" className="ml-2">
                            Read More
                        </Button>
                    </div>
                </div>




                <div className="border-l-1 border-r-1 border-b-1 h-5/9 overflow-hidden shadow-md bg-white border-green-500">
                    <h2 className="text-sm font-bold bg-green-600 pl-3 text-white p-2 sticky top-0  border-l-8 border-green-900">
                        WHAT IS NEW & ORDERS
                    </h2>
                    <div className="max-h-96 overflow-y-auto scrollbar-none">
                        <ul className="text-md">
                            {newsOrders.map((item, index) => (
                                <li key={index} className="py-2 px-3 border-b border-dotted border-green-500  flex items-center gap-2">
                                    <span className="text-green-700 font-bold text-lg">›</span>
                                    <span>{item}</span>
                                    {[0, 2, 5].includes(index) && (
                                        <span className="text-white text-xs font-bold px-2 py-1 rounded-lg color-blink">
                                            NEW
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="w-auto  p-4 border-l-1 border-gray-300">
                <div className="mb-4  shadow-md bg-white ">
                    <h2 className="text-sm font-bold bg-green-600 text-white p-1 border-l-8 border-green-900">WHO IS WHO?</h2>

                    <div className="text-sm mt-2">
                        <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
                            <img
                                src="http://iisr3.bootgrow.com/assets/img/dic2.jpg"
                                alt="Dr. T. John Zachariah"
                                className="w-18 h-18 "
                            />
                            <div className="text-sm ml-9">
                                <p className="font-bold">Dr. T. John Zachariah</p>
                                <p>Acting Director</p>
                                <p>Government of Uttar Pradesh</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-3">
                            <img
                                src="http://iisr3.bootgrow.com/assets/img/directorphoto.png"
                                alt="Rasappa Viswanathan"
                                className="w-18 h-18  "
                            />
                            <div className="text-sm ml-9">
                                <p className="font-bold">Rasappa Viswanathan</p>
                                <p>Director</p>
                                <p>Government of Uttar Pradesh</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <h2 className="text-sm font-bold bg-green-600 text-white border-l-8 border-green-900 pl-3">ONLINE SERVICES</h2>
                    <ul className="list-none pl-4 text-lg mt-3">
                        <li className="before:content-['>'] before:text-green-600 before:mr-2">Service 1</li>
                        <li className="before:content-['>'] before:text-green-600 before:mr-2">Service 2</li>
                        <li className="before:content-['>'] before:text-green-600 before:mr-2">Service 3</li>
                        <li className="before:content-['>'] before:text-green-600 before:mr-2">Service 4</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Comp1;
