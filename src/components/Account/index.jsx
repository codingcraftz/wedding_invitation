"use client";

import { Toaster, toast } from "react-hot-toast";

const groomAccount = {
  name: "신랑측",
  bank: "농협",
  accountNumber: "123412341234",
  tossUrl: `supertoss://send?bank=농협&accountNo=123412341234&origin=청첩장`,
  kakaoPayUrl: `https://qr.kakaopay.com/Ej9QfqGLl`,
};

const brideAccount = {
  name: "신부측",
  bank: "농협",
  accountNumber: "123412341234",
  tossUrl: `supertoss://send?bank=농협&accountNo=123412341234&origin=청첩장`,
  kakaoPayUrl: `https://qr.kakaopay.com/Ej9QfqGLl`,
};

const Account = () => {
  // 복사 기능
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`복사되었습니다: ${text}`, {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } catch (err) {
      console.error("복사 실패:", err);
      toast.error("복사에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleTossPayment = (url) => {
    window.location.href = url;
  };

  const handleKakaoPayPayment = (url) => {
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-pink-100 py-14 gap-10 font-sans">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* 타이틀 */}
      <div className="text-white bg-rose-400 font-bold px-4 py-2 rounded-full font-crimson">
        마음 전하실 곳
      </div>

      {/* 계좌 정보 섹션 */}
      <section className="flex flex-col w-full px-6">
        {/* 신랑측 */}
        <div className="bg-white shadow-md rounded-lg p-5 flex flex-col gap-3">
          <h2 className="font-bold text-lg text-rose-500">
            {groomAccount.name}
          </h2>
          <div className="border-b border-gray-300 w-full"></div>
          <div className="flex justify-between items-center">
            <p>계좌번호: {groomAccount.accountNumber}</p>
            <button
              onClick={() => copyToClipboard(groomAccount.accountNumber)}
              className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300"
            >
              복사
            </button>
          </div>
          <div>
            <p>은행: {groomAccount.bank}</p>
          </div>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => handleTossPayment(groomAccount.tossUrl)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              토스로 송금
            </button>
            <button
              onClick={() => handleKakaoPayPayment(groomAccount.kakaoPayUrl)}
              className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              카카오페이 송금
            </button>
          </div>
        </div>

        {/* 신부측 */}
        <div className="bg-white shadow-md rounded-lg p-5 flex flex-col gap-3 mt-4">
          <h2 className="font-bold text-lg text-rose-500">
            {brideAccount.name}
          </h2>
          <div className="border-b border-gray-300 w-full"></div>
          <div className="flex justify-between items-center">
            <p>계좌번호: {brideAccount.accountNumber}</p>
            <button
              onClick={() => copyToClipboard(brideAccount.accountNumber)}
              className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300"
            >
              복사
            </button>
          </div>
          <div>
            <p>은행: {brideAccount.bank}</p>
          </div>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => handleTossPayment(brideAccount.tossUrl)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              토스로 송금
            </button>
            <button
              onClick={() => handleKakaoPayPayment(brideAccount.kakaoPayUrl)}
              className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              카카오페이 송금
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
