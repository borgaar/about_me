export function AboutMe() {
  return (
    <div className="p-10 rounded-2xl gap-5 flex flex-col items-center text-primary-text">
      <span className="h-1 text-4xl mb-5">Borgar Barland</span>
      {/* <span className="text-xl">———</span> */}
      <span className="text-2xl h-2 mt-8 mb-5">Who am I?</span>
      <span>
        I am a software engineer from Norway! I have worked on multiple projects
        spanning many domains.
      </span>
      <span>
        I mostly tinkering with infrastructure, Linux, some low-level
        programming and backend development.
      </span>
      <span className="text-2xl h-2 mt-6 mb-5">Find me at ...</span>
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
          href="https://www.reddit.com/r/LinkedInLunatics/top/?screen_view_count=3&ext-referrer=DIRECT&t=year"
        >
          neither should you
        </a>
        , but I try to keep my profile updated.
      </span>
      <span className="mt-6 text-xs">
        <a className="underline" href="https://storage.borgar.dev/resume.pdf">
          Wow, what's this?!
        </a>
      </span>
    </div>
  );
}
