import { useAnimate } from "../hooks";

export function AboutMe() {
  const [isVisible] = useAnimate();

  return (
    <div
      className={`p-10 gap-5 max-w-lg flex flex-col items-center text-primary-text ${isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"} transition-all duration-500`}
    >
      {/* <span className="text-xl">———</span> */}
      <span className="text-2xl font-semibold italic h-2 mt-8 mb-5">
        Who am I?
      </span>
      <span>
        I'm Borgar, a software engineer from Norway! I have worked on multiple
        projects spanning many domains.
      </span>
      <span>
        I mostly tinker with infrastructure, Linux, and some low-level
        programming in my sparetime. Workwise, most of my experience is with
        backend development and DevOps, but I'll take on most challenges.
      </span>
      <span className="text-2xl h-2 mt-6 font-semibold italic mb-5">
        Find me at ...
      </span>
      <span>
        <a
          target="_blank"
          href="https://github.com/borgaar"
          className="underline"
        >
          Github
        </a>
        ! A barren wasteland of the many side-projects I never finished...
      </span>
      <span>
        <a
          target="_blank"
          href="https://linkedin.com/in/borgar-barland"
          className="underline"
        >
          LinkedIn
        </a>
        ! I am not active, and{" "}
        <a
          className="underline"
          target="_blank"
          href="https://www.reddit.com/r/LinkedInLunatics/top/?t=month"
        >
          neither should you
        </a>
        , but I try to keep my profile updated.
      </span>
      <span className="mt-6 text-xs">
        <a className="underline" href="https://storage.borgar.dev/resume.pdf">
          woah, what's this...?
        </a>
      </span>
    </div>
  );
}
