import {
  ADDRESS,
  HALL_ADDRESS,
  HALL_NAME,
  WEDDING_DATE,
  WEDDING_TIME,
} from "@/utils/constants";
import { formattedTime, fullDate, numericDate } from "@/utils/utils";
import Image from "next/image";

const Sub = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black py-14 gap-10">
      <div className="border-2 border-pink-400 text-pink-400 font-bold px-4 py-2 rounded-full font-crimson">
        {numericDate}
      </div>
      <section className="text-white flex flex-col items-center w-full text-center font-crimson">
        <p>
          {fullDate} {formattedTime}
        </p>
        <p>{HALL_NAME}</p>
        <p className="text-center">{HALL_ADDRESS}</p>
      </section>
      {/* 시작 손글씨 */}
      <div className="text-white flex flex-col items-center">
        <section className="flex flex-col items-center text-xl p-6">
          <p>'사랑이란 별다른 것이 아니라</p>
          <p>그 사람과 함께 늙어가고 싶은 것이다.'</p>
          <p>그리고 여기는 손글씨가 들어가면 된다.</p>
          <p>그래서 올거에요 말거에요 딱 말해주세요.</p>
          <p>소중한 분들을 모십니다.</p>
        </section>
        <section className="flex flex-col items-center text-white">
          <p className="font-bold">신랑</p>
          <p>손승호</p>
          <p className="font-semibold mt-2">신부</p>
          <p>고유미</p>
        </section>
      </div>
      <Image src="/images/sub-1.jpg" width={800} height={1000} alt="sub-1" />
    </div>
  );
};

export default Sub;
