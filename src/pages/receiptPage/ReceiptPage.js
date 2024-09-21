import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import receipt from "../../assets/Receipt.png"

function ReceiptPage() {
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [language, setLanguage] = useState('TH'); // Initial state for language is TH

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false); // Close the dropdown after selecting
    };
    return (
        <div>
            <div className=" p-4">
                <nav className=" w-full flex justify-end h-full mb-4">
                    <button className=" flex items-center bg-[#D9EBFF] text-black p-2 rounded-[20px] font-medium text-sm relative"
                        onClick={() => setIsLangOpen(!isLangOpen)}>
                        <img
                            src={
                                language === 'TH'
                                    ? 'https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg'
                                    : 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg'
                            }
                            alt="flag"
                            className="w-4 h-4 mr-1 rounded-3xl object-cover"
                        />
                        {language === 'TH' ? 'TH' : 'EN'}
                        <ChevronDownIcon
                            className={`ml-1 w-4 h-4 rounded-xl border-12 ${isLangOpen ? 'rotate-180' : ''
                                }`}
                        />
                        {isLangOpen && (
                            <div className="absolute bottom-[-90px] border-[0.5px] border-gray-300 right-0 w-40 bg-white rounded-xl shadow-md flex flex-col justify-center p-3 space-y-2">
                                <p
                                    className=" w-full flex items-start text-sm font-medium cursor-pointer"
                                    onClick={() => handleLanguageChange('TH')}
                                >
                                    ภาษาไทย
                                </p>
                                <div className=" border-t-[0.5px] border-gray-300 w-full"></div>
                                <p
                                    className=" w-full flex items-start text-sm font-medium cursor-pointer"
                                    onClick={() => handleLanguageChange('EN')}
                                >
                                    ภาษาอังกฤษ
                                </p>
                            </div>
                        )}

                    </button>
                </nav>
                <div className=" p-6 border-gray-300 border-[0.5px] rounded-[20px] shadow-md flex justify-center items-center mb-8 space-x-10">
                    <img src={receipt} alt="receipt" className="w-14 h-14" />
                    <div className=" flex flex-col justify-center items-center text-lg ">
                        <p>ชำระเงินสำเร็จ </p>
                    </div>
                </div>

                <div className=" pl-9 pr-9 w-full flex flex-col justify-center items-center">
<h1 className=" w-full flex justify-center">ใบเสร็จการชำระเงิน</h1>
                </div>
            </div>
        </div>
    )
}

export default ReceiptPage