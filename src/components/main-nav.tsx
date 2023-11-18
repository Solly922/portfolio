import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";

interface MainNavProps {
  items: NavItem[];
}

function MainNav({ items }: MainNavProps) {
  // const currentPathname = useLocation().pathname;

  return (
    <div className="flex items-center h-full gap-6 lg:gap-10">
      {items.length && (
        <nav className="items-center flex-1 hidden h-full md:flex">
          {items.map((item, i) => {
            return (
              <a
                key={i}
                // to={item.path}
                className={cn(
                  "md:text-xs lg:text-sm flex h-full items-center p-4 border-b-2 border-b-blue-500 border-opacity-0 hover:text-secondary border-t-2 border-t-transparent hover:bg-white hover:bg-opacity-5 gap-1",
                  {
                    "cursor-not-allowed opacity-80": item.disabled,
                    // "border-b-2 border-b-secondary border-opacity-100 text-secondary decoration-2 decoration-primary":
                    //   isActiveRoute(currentPathname, item.path),
                  }
                )}
              >
                {item.icon && <item.icon className="h-full w-full" />}
                {item.title}
              </a>
            );
          })}
        </nav>
      )}
    </div>
  );
}

export default MainNav;
