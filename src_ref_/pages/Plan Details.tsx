import { useState } from "react";
import { HugeiconsTick04 } from "./HugeiconsTick04";
import { UilCalender } from "./UilCalender";

const navigationItems = [
  {
    label: "Home",
    href: "#home",
    left: "left-[641px]",
    font: "[font-family:'Inder-Regular',Helvetica]",
  },
  {
    label: "Features",
    href: "#features",
    left: "left-[736px]",
    font: "[font-family:'Inder-Regular',Helvetica]",
  },
  {
    label: "Blogs",
    href: "#blogs",
    left: "left-[875px]",
    font: "[font-family:'Inter-Regular',Helvetica]",
  },
  {
    label: "FAQ",
    href: "#faq",
    left: "left-[978px]",
    font: "[font-family:'Inter-Regular',Helvetica]",
  },
  {
    label: "About Us",
    href: "#about",
    left: "left-[1054px]",
    font: "[font-family:'Inder-Regular',Helvetica]",
  },
];

const trialFeatures = [
  { label: "All core features", top: "top-[83px]" },
  { label: "Up to 3 scans", top: "top-[145px]" },
  { label: "Basic support", top: "top-[206px]" },
  { label: "No credit card required", top: "top-[262px]" },
];

export const Desktop = (): JSX.Element => {
  const [notification, setNotification] = useState("");

  const handleStartTrial = () => {
    setNotification("Your free trial has started.");
  };

  const handleViewPlans = () => {
    setNotification("Plans are available to view.");
  };

  return (
    <main
      id="home"
      className="bg-white overflow-hidden w-full min-w-[1350px] min-h-[821px] relative"
      aria-label="Muscan pricing"
    >
      <header className="absolute top-0 left-0 w-[1364px] h-[92px] z-10">
        <div className="absolute top-0 left-0 w-[1350px] h-[92px] bg-[#d9d9d9]" />
        <a
          href="#home"
          className="top-3 left-[19px] [font-family:'Cascadia_Code-Regular',Helvetica] text-5xl whitespace-nowrap absolute font-normal text-black tracking-[0] leading-[normal] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black"
          aria-label="Muscan home"
        >
          MUSCAN
        </a>
        <nav aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`top-[25px] ${item.left} ${item.font} text-2xl absolute font-normal text-black tracking-[0] leading-[normal] whitespace-nowrap focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#login"
            className="absolute top-[22px] left-[1198px] w-[93px] h-[35px] bg-[#148f8c] rounded-3xl focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black"
            aria-label="Login"
          >
            <span className="absolute top-[3px] left-4 [font-family:'Inder-Regular',Helvetica] text-2xl font-normal text-black tracking-[0] leading-[normal]">
              Login
            </span>
          </a>
        </nav>
      </header>
      <section
        id="features"
        className="absolute top-[92px] left-0 w-[1350px] h-[759px] bg-[linear-gradient(180deg,rgba(95,2,104,1)_0%,rgba(116,44,106,1)_48%,rgba(113,79,114,1)_100%)]"
        aria-labelledby="plans-heading"
      >
        <h1
          id="plans-heading"
          className="absolute top-[37px] left-[486px] [font-family:'Cascadia_Code-Bold',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-10 whitespace-nowrap"
        >
          Choose Your Plan
        </h1>
        <article
          className="absolute top-[114px] left-[103px] w-[540px] h-[597px]"
          aria-labelledby="trial-heading"
        >
          <div className="absolute top-0 left-0 w-[538px] h-[597px] bg-[#d9d9d91a] rounded-[20px] border-[none] backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(236,233,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
          <h2
            id="trial-heading"
            className="absolute top-[81px] left-[163px] [font-family:'Cascadia_Code-Regular',Helvetica] font-normal text-[#fdf5f5] text-4xl tracking-[0] leading-[normal] whitespace-nowrap"
          >
            FREE TRIAL
          </h2>
          <p className="absolute top-[118px] left-[184px] [font-family:'Inder-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            $0 For 14 days
          </p>
          <ul className="absolute top-[194px] left-[54px] w-[303px] h-[286px] list-none m-0 p-0">
            {trialFeatures.map((feature) => (
              <li
                key={feature.label}
                className={`absolute ${feature.top} left-0 flex items-center [font-family:'Inder-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                <HugeiconsTick04 className="w-6 h-6 aspect-[1] shrink-0 mr-[3px]" />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
          <div className="flex w-[106px] h-[150px] items-center justify-center px-0 py-[3px] absolute top-[434px] left-[calc(50.00%_-_54px)]">
            <button
              type="button"
              onClick={handleStartTrial}
              className="all-unset box-border inline-flex items-center justify-center gap-2.5 px-6 py-[18px] relative flex-[0_0_auto] ml-[-108.00px] mr-[-108.00px] bg-[#686de0] rounded-[10px] overflow-hidden shadow-[inset_0px_-1px_1px_1px_#3322aa40,inset_0px_1px_1px_1px_#ffffff40,inset_0px_0px_0px_1px_#4834d4,0px_1px_2px_#130d3d40] cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[42px] tracking-[0] leading-[42px] whitespace-nowrap">
                Start free Trial
              </span>
            </button>
          </div>
        </article>
        <article
          className="absolute top-[114px] left-[732px] w-[542px] h-[597px]"
          aria-labelledby="plans-card-heading"
        >
          <div className="absolute top-0 left-0 w-[538px] h-[597px] bg-[#d9d9d91a] rounded-[20px] border-[none] backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(236,233,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
          <div className="absolute top-[95px] left-[205px] w-32 h-[110px] rounded-[64px/55px] border border-solid border-white" />
          <UilCalender className="!absolute !top-[113px] !left-[234px] !w-[70px] !h-[70px] !aspect-[1]" />
          <h2
            id="plans-card-heading"
            className="absolute top-[213px] left-[143px] [font-family:'Cascadia_Code-Regular',Helvetica] font-normal text-[#fdf5f5] text-4xl tracking-[0] leading-[normal] whitespace-nowrap"
          >
            SEE PLANS
          </h2>
          <p className="absolute top-72 left-[182px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-6">
            View all plans
            <br />
            and choose the
            <br />
            best one for you
          </p>
          <div className="flex w-[106px] h-[150px] items-center justify-center px-0 py-[3px] absolute top-[434px] left-[calc(50.00%_-_55px)]">
            <button
              type="button"
              onClick={handleViewPlans}
              className="all-unset box-border inline-flex items-center justify-center gap-2.5 px-6 py-[18px] relative flex-[0_0_auto] ml-[-73.50px] mr-[-73.50px] bg-[#686de0] rounded-[10px] overflow-hidden shadow-[inset_0px_-1px_1px_1px_#3322aa40,inset_0px_1px_1px_1px_#ffffff40,inset_0px_0px_0px_1px_#4834d4,0px_1px_2px_#130d3d40] cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-white text-[42px] tracking-[0] leading-[42px] whitespace-nowrap">
                View Plans
              </span>
            </button>
          </div>
        </article>
      </section>
      <div className="sr-only" aria-live="polite" role="status">
        {notification}
      </div>
    </main>
  );
};
