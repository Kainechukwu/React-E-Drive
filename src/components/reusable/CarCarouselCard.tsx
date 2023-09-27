import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export default function CarouselDefault() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const handleSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="rounded-md flex flex-col bg-white rounded-t-md shadow-md">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="group relative h-[200px] rounded-t-md bg-center bg-cover duration-500"
      >
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute left-2 max-h-max max-w-max  top[50%] -translate-x-0 translate-y-[75px] text-[2xl rounded-full p-2 bg-black/20 text-white cursur-pointer"
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute right-2  max-h-max max-w-max top[50%] -translate-x-0 translate-y-[75px] text-[2xl rounded-full p-2 bg-black/20 text-white cursur-pointer"
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="flex justify-center py-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          {slides.map((slide, index) => (
            <div
              onClick={() => handleSlide(index)}
              key={index}
              className={`${
                index === currentIndex ? "" : "text-opacity-50"
              } text-2xl cursor-pointer text-white`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-b-md pb-[14px]">
        <div className="cursor-pointer flex flex-col gap-3 pt-[21px] px-[19px] bg-[#ffffff]">
          <div className="flex items-center justify-between font-medium text-xs">
            <h2 className="font-semibold text-sm text-[#30374F]">
              2000 Toyota Corolla
            </h2>

            {/* <div><Heart /></div> */}
          </div>
          <div className="mb-[5px] flex font-normal text-xs text-[#4A5578] gap-[19px]">
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1V2.25M6 1C3.23858 1 1 3.23858 1 6M6 1C8.76142 1 11 3.23858 11 6M6 9.75V11M6 11C8.76142 11 11 8.76142 11 6M6 11C3.23858 11 1 8.76142 1 6M2.25 6H1M11 6H9.75M9.53921 9.53921L8.65234 8.65234M2.46082 9.53921L3.34858 8.65145M2.46082 2.5L3.32904 3.36823M9.53921 2.5L6.74995 5.25M7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6Z"
                  stroke="#4A5578"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              100{" "}
            </span>
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
                  stroke="#4A5578"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 11C8 9 10 7.20914 10 5C10 2.79086 8.20914 1 6 1C3.79086 1 2 2.79086 2 5C2 7.20914 4 9 6 11Z"
                  stroke="#4A5578"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Lagos
            </span>
          </div>
          <h1 className="font-bold text-xl text-[#30374F]">N2,000,000</h1>
        </div>
      </div>
    </div>
  );
}
