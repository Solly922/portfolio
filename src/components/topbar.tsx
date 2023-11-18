import { NavItem } from "@/types/nav";
import MainNav from "./main-nav";
// import getNavbarRoutes from "@/routes/getNavbarRoutes";
// import MobileNav from "../mobileNav";

const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: "" as any,
  },
  {
    title: "About",
    path: "/about",
    icon: "" as any,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "" as any,
  },
];

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex py-2 w-ful">
      <div className="flex items-center px-4 space-x-4 lg:container h-14 sm:space-x-0 justify-between w-full">
        <a
          // to="/"
          className="h-full flex items-center"
        >
          <h1 className="text-3xl">Solomon Schuster</h1>
        </a>

        <div className="flex h-full space-x-4 items-center">
          <MainNav items={navItems} />
          {/* <MobileNav items={userNavItems} /> */}
        </div>
      </div>
    </header>
  );
}
