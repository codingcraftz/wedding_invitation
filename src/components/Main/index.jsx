import { HALL_ENGLISH_NAME } from "@/utils/constants";
import { formattedTime, fullDate } from "@/utils/utils";

const { default: Image } = require("next/image");

const Main = () => {
  return (
    <div className="relative flex justify-start text-start flex-1 mt-0">
      <Image
        className="mb-auto"
        src="/images/main.jpg"
        alt="main"
        width={800}
        height={1000}
      />
      <section className="absolute inset-0 flex flex-col items-center">
        <div className="mt-10">
          <p className="text-white text-xl bg-black bg-opacity-70 px-4 py-2 rounded-lg text-center font-crimson">
            YOU'RE INVITED TO
          </p>
          <p className="text-white text-6xl bg-black bg-opacity-70 px-4 py-4 rounded-lg font-paris">
            Our Wedding
          </p>
        </div>
        <div className="mt-auto mb-5">
          <p className="text-white text-xl bg-black bg-opacity-70 px-8 rounded-lg text-center font-crimson">
            {fullDate} {formattedTime}
          </p>
          <p className="text-white text-xl bg-black bg-opacity-70 px-8 rounded-lg text-center font-crimson">
            at. {HALL_ENGLISH_NAME}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;
