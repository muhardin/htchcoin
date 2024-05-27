"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LandingPackage from "./LandingPackage";
import { Button } from "../ui/button";
import {
  Facebook,
  FolderArchive,
  Menu,
  Twitter,
  Wallet,
  Wallet2Icon,
} from "lucide-react";
import IcoTimer from "./IcoTimer";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import MobileMenu from "./MobileMenu";

export default function LandingPageComponent() {
  const [close, setClose] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="top-[0px] w-full h-screen fixed z-[100] bg-cover xl:px-36 overflow-y-scroll scroll-smooth pb-12"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}>
        <header className="fixed top-0 px-3 py-3 md:px-6 flex flex-row items-center justify-between z-[2] w-full bg-slate-200/5 backdrop-blur-lg shadow-md left-0">
          <Link
            href={"/"}
            className="w-[37] h-[54] flex flex-row items-center justify-center">
            <Image
              width={100}
              height={120}
              className=""
              src="/images/logo.png"
              alt="logo"
            />
          </Link>

          <div className="hidden md:flex">
            <IcoTimer />
          </div>
          <nav className="flex items-center justify-end gap-4">
            <ul className="hidden lg:flex  flex-row gap-4 lg:items-center items-start font-medium text-lg text-[#79716B]">
              <li className="lg:hidden w-full flex justify-center pb-[34px]">
                <IcoTimer />
              </li>
              <li>
                <Link className="text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white"
                  href="https://HTCH.gitbook.io/HTCH/introduction/overview"
                  target="_blank">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link className="text-white" href="/staking">
                  Staking
                </Link>
              </li>
              <li>
                <Link className="text-white" href="/referral">
                  <span className="text-[#875BF7]">[Referral]</span>
                </Link>
              </li>
              <li className="lg:hidden self-end w-full grow flex flex-col justify-end">
                <div className="flex justify-center items-center gap-[36px] pb-[50px]">
                  <a href="https://x.com/HTCH_ai" target="_blank">
                    <Image
                      width={150}
                      height={150}
                      src="/images/mobile_menu/x.svg"
                      alt="[]"
                    />
                  </a>
                  <a href="https://t.me/HTCHAI" target="_blank">
                    <Image
                      width={150}
                      height={150}
                      src="/images/mobile_menu/telegram.svg"
                      alt="[]"
                    />
                  </a>
                  <a href="mailto:contact@HTCH.ai" target="_blank">
                    <Image
                      width={150}
                      height={150}
                      src="/images/mobile_menu/mail.svg"
                      alt="[]"
                    />
                  </a>
                </div>
              </li>
            </ul>
            <div className="w-full flex flex-row gap-2">
              <Button className="rounded-none">
                <span className="hidden lg:flex text-white text-xl">
                  {"[ "} Connect Wallet {" ]"}
                </span>
                <Wallet2Icon className="lg:hidden" />
              </Button>
              <div className="lg:hidden">
                <MobileMenu />
              </div>
            </div>
          </nav>
        </header>
        <div className="w-full flex flex-col md:flex-row gap-8 p-4 mt-36">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-col gap-2 text-white">
              <span className="text-yellow-500 text-2xl">HTCH:</span>
              <span className="text-xl">
                The World&apos;s First Bitcoin DEX
              </span>
              <span>
                HTCH stands out as a pioneering decentralized exchange operating
                within the Bitcoin network. Unleash the sheer force of
                unrestricted trading while basking in the rock-solid security
                and unwavering stability that only Bitcoin can offer!
              </span>
            </div>
            <div className="flex flex-col md:flex-row  items-center justify-between md:pr-12 gap-4">
              <Button className="bg-white text-slate-950 text-lg px-8 py-6">
                {"[ "}Join Watchlist {" ]"}
              </Button>
              <div className="flex flex-row gap-2">
                <div className="rounded-full bg-yellow-700 w-10 h-10 items-center justify-center text-center flex flex-row">
                  <Image
                    src={"/images/eth.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <div className="rounded-full bg-yellow-700 w-10 h-10 items-center justify-center text-center flex flex-row">
                  <Facebook />
                  {/* <Image
                    src={"/images/eth.png"}
                    width={30}
                    height={30}
                    alt=""
                  /> */}
                </div>
                <div className="rounded-full bg-yellow-700 w-10 h-10 items-center justify-center text-center flex flex-row">
                  <Twitter />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden w-full justify-center items-center flex flex-row">
            <IcoTimer />
          </div>
          <div className="flex flex-col gap-2 md:w-1/2 w-full">
            <div className="w-full  backdrop-filter p-6 bg-slate-950/90">
              <div className="flex flex-col gap-4 bg-[#292425] pb-4">
                <div className="flex flex-row gap-1 p-1 ">
                  <Button className="rounded-none w-1/2 bg-[#44403C]">
                    Buy with crypto{" "}
                  </Button>
                  <Button className="rounded-none w-1/2 bg-transparent border-[#44403C] border">
                    Buy with card{" "}
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="">
                    <hr className="text-amber-500 w-full" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="text-sm text-[#44403C]">Round 22 Price</div>
                    <div className="text-2xl text-green-700">$0.03198</div>
                  </div>
                  <div className=""></div>
                </div>
                <Link href={"/"} className="text-center text-white">
                  learn more about rounds
                </Link>
                <div className="flex flex-row gap-1 px-4 ">
                  <Button className="rounded-none w-1/2 bg-[#44403C] flex flex-row gap-2">
                    <Image
                      src={"/images/eth.png"}
                      width={25}
                      height={25}
                      alt=""
                    />{" "}
                    <span>ETH</span>
                  </Button>
                  <Button className="rounded-none w-1/2 bg-transparent border-[#44403C] border flex flex-row gap-2">
                    <Image
                      src={"/images/eth.png"}
                      width={25}
                      height={25}
                      alt=""
                    />{" "}
                    <span>ETH</span>
                  </Button>
                </div>
                <div className="px-4">
                  <div className="w-full flex flex-row justify-between text-[#44403C]">
                    <span>2,509,658,487 SATX</span>
                    <span>2,509,658,487 SATX</span>
                  </div>
                  <div className="w-full">---------</div>
                  <div className="flex justify-between">
                    <span className="text-yellow-600">11,737,830 USD</span>
                    <span className="text-white">11,850,000 USD</span>
                  </div>
                </div>
                <div className="flex gap-1 pl-4">
                  <span className="text-[#44403C]">Balance:</span>{" "}
                  <span className="text-white">Connect your wallet</span>
                </div>
                <div className="w-full flex flex-row gap-1">
                  <div className="w-1/2 bg-[#201C1F] flex flex-col gap-4 py-3 px-4">
                    <div className="flex flex-row gap-1">
                      <span>
                        <Image
                          src={"/images/eth.png"}
                          width={25}
                          height={25}
                          alt=""
                        />
                      </span>
                      <span className="text-white">SATX</span>
                    </div>
                    <div className="text-2xl text-white">0</div>
                  </div>
                  <div className="w-1/2 bg-[#201C1F] flex flex-col gap-4 py-3 px-4">
                    <div className="flex flex-row gap-1">
                      <span>
                        <Image
                          src={"/images/eth.png"}
                          width={25}
                          height={25}
                          alt=""
                        />
                      </span>
                      <span className="text-white">SATX</span>
                    </div>
                    <div className="text-2xl text-white">0</div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 px-4 text-white">
                  <span>Use</span>
                  <Image
                    src={"/images/eth.png"}
                    width={25}
                    height={25}
                    alt=""
                  />{" "}
                  or{" "}
                  <Image
                    src={"/images/eth.png"}
                    width={25}
                    height={25}
                    alt=""
                  />{" "}
                  or{" "}
                  <Image
                    src={"/images/eth.png"}
                    width={25}
                    height={25}
                    alt=""
                  />
                </div>
                <div className="px-4">
                  <Button className="rounded-none w-full py-3">
                    <span className="text-white text-xl flex flex-row gap-4">
                      <span> {"[ "}</span>
                      <span className="flex flex-row gap-2 justify-center items-center">
                        <Wallet /> <span>Connect Wallet First</span>
                      </span>{" "}
                      <span> {"]"}</span>
                    </span>
                    <Wallet2Icon className="sm:hidden" />
                  </Button>
                </div>
                <div className="px-4 text-center text-xs text-white">
                  By pressing I agree, that I have read in full and accept the
                  Terms and Conditions and Accompanying Documents in theirs
                  entirety. I&apos;m 18 years old and not a resident of
                  Prohibited Jurisdictions.
                </div>
              </div>
            </div>
            {/* style={{
                backgroundImage: "url('/images/noise.webp')",
              }} */}
            <div className="w-full backdrop-filter p-6 bg-black/90 flex flex-row justify-between">
              <div className="text-white">Next Round Price</div>
              <div className="text-red-600 text-2xl">$0.03292</div>
            </div>
            <div className="w-full backdrop-filter p-6 bg-black/90 flex flex-row justify-center cursor-pointer gap-2">
              <div className="text-white">
                <FolderArchive />
              </div>
              <div className="text-white ">History of your transactions</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-950 pt-8 pb-20 px-8">
          <div className="text-5xl text-white w-full text-center mb-8 ">
            Featured In
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <div className="flex flex-row gap-2 w-full">
                <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none w-full">
                  <Image
                    src={"/images/iconHolder.svg"}
                    alt=""
                    width={150}
                    height={150}
                  />
                </Button>
                <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none w-full">
                  <Image
                    src={"/images/iconHolder.svg"}
                    alt=""
                    width={150}
                    height={150}
                  />
                </Button>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none w-full">
                  <Image
                    src={"/images/iconHolder.svg"}
                    alt=""
                    width={150}
                    height={150}
                  />
                </Button>
                <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none w-full">
                  <Image
                    src={"/images/iconHolder.svg"}
                    alt=""
                    width={150}
                    height={150}
                  />
                </Button>
              </div>
            </div>
            <div className="text-white w-full md:w-1/2">
              <div className=""></div>
              <div className="">
                <span>
                  HTCH.ai Raises $700,000 in Pre-Sale in 48 Hours To Build A
                  Bitcoin DEX
                </span>
                <div className="">
                  HTCH.ai, a pioneering Bitcoin DeFi platform, has raised $700K
                  in pre-sale round. This investment...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white flex flex-col gap-4 items-center justify-center py-8 pb-10 px-8 bg-black">
          <div className="text-3xl">What is HTCH?</div>
          <div className="">
            HTCH is a revolutionary DeFi protocol that brings the flexibility
            and innovation of exchange to the Bitcoin blockchain. It allows
            users to:
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none w-full">
              <span className="text-4xl text-white">Trade</span>
            </Button>
            <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none w-full">
              <span className="text-4xl text-white">LP</span>
            </Button>
            <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none  w-full">
              <span className="text-4xl text-white">Launch</span>
            </Button>
            <Button className="bg-transparent px-12 py-12 border-2 border-white rounded-none w-full">
              <span className="text-4xl text-white">Transparency</span>
            </Button>
          </div>
          <div className="w-full mt-8 p-2">
            <div className="w-full flex flex-row justify-between items-center">
              <span>Trade</span>
              <span>***</span>
            </div>
            <div className="border-2 border-white p-8 text-center mt-4">
              <span className="text-center">
                Directly trade tokens using Bitcoin, eliminating the need for
                wrapped assets and expensive Ethereum fees.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full p-8 bg-black/90">
          <div className="w-full border-2 border-white p-8 flex flex-col md:flex-row gap-4">
            <div className="text-white flex flex-col w-full md:w-3/4 gap-4">
              <span className="text-4xl ">Stake and Earn $SAT</span>
              <span>
                HTCH will provide passive rewards for all holders who stake
                their $SATX tokens in our smart contract
              </span>
              <Button className="md:w-1/2">
                {"["} Stake Now {"]"}
              </Button>
            </div>
            <div className="w-full md:w-1/4 flex flex-row justify-center items-center">
              <Image
                src={"/images/pc_mobile.webp"}
                width={150}
                height={150}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
