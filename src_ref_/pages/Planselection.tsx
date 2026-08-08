import { FormEvent, useState } from "react";

const planFeatures = [
  "Everything in Basic",
  "Advanced reports",
  "Priority support",
  "Up to 5 users",
];

const navigationItems = [
  {
    label: "Home",
    href: "#home",
    className: "left-[641px] [font-family:'Inder-Regular',Helvetica]",
  },
  {
    label: "Features",
    href: "#features",
    className: "left-[736px] [font-family:'Inder-Regular',Helvetica]",
  },
  {
    label: "Blogs",
    href: "#blogs",
    className: "left-[875px] [font-family:'Inter-Regular',Helvetica]",
  },
  {
    label: "FAQ",
    href: "#faq",
    className: "left-[978px] [font-family:'Inter-Regular',Helvetica]",
  },
  {
    label: "About Us",
    href: "#about",
    className: "left-[1054px] [font-family:'Inder-Regular',Helvetica]",
  },
];

const TickIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="absolute left-0 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      d="M4.5 12.5 9.25 17 19.5 6.75"
      stroke="#00E676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const Desktop = (): JSX.Element => {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("Your Pro plan is ready to start.");
  };

  const handleChangePlan = () => {
    setStatusMessage("Plan selection can be changed from the plans page.");
  };

  return (
    <main
      id="home"
      className="relative min-h-[821px] min-w-[1350px] w-full overflow-hidden bg-white"
    >
      <header className="absolute left-0 top-0 z-10 h-[92px] w-[1364px]">
        <div className="absolute left-0 top-0 h-[92px] w-[1350px] bg-[#d9d9d9]" />
        <a
          href="#home"
          aria-label="MUSCAN home"
          className="absolute left-[19px] top-3 whitespace-nowrap [font-family:'Cascadia_Code-Regular',Helvetica] text-5xl font-normal leading-[normal] tracking-[0] text-black"
        >
          MUSCAN
        </a>
        <nav aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`absolute top-[25px] text-2xl font-normal leading-[normal] tracking-[0] text-black ${item.className}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#login"
            className="absolute left-[1198px] top-[22px] flex h-[35px] w-[93px] items-center justify-center rounded-3xl bg-[#148f8c] [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] text-black"
          >
            Login
          </a>
        </nav>
      </header>
      <section
        aria-labelledby="plan-page-title"
        className="absolute left-0 top-[92px] h-[759px] w-[1350px] bg-[linear-gradient(180deg,rgba(4,23,41,1)_0%,rgba(6,34,57,1)_48%,rgba(4,25,46,1)_100%)]"
      >
        <h1
          id="plan-page-title"
          className="absolute left-[570px] top-[21px] whitespace-nowrap text-center [font-family:'Cascadia_Code-Bold',Helvetica] text-[40px] font-bold leading-10 tracking-[0] text-white"
        >
          Your Plan
        </h1>
        <section aria-labelledby="selected-plan-title">
          <h2
            id="selected-plan-title"
            className="absolute left-[46px] top-[119px] whitespace-nowrap text-center [font-family:'Inder-Regular',Helvetica] text-[28px] font-normal leading-7 tracking-[0] text-white"
          >
            You&apos;ve selected
          </h2>
          <article className="absolute left-[46px] top-[174px] h-[495px] w-[439px]">
            <div className="absolute inset-y-0 left-0 h-[495px] w-[435px] rounded-[20px] border-[none] bg-[#d9d9d91a] backdrop-blur-[17.5px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[20px] before:p-px before:content-[''] before:[background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(236,233,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)]" />
            <h3 className="absolute left-[23px] top-8 whitespace-nowrap text-center [font-family:'Inder-Regular',Helvetica] text-[32px] font-normal leading-8 tracking-[0] text-white">
              Pro
            </h3>
            <p className="absolute left-[22px] top-20 [font-family:'Inder-Regular',Helvetica] text-5xl font-normal leading-[48px] tracking-[0] text-white">
              <span>$49</span>
              <span className="text-2xl leading-6">
                /month
                <br />
                Perfect for teams
              </span>
            </p>
            <ul className="absolute left-[21px] top-[182px] h-[210px] w-[242px]">
              {planFeatures.map((feature, index) => (
                <li
                  key={feature}
                  className="absolute left-0 flex items-start"
                  style={{ top: `${index * 61}px` }}
                >
                  <TickIcon />
                  <span className="ml-[27px] whitespace-nowrap [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] text-white">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </article>
          <button
            type="button"
            onClick={handleChangePlan}
            className="absolute left-[318px] top-[629px] whitespace-nowrap [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-[#c5c7ea] underline-offset-2 hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Change plan
          </button>
        </section>
        <section aria-labelledby="payment-details-title">
          <h2
            id="payment-details-title"
            className="absolute left-[533px] top-[119px] whitespace-nowrap text-center [font-family:'Inder-Regular',Helvetica] text-[28px] font-normal leading-7 tracking-[0] text-white"
          >
            Payment Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="absolute left-[533px] top-[174px]">
              <label
                htmlFor="card-number"
                className="block whitespace-nowrap [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-white"
              >
                Card Number
              </label>
              <input
                id="card-number"
                name="cardNumber"
                type="text"
                inputMode="numeric"
                autoComplete="cc-number"
                aria-label="Card Number"
                required
                className="mt-3 h-11 w-[687px] rounded-[15px] bg-[#d9d9d9] px-4 text-lg text-[#041729] shadow-[0px_4px_4px_#00000040] focus-visible:ring-2 focus-visible:ring-[#686de0]"
              />
            </div>
            <div className="absolute left-[534px] top-[266px]">
              <label
                htmlFor="expiry-date"
                className="block whitespace-nowrap [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-white"
              >
                Expiry Date
              </label>
              <input
                id="expiry-date"
                name="expiryDate"
                type="text"
                inputMode="numeric"
                autoComplete="cc-exp"
                aria-label="Expiry Date"
                required
                className="mt-3 h-11 w-[335px] rounded-[15px] bg-[#d9d9d9] px-4 text-lg text-[#041729] shadow-[0px_4px_4px_#00000040] focus-visible:ring-2 focus-visible:ring-[#686de0]"
              />
            </div>
            <div className="absolute left-[886px] top-[266px]">
              <label
                htmlFor="cvc"
                className="block whitespace-nowrap [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-white"
              >
                CVC
              </label>
              <input
                id="cvc"
                name="cvc"
                type="text"
                inputMode="numeric"
                autoComplete="cc-csc"
                aria-label="CVC"
                required
                className="mt-3 h-11 w-[335px] rounded-[15px] bg-[#d9d9d9] px-4 text-lg text-[#041729] shadow-[0px_4px_4px_#00000040] focus-visible:ring-2 focus-visible:ring-[#686de0]"
              />
            </div>
            <div className="absolute left-[533px] top-[357px]">
              <label
                htmlFor="cardholder-name"
                className="block whitespace-nowrap [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-white"
              >
                Cardholder Name
              </label>
              <input
                id="cardholder-name"
                name="cardholderName"
                type="text"
                autoComplete="cc-name"
                aria-label="Cardholder Name"
                required
                className="mt-3 h-11 w-[687px] rounded-[15px] bg-[#d9d9d9] px-4 text-lg text-[#041729] shadow-[0px_4px_4px_#00000040] focus-visible:ring-2 focus-visible:ring-[#686de0]"
              />
            </div>
            <div className="absolute left-[533px] top-[449px]">
              <label
                htmlFor="country"
                className="block whitespace-nowrap [font-family:'Inder-Regular',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-white"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                aria-label="Country"
                required
                defaultValue=""
                className="mt-3 h-11 w-[687px] rounded-[15px] bg-[#d9d9d9] px-4 text-lg text-[#041729] shadow-[0px_4px_4px_#00000040] focus-visible:ring-2 focus-visible:ring-[#686de0]"
              >
                <option value="" disabled>
                  Select country
                </option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
            </div>
            <button
              type="submit"
              className="all-unset absolute left-[664px] top-[588px] box-border flex h-[50px] w-[461px] items-center justify-center gap-2.5 overflow-hidden rounded-[10px] bg-[#686de0] px-6 py-[18px] shadow-[inset_0px_-1px_1px_1px_#3322aa40,inset_0px_1px_1px_1px_#ffffff40,inset_0px_0px_0px_1px_#4834d4,0px_1px_2px_#130d3d40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="mb-[-10px] mt-[-12px] whitespace-nowrap [font-family:'Lato-Bold',Helvetica] text-4xl font-bold leading-9 tracking-[0] text-white">
                Start Pro Plan
              </span>
            </button>
          </form>
        </section>
        <p
          aria-live="polite"
          className="absolute left-[533px] top-[652px] w-[687px] text-center [font-family:'Inder-Regular',Helvetica] text-base text-white"
        >
          {statusMessage}
        </p>
      </section>
    </main>
  );
};
