import { FormEvent, useState } from "react";
import hide from "./hide.png";
import image from "./image.svg";
import line8 from "./line-8.svg";
import line9 from "./line-9.svg";
import line10 from "./line-10.svg";
import padlockWithKeyholeIconInPersonalDataSecurityIllustratesCyberDataOrInformationPrivacyIdeaPremiumVector1 from "./padlock-with-keyhole-icon-in-personal-data-security-illustrates-cyber-data-or-information-privacy-idea-premium-vector-1.png";

const navigationItems = [
  {
    label: "Home",
    href: "#home",
    className:
      "top-[25px] left-[641px] [font-family:'Inder-Regular',Helvetica]",
  },
  {
    label: "Features",
    href: "#features",
    className:
      "top-[25px] left-[736px] [font-family:'Inder-Regular',Helvetica]",
  },
  {
    label: "Blogs",
    href: "#blogs",
    className:
      "top-[25px] left-[875px] [font-family:'Inter-Regular',Helvetica]",
  },
  {
    label: "FAQ",
    href: "#faq",
    className:
      "top-[25px] left-[978px] [font-family:'Inter-Regular',Helvetica]",
  },
  {
    label: "About Us",
    href: "#about",
    className:
      "top-[25px] left-[1054px] [font-family:'Inder-Regular',Helvetica]",
  },
];

export const Desktop = (): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      isSignUp
        ? "Your sign up request has been submitted."
        : "Your login request has been submitted.",
    );
  };

  return (
    <main
      id="home"
      className="bg-white overflow-hidden w-full min-w-[1350px] min-h-[1002px] relative"
    >
      <header className="absolute top-0 left-0 w-[1364px] h-[92px] z-10">
        <div className="absolute top-0 left-0 w-[1350px] h-[92px] bg-[#d9d9d9]" />
        <a
          href="#home"
          className="top-3 left-[19px] [font-family:'Cascadia_Code-Regular',Helvetica] text-5xl whitespace-nowrap absolute font-normal text-black tracking-[0] leading-[normal]"
          aria-label="MUSCAN home"
        >
          MUSCAN
        </a>
        <nav aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${item.className} text-2xl absolute font-normal text-black tracking-[0] leading-[normal]`}
            >
              {item.label}
            </a>
          ))}
          <div className="absolute top-[22px] left-[1198px] w-[93px] h-[35px] bg-[#148f8c] rounded-3xl" />
          <a
            href="#login"
            className="top-[25px] left-[1214px] [font-family:'Inder-Regular',Helvetica] text-2xl absolute font-normal text-black tracking-[0] leading-[normal]"
          >
            Login
          </a>
        </nav>
      </header>
      <img
        className="absolute top-[78px] left-0 w-[1350px] h-[924px] aspect-[1.9] object-cover"
        alt=""
        aria-hidden="true"
        src={
          padlockWithKeyholeIconInPersonalDataSecurityIllustratesCyberDataOrInformationPrivacyIdeaPremiumVector1
        }
      />
      <section
        id="login"
        className="absolute top-[135px] left-[375px] w-[699px] h-[832px]"
        aria-labelledby="account-heading"
      >
        <div className="absolute top-0 left-0 w-[679px] h-[832px] bg-[#d9d9d91a] rounded-[20px] border-[none] backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(236,233,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
        <div className="absolute top-[58px] left-[148px] z-[2]">
          <button
            type="button"
            onClick={() => setIsSignUp(false)}
            className={`[font-family:'Cascadia_Code-Regular',Helvetica] font-normal text-4xl tracking-[0] leading-[normal] whitespace-nowrap ${
              isSignUp ? "text-white" : "text-[#73f4ff]"
            }`}
            aria-pressed={!isSignUp}
          >
            Login
          </button>
        </div>
        <div className="absolute top-[58px] left-[374px] z-[2]">
          <button
            type="button"
            onClick={() => setIsSignUp(true)}
            className={`[font-family:'Cascadia_Code-Regular',Helvetica] font-normal text-4xl tracking-[0] leading-[normal] whitespace-nowrap ${
              isSignUp ? "text-[#73f4ff]" : "text-white"
            }`}
            aria-pressed={isSignUp}
          >
            Sign Up
          </button>
        </div>
        <img
          className="absolute top-[116px] left-[97px] w-[213px] h-[3px]"
          alt=""
          aria-hidden="true"
          src={image}
        />
        <img
          className="absolute top-[118px] left-[97px] w-[477px] h-px object-cover"
          alt=""
          aria-hidden="true"
          src={line8}
        />
        <h1
          id="account-heading"
          className="absolute top-[138px] left-[204px] w-[275px] [font-family:'Cascadia_Code-Regular',Helvetica] font-normal text-[#fdf5f5] text-4xl tracking-[0] leading-[normal]"
        >
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="absolute top-[185px] left-[140px] [font-family:'Inder-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
          {isSignUp
            ? "Sign up to create your account"
            : "Login to continue to your account"}
        </p>
        <form onSubmit={handleSubmit} noValidate={false}>
          <label
            htmlFor="email"
            className="absolute top-[280px] left-[95px] w-[177px] [font-family:'Inder-Regular',Helvetica] font-normal text-[#fffcfc] text-2xl tracking-[0] leading-[normal]"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required={true}
            className="absolute top-[326px] left-[91px] w-[483px] h-[76px] bg-[#d9d9d9] rounded-[15px] shadow-[0px_4px_4px_#00000040] px-4 text-2xl text-black"
            aria-label="Email Address"
          />
          <label
            htmlFor="password"
            className="absolute top-[414px] left-[97px] w-[120px] [font-family:'Inder-Regular',Helvetica] font-normal text-[#fff3f3] text-2xl tracking-[0] leading-[normal]"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={isSignUp ? "new-password" : "current-password"}
            required={true}
            minLength={8}
            className="absolute top-[460px] left-[91px] w-[483px] h-[76px] bg-[#d9d9d9] rounded-[15px] shadow-[0px_4px_4px_#00000040] px-4 pr-14 text-2xl text-black"
            aria-label="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((currentValue) => !currentValue)}
            className="absolute top-[460px] left-[522px] w-[34px] h-[75px] z-[2]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img className="w-[34px] h-[75px]" alt="" src={hide} />
          </button>
          <a
            href="#password-reset"
            className="absolute top-[536px] left-[361px] w-[231px] [font-family:'Inder-Regular',Helvetica] font-normal text-[#fbf7f7] text-2xl tracking-[0] leading-[normal]"
          >
            Forget Password ?
          </a>
          <button
            type="submit"
            className="absolute top-[607px] left-[91px] w-[483px] h-[76px] bg-[#5cc8df] rounded-[15px] shadow-[0px_4px_4px_#00000040]"
          >
            <span className="absolute top-[14px] left-[187px] w-[115px] [font-family:'Cascadia_Code-Regular',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[normal]">
              {isSignUp ? "SIGN UP" : "LOGIN"}
            </span>
          </button>
        </form>
        <img
          className="absolute top-[722px] left-[91px] w-52 h-px object-cover"
          alt=""
          aria-hidden="true"
          src={line9}
        />
        <img
          className="absolute top-[722px] left-[366px] w-52 h-px object-cover"
          alt=""
          aria-hidden="true"
          src={line10}
        />
        <div className="absolute top-[710px] left-[319px] [font-family:'Inder-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
          OR
        </div>
        <p className="absolute top-[759px] left-[201px] w-[321px] [font-family:'Inder-Regular',Helvetica] font-normal text-[#fcf6f6] text-xl tracking-[0] leading-[normal]">
          {isSignUp ? "Already a member ? Login" : "Are You New Member ? "}
          <button
            type="button"
            onClick={() => setIsSignUp((currentValue) => !currentValue)}
            className="[font-family:'Inder-Regular',Helvetica] font-normal text-[#fcf6f6] text-xl tracking-[0] leading-[normal]"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
        <p className="sr-only" aria-live="polite">
          {status}
        </p>
      </section>
      <div id="features" className="absolute top-[1002px]" />
      <div id="blogs" className="absolute top-[1002px]" />
      <div id="faq" className="absolute top-[1002px]" />
      <div id="about" className="absolute top-[1002px]" />
      <div id="password-reset" className="absolute top-[1002px]" />
    </main>
  );
};
