import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import parking from "../../assets/parking.png"

function LandingPage() {
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
                <div className=" p-6 border-gray-300 border-[0.5px] rounded-[20px] shadow-md flex justify-center items-center mb-8 space-x-18">
                    <img src={parking} alt="car" className="w-14 h-14" />
                    <div className=" flex flex-col justify-center items-center text-lg">
                        <p>เลขทะเบียน </p>
                        <p>2กฐ452 </p>
                    </div>
                </div>
                <div className=" space-y-4 ">
                    <p className=" text-lg">รายละเอียดการจอดรถ</p>
                    <div className=" flex justify-between text-sm">
                        <p>วันเวลาเข้า</p>
                        <p>17 ส.ค. 2567 14:32:04</p>
                    </div>
                    <div className=" flex justify-between text-sm">
                        <p>วันเวลาปัจจุบัน</p>
                        <p>17 ส.ค. 2567 18:42:10</p>
                    </div>
                    <div className=" flex justify-between text-sm">
                        <p>ระยะเวลาการจอด</p>
                        <p>4 ชม. 10 นาที</p>
                    </div>
                    <div className=" flex justify-between text-sm">
                        <p>สิทธิ์จอดฟรี</p>
                        <p>2 ชม. 0 นาที</p>
                    </div>
                    <div className=" flex justify-between text-sm">
                        <p>เวลาคิดค่าบริการ</p>
                        <p>2 ชม. 10 นาที</p>
                    </div>
                    <div className=" flex justify-between text-sm">
                        <p>ค่าบริการจอดรถ</p>
                        <p>90 บาท</p>
                    </div>
                    <div className=" flex justify-between text-sm">
                        <p>ชำระแล้ว</p>
                        <p>0 บาท</p>
                    </div>
                    <div className=" flex justify-between text-sm">
                        <p>ค่าบริการที่ต้องชำระ</p>
                        <p className=" text-lg text-[#007AFF] font-bold">90 บาท</p>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col justify-center items-end space-y-4 w-full pt-6 pb-6 absolute bottom-0 p-4 border-t-[0.5px] border-gray-300 " style={{ boxShadow: '0 -2px 6px rgba(209, 213, 219, 1)' }}>
                <button className=" w-full flex justify-center items-center bg-[#007AFF] text-white p-3 rounded-[20px] shadow-md font-medium text-md">
                    ชำระเงิน
                </button>
                <button
                    className=" text-gray-600 underline w-full text-sm"
                >
                    เงื่อนไขค่าที่จอดรถ
                </button>
            </div>

        </div>
    );
}

export default LandingPage;

//rfce
