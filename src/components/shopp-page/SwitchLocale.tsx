"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Slack } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { startTransition } from "react";

const components: {
  title: string;
  code: string;
  flag: string;
  description: string;
}[] = [
  {
    title: "English",
    code: "en",
    flag: "/images/en.png",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Indonesia",
    code: "id",
    flag: "/images/id.png",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export default function SwitchLocale() {
  const pathName = usePathname();
  const newPath = pathName.substring(pathName.indexOf("/", 1));
  const router = useRouter();
  const locale = useLocale();
  const includes = ["/en", "/id"];
  const onSelectChange = (value: string) => {
    const isPathIncluded = includes.some((path) => pathName === path);
    if (isPathIncluded) {
      startTransition(() => {
        router.replace(`/${value}`);
      });
    } else {
      startTransition(() => {
        router.replace(`/${value}/${newPath}`);
      });
    }
    // startTransition(() => {
    //   router.replace(`/${value}/${newPath}`);
    //   setSelectedValue(value); // Update the selected value state
    // });
  };
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row items-center justify-between gap-5">
        <NavigationMenuItem>
          {locale === "id" ? (
            <NavigationMenuTrigger className="flex flex-row gap-2">
              <Image src={"/images/id.png"} width={20} height={20} alt="flag" />{" "}
              Indonesia
            </NavigationMenuTrigger>
          ) : (
            <NavigationMenuTrigger className="flex flex-row gap-2">
              <Image src={"/images/en.png"} width={20} height={20} alt="flag" />{" "}
              English
            </NavigationMenuTrigger>
          )}

          <NavigationMenuContent>
            <ul className="grid w-[140px] gap-1 p-2 cursor-pointer">
              {components.map((component) => (
                <ListItem
                  onClick={() => onSelectChange(component.code)}
                  flag={component.flag}
                  key={component.title}
                  title={component.title}></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { flag: string } // Include flag in the type definition
>(({ className, title, children, flag, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none flex flex-row gap-2 items-center">
            <Image src={flag} width={20} height={20} alt="flag" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground flex flex-row gap-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
ListItem.displayName = "ListItem";
