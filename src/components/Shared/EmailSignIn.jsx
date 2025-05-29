"use client";
import Link from "next/link";
import React, { useState } from "react";
import CommonInput from "../fromComponents/CommonInput";

const EmailSignIn = ({ isSignIn, setIsSignIn }) => {
  const handleToggle = () => setIsSignIn(!isSignIn);
  return (
    <div className="w-full">
      <form className="flex flex-col items-start 2xl:gap-[10px] gap-[7px]">
        {!isSignIn && (
          <CommonInput inputType={"text"} inputPlaceHolder={"Your Name"} />
        )}
        <CommonInput
          inputType={"text"}
          inputPlaceHolder={isSignIn ? "Username or Email" : "Your Email"}
        />
        <CommonInput inputType={"password"} inputPlaceHolder={"Password"} />
        {isSignIn && (
          <button className="text-[#555] text-[12px] leading-normal tracking-normal xl:tracking-[-0.36px]">
            Forget Password?
          </button>
        )}

        <button
          type="submit"
          className="w-full xl:text-[16px] text-[14px] bg-[#070707] text-[#F1F4F2] tracking-normal xl:tracking-[-0.96px] mt-[10px] px-[10px] py-[7px] xl:py-[10px] rounded-[4px] transition"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>
      {isSignIn ? (
        <div className="xl:text-[16px] text-[#555] text-[14px] font-medium leading-4 tracking-normal xl:tracking-[-0.48px] mt-[16px]">
          <span>If you don’t have an account </span>
          <button
            type="button"
            onClick={handleToggle}
            className="text-[#074BDE] font-medium hover:underline transition"
          >
            Signup
          </button>
          <span> here?</span>
        </div>
      ) : (
        <div className="xl:text-[12px] text-[#555] text-[10px] font-medium leading-4 tracking-normal xl:tracking-[-0.36px] mt-[16px]">
          By continuing you agree to Street Alphas{" "}
          <Link
            href={""}
            className="decoration-[#555] underline cursor-pointer"
          >
            Terms and Conditions
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmailSignIn;
