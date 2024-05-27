import LandingPageComponent from "@/components/landing-page/LandingPageComponent";
import ShopPage from "@/components/shopp-page/ShopPage";
import { headers } from "next/headers";

const page = () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";

  if (process.env.LANDING_PAGE?.includes(domain)) {
    return (
      <main className="bg-black h-screen max-h-screen overflow-y-scroll scroll-smooth">
        <LandingPageComponent />
      </main>
    );
  } else {
    return (
      <main className="bg-black h-screen max-h-screen overflow-y-scroll scroll-smooth">
        <LandingPageComponent />
      </main>
    );
  }
};

export default page;
