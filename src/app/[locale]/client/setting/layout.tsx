import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";
import { SidebarNav } from "./components/sidebar-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DropDownMenu from "./components/DropDownMenu";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/client/setting",
  },
  {
    title: "Account",
    href: "/client/setting/account",
  },
  {
    title: "Appearance",
    href: "/client/setting/appearance",
  },
  {
    title: "Notifications",
    href: "/client/setting/notifications",
  },
  {
    title: "Display",
    href: "/client/setting/display",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="flex flex-row justify-between gap-2">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <DropDownMenu />
        </div>

        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5 overflow-y-auto hidden sm:flex">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
