import { LightbulbIcon, PlusIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav>
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-4">
        <Link
          to={"/"}
          className="flex items-center gap-1 text-xl font-bold md:text-2xl"
        >
          💡 idee
        </Link>
        <Button size={"sm"} variant={"outline"} className="" asChild>
          <NavLink
            to={"/create-post"}
            className={"flex items-center gap-1 text-sm"}
          >
            ⚡ New Idea
          </NavLink>
        </Button>
      </div>
    </nav>
  );
}
