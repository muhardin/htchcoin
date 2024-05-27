"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

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

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild className="flex sm:hidden">
          <Button variant="outline" size="menu" className="overflow-hidden">
            <Ellipsis className="" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div
            className="flex flex-col space-y-0.5"
            onClick={() => setOpen(false)}>
            {sidebarNavItems.map((item: any) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),

                  "justify-start"
                )}>
                {item.title}
              </Link>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownMenu;
