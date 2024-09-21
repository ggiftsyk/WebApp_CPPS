import React, { useState } from "react";

const ParkingPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px]">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">รายละเอียดการจอดรถ</h2>
            <button className="text-gray-500" onClick={onClose}>
              ✕
            </button>
          </div>

          <div className="mt-4">
            <img src="/path_to_image" alt="Car Plate" className="mx-auto w-full h-40 object-cover" />
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-700">วันศุกร์ ที่ 6 สิงหาคม 2024 เวลา 14:32:04</p>
            <p className="text-md font-medium mt-2">วล 3670</p>
            <p className="text-sm text-gray-700 mt-1">วันที่ 02/08/2024 17:00:00</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">ค่าบริการ (บาท)</label>
              <div className="text-xl font-bold">90</div>
            </div>
            <div>
              <label className="block text-sm font-medium">ส่วนลดต่างๆ</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md">
                <option>กรุณาเลือกส่วนลดอื่นๆ</option>
                <option>ส่วนลดสมาชิก</option>
                <option>ส่วนลดโปรโมชั่น</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-700">
              <strong>เวลาขาเข้า:</strong> 17:00:00 <br />
              <strong>เวลาขาออก:</strong> 20:45:45 <br />
              <strong>ระยะเวลาการจอด:</strong> 3 ชั่วโมง 45 นาที <br />
              <strong>สิทธิ์จอดฟรี:</strong> 1 ชม. 0 นาที <br />
              <strong>ค่าบริการจอดรถ:</strong> 90 บาท <br />
              <strong>ชำระแล้ว:</strong> 0 บาท
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={onClose}>
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingPopup;