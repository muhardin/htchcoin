import React from "react";
import { Input } from "../ui/input";
import TopNavigationMenu from "./TopNavigationMenu";
import Image from "next/image";
import { Heart, Search } from "lucide-react";
import SwitchLocale from "./SwitchLocale";
import SignInMenu from "./SignInMenu";
import SheetCart from "./SheetCart";
import HeaderSlide from "./HeaderSlide";

const ShopPage = () => {
  return (
    <div className="contain-layout container mx-auto">
      <header className="mb-5 sm:mb-8 bg-white px-2 py-4  w-full">
        <div className="container py-8 px-8 lg:py-0 shadow-md mb-4">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center flex-shrink-0 gap-5">
              <button type="button" className="leading-none block lg:hidden">
                <i className="lab-line-humburger text-xl"></i>
              </button>
              <a
                href="#/home"
                className="active router-link-exact-active router-link-active router-link-exact-active flex-shrink-0"
                aria-current="page">
                <Image
                  className="w-28 sm:w-32"
                  width={128}
                  height={39.16}
                  alt="logo"
                  src="/images/theme-logo.png"
                />
              </a>
            </div>

            <TopNavigationMenu />

            <form className="hidden w-full lg:w-80 h-10 rounded-3xl lg:flex items-center gap-2 px-4 border border-gray-100 bg-gray-100 transition-all duration-300 focus-within:border-primary focus-within:bg-white">
              <Search className="text-lg flex-shrink-0 w-4 h-4" />
              <input
                className="w-full h-full focus:outline-none focus:border-none placeholder-gray-500 outline-none bg-gray-100 border-none focus-within:bg-white"
                type="search"
                placeholder="Search..."
              />
            </form>
            <SwitchLocale />
            <Heart className="cursor-pointer" size={20} />
            <SignInMenu />
            <SheetCart />
          </div>
        </div>
        <HeaderSlide />
      </header>
    </div>
  );
};

export default ShopPage;
