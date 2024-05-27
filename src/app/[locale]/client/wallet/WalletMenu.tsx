"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Withdraw from "./Withdraw";
import { useLocale } from "next-intl";

const WalletMenu = () => {
  const pathName = usePathname();
  const locale = useLocale();
  return (
    <div className="flex flex-row justify-between w-full">
      <TabsList>
        {pathName == `/${locale}/client/wallet` ? (
          <Button asChild variant={`outline`} className="cursor-default">
            <Link href={"/client/wallet"}>All</Link>
          </Button>
        ) : (
          <Button asChild variant={`secondary`} className="">
            <Link href={"/client/wallet"}>All</Link>
          </Button>
        )}
        {pathName == `/${locale}/client/wallet/withdraw` ? (
          <Button asChild variant={`outline`} className="cursor-default">
            <Link href={"/client/wallet/withdraw"}>Withdraw</Link>
          </Button>
        ) : (
          <Button asChild variant={`secondary`} className="">
            <Link href={"/client/wallet/withdraw"}>Withdraw</Link>
          </Button>
        )}
        {pathName == `/${locale}/client/wallet/deposit` ? (
          <Button asChild variant={`outline`} className="cursor-default">
            <Link href={"/client/wallet/deposit"}>Deposit</Link>
          </Button>
        ) : (
          <Button asChild variant={`secondary`} className="">
            <Link href={"/client/wallet/deposit"}>Deposit</Link>
          </Button>
        )}
      </TabsList>
      <div className="ml-auto flex items-center gap-2">
        <Withdraw />
      </div>
    </div>
  );
};

export default WalletMenu;
