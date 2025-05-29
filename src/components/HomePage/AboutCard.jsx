import React from "react";

const AboutCard = () => {
  return (
    <section className="py-[55px] md:py-[80px] xl:py-[100px]">
      <div className="sa-container">
        <div className="flex flex-col justify-center items-center xl:mb-[80px] md:mb-[65px] mb-[40px]">
          <h2 className="xl:text-4xl md:text-3xl text-[26px] font-semibold text-center xl:mb-[30px] md:mb-[22px] mb-[18px] text-[#070707] leading-[normal] tracking-normal xl:tracking-[-2.16px]">
            What’s Inside Streets Alpha
          </h2>
          <div className="text-[16px] tracking-normal xl:tracking-[-0.48px] leading-relaxed text-[#555] text-center">
            Cutting-edge quant strategies and real-time market scans made
            intuitive for everyone
          </div>
        </div>
        <div className="about-card-container w-full grid grid-cols-3 justify-center items-center gap-[20px] ">
          {aboutData.map((item) => {
            return (
              <div
                key={item.id}
                className="relative w-full h-full flex flex-col items-center rounded-[16px] bg-[#fff] border-[0.75px] border-[#DFDFE4] px-[15px] md:px-[20px] pt-[15px] md:pt-[22px] pb-[20px] md:pb-[26px]"
              >
                {item.isLabel && (
                  <div className="text-[#070707] text-[12px] leading-normal tracking-normal xl:tracking-[-0.36px] rounded-[51px] bg-[#B4FFCB] px-[10px] py-[4px] absolute top-[15px] right-[16px]">
                    Upcoming
                  </div>
                )}
                <div className="w-full max-w-[35px] xl:max-w-[48px] mr-auto xl:mb-[47px] md:mb-[30px] mb-[25px]">
                  <img src={item.picture} alt="picture" />
                </div>

                <div className="flex flex-col">
                  <div className="xl:text-[20px]  text-[18px] font-medium text-[#070707]  md:mb-[15px] mb-[12px] tracking-normal xl:tracking-[-0.8px] leading-snug">
                    {item.title}
                  </div>
                  <div className="sm:text-[16px] text-[14px] tracking-normal xl:tracking-[ -0.48px;] leading-relaxed	text-[#555]">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCard;

export const aboutData = [
  {
    id: 0,
    title: "Global Financial News",
    desc: "Stay ahead with real-time updates from markets around the world..",
    picture: "/assets/about_1.svg",
    isLabel: false,
  },
  {
    id: 1,
    title: "Financial Advisor",
    desc: "Your AI-powered companion for smarter, goal-based investing decisions.",
    picture: "/assets/about_2.svg",
    isLabel: false,
  },
  {
    id: 2,
    title: "Dashboard",
    desc: "Customizable overviews to track your portfolio, sectors, and strategies at a glance.",
    picture: "/assets/about_3.svg",
    isLabel: false,
  },
  {
    id: 3,
    title: "Data Visualizations",
    desc: "Make sense of market chaos with clean, interactive, and beautiful charts",
    picture: "/assets/about_4.svg",
    isLabel: false,
  },
  {
    id: 4,
    title: "Copilot",
    desc: "Let our intelligent assistant guide your financial moves, from insights to execution",
    picture: "/assets/about_5.svg",
    isLabel: false,
  },
  {
    id: 5,
    title: "Fundamentals",
    desc: "Dive deep into balance sheets, earnings, and key metrics that drive company value",
    picture: "/assets/about_6.svg",
    isLabel: false,
  },
  {
    id: 6,
    title: "Valuation and Estimates",
    desc: "See what the numbers say - from intrinsic value to analyst targets",
    picture: "/assets/about_7.svg",
    isLabel: true,
  },
  {
    id: 7,
    title: "Forecasts",
    desc: "Predictive models and trends to help you navigate what’s next in the markets",
    picture: "/assets/about_8.svg",
    isLabel: true,
  },
  {
    id: 8,
    title: "Hedge Funds",
    desc: "Track how the big players invest — and what their moves signal",
    picture: "/assets/about_9.svg",
    isLabel: true,
  },
];
