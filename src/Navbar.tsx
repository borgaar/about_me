import { NavLink } from "react-router";
import { useAnimate } from "./hooks";
import { Github } from "./Github";

export function Navbar() {
  const [isVisible] = useAnimate(800);

  return (
    <div
      className={`flex flex-row justify-center h-14 gap-10 items-center duration-500 transition-all ${isVisible ? "translate-y-0" : "-translate-y-full"} relative`}
    >
      <a
        href="https://github.com/borgaar/about_me"
        target="_blank"
        className="absolute left-5 flex-row gap-2 opacity-35 hover:opacity-100 transition-all hover:scale-110 text-sm items-center md:flex hidden"
      >
        <Github size={24} />
        <span>Check out the source code!</span>
      </a>
      {/*
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          About Me
        </NavLink>
        */}
    </div>
  );
}
