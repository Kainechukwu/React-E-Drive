import React from "react";

interface props {
  text: {
    eligibility: {
      title: string;
      items: Array<string>;
    };
    benefits: {
      title: string;
      items: Array<string>;
    };
  };
  // benefits: Object,
}

const EligibilityAndBenefits: React.FC<props> = ({ text }) => {
  return (
    <div className="mt-[72px] container grid grid-cols-1 md:grid-cols-2 gap-8 pb-[49px]">
      <div className="col-span-1 flex flex-col pt-[35px] px-[40px] pb-[47px] bg-[#F2F4F7] border border-[#red] rounded-[12px]">
        <div className="mb-[24px]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="10"
              fill="url(#paint0_linear_528_38344)"
            />
            <path
              d="M18.0944 23.2288C18.0322 22.8282 18 22.4179 18 22C18 17.5817 21.6052 14 26.0526 14C30.4999 14 34.1052 17.5817 34.1052 22C34.1052 22.9981 33.9213 23.9535 33.5852 24.8345C33.5154 25.0175 33.4804 25.109 33.4646 25.1804C33.4489 25.2512 33.4428 25.301 33.4411 25.3735C33.4394 25.4466 33.4493 25.5272 33.4692 25.6883L33.8717 28.9585C33.9153 29.3125 33.9371 29.4895 33.8782 29.6182C33.8266 29.731 33.735 29.8205 33.6211 29.8695C33.4911 29.9254 33.3146 29.8995 32.9617 29.8478L29.7765 29.3809C29.6101 29.3565 29.527 29.3443 29.4512 29.3448C29.3763 29.3452 29.3245 29.3507 29.2511 29.3661C29.177 29.3817 29.0823 29.4172 28.893 29.4881C28.0097 29.819 27.0524 30 26.0526 30C25.6344 30 25.2237 29.9683 24.8227 29.9073M19.6316 34C22.5965 34 25 31.5376 25 28.5C25 25.4624 22.5965 23 19.6316 23C16.6667 23 14.2632 25.4624 14.2632 28.5C14.2632 29.1106 14.3603 29.6979 14.5395 30.2467C14.6153 30.4787 14.6532 30.5947 14.6657 30.6739C14.6786 30.7567 14.6809 30.8031 14.6761 30.8867C14.6714 30.9668 14.6514 31.0573 14.6113 31.2383L14 34L16.9948 33.591C17.1583 33.5687 17.24 33.5575 17.3114 33.558C17.3865 33.5585 17.4264 33.5626 17.5001 33.5773C17.5701 33.5912 17.6742 33.6279 17.8823 33.7014C18.4306 33.8949 19.0191 34 19.6316 34Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_528_38344"
                x1="47.9962"
                y1="24.0013"
                x2="0.00262607"
                y2="24.0013"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00114093" stopColor="#F60E0E" />
                <stop offset="1" stopColor="#FFA800" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {text.eligibility && (
          <h1 className="mb-[32px] font-semibold text-[30px] text-[#344054]">
            {text.eligibility.title}
          </h1>
        )}

        {text.eligibility.items &&
          text.eligibility.items.map((item) => (
            <div key={item} className="flex items center gap-[14px] mb-5">
              <div>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_695_34123)">
                    <path
                      d="M8.75065 14.0002L12.2507 17.5002L19.2507 10.5002M25.6673 14.0002C25.6673 20.4435 20.444 25.6668 14.0007 25.6668C7.55733 25.6668 2.33398 20.4435 2.33398 14.0002C2.33398 7.55684 7.55733 2.3335 14.0007 2.3335C20.444 2.3335 25.6673 7.55684 25.6673 14.0002Z"
                      stroke="url(#paint0_linear_695_34123)"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_695_34123"
                      x1="25.6655"
                      y1="14.0008"
                      x2="2.33526"
                      y2="14.0008"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.00114093" stopColor="#F60E0E" />
                      <stop offset="1" stopColor="#FFA800" />
                    </linearGradient>
                    <clipPath id="clip0_695_34123">
                      <rect width="28" height="28" rx="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-normal text-[18px] text-[#475467]">{item}</p>
            </div>
          ))}
      </div>

      <div className="col-span-1 flex flex-col pt-[35px] px-[40px] pb-[47px] bg-[#F2F4F7] border border-[#red] rounded-[12px]">
        <div className="mb-[24px]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="10"
              fill="url(#paint0_linear_528_38332)"
            />
            <path
              d="M25.0008 14L16.0943 24.6879C15.7455 25.1064 15.5711 25.3157 15.5684 25.4925C15.5661 25.6461 15.6346 25.7923 15.7541 25.8889C15.8916 26 16.164 26 16.7089 26H24.0008L23.0008 34L31.9074 23.3121C32.2562 22.8936 32.4306 22.6843 32.4333 22.5075C32.4356 22.3539 32.3671 22.2077 32.2476 22.1111C32.1101 22 31.8377 22 31.2928 22H24.0008L25.0008 14Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_528_38332"
                x1="47.9962"
                y1="24.0013"
                x2="0.00262607"
                y2="24.0013"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00114093" stopColor="#F60E0E" />
                <stop offset="1" stopColor="#FFA800" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {text.benefits.title && (
          <h1 className="mb-[32px] font-semibold text-[30px] text-[#344054]">
            {text.benefits.title}
          </h1>
        )}

        {text.benefits.items.map((item) => (
          <div key={item} className="flex items center gap-[14px] mb-5">
            <div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_695_34123)">
                  <path
                    d="M8.75065 14.0002L12.2507 17.5002L19.2507 10.5002M25.6673 14.0002C25.6673 20.4435 20.444 25.6668 14.0007 25.6668C7.55733 25.6668 2.33398 20.4435 2.33398 14.0002C2.33398 7.55684 7.55733 2.3335 14.0007 2.3335C20.444 2.3335 25.6673 7.55684 25.6673 14.0002Z"
                    stroke="url(#paint0_linear_695_34123)"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_695_34123"
                    x1="25.6655"
                    y1="14.0008"
                    x2="2.33526"
                    y2="14.0008"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00114093" stopColor="#F60E0E" />
                    <stop offset="1" stopColor="#FFA800" />
                  </linearGradient>
                  <clipPath id="clip0_695_34123">
                    <rect width="28" height="28" rx="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-normal text-[18px] text-[#475467]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EligibilityAndBenefits;
