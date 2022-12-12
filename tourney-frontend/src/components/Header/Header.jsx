import { Link } from "react-router-dom";
import GithubLogo from "../Icons/GithubLogo";
import DependencyIcon from "../Icons/DependencyIcon";
import { useEffect, useRef, useState } from "react";
import InfoIcon from "../Icons/InfoIcon";
import anime from "animejs";
import nextId from "../../functions/generateElementId";
import toggleDisplay from "../../functions/toggleElementDisplay";
import BookOpenIcon from "../Icons/BookOpenIcon";

function Header() {
  return (
    <nav className="flex justify-between px-2 pt-2">
      <Link
        to="/"
        replace
        className="transition-color group border-b border-transparent hover:border-primary"
      >
        <img
          src="/Tourney-Darts.png"
          className="w-[120px] transition-all group-hover:-translate-y-1 md:w-[200px]"
        />
      </Link>
      <DropDown>
        <a href="#">
          <TextWithIcon
            logo={<BookOpenIcon fill="white" className="h-[2em] w-[2em]" />}
          >
            HowToPlay
          </TextWithIcon>
        </a>
        <a href="#">
          <TextWithIcon
            logo={<GithubLogo fill="white" className="h-[2em] w-[2em]" />}
          >
            Frontend
          </TextWithIcon>
        </a>
        <a href="#">
          <TextWithIcon
            logo={<GithubLogo fill="white" className="h-[2em] w-[2em]" />}
          >
            Backend
          </TextWithIcon>
        </a>
        <a href="#">
          <TextWithIcon
            logo={<DependencyIcon fill="white" className="h-[2em] w-[2em]" />}
          >
            Dependencies
          </TextWithIcon>
        </a>
      </DropDown>
    </nav>
  );
}

const DropDown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const animId = useRef(nextId());
  const elementRoot = useRef();

  const clickAway = (e) => {
    if (!elementRoot.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("click", clickAway);
      anime({
        targets: `#${animId.current}`,
        begin: function () {
          toggleDisplay(true, animId.current);
        },
        opacity: 1,
        scale: 1,
        duration: 300,
        easing: "easeInQuad",
      });
    } else {
      anime({
        targets: `#${animId.current}`,
        opacity: 0,
        scale: 0,
        duration: 300,
        easing: "easeInQuad",
        complete: function () {
          toggleDisplay(false, animId.current);
        },
      });
      window.removeEventListener("click", clickAway);
    }

    return () => {
      window.removeEventListener("click", clickAway);
    };
  }, [open]);

  return (
    <ul
      ref={elementRoot}
      className="relative isolate z-50 text-sm md:text-base"
    >
      <li className="text-right">
        <button
          className={
            "ease-[cubic-bezier(0.11, 0, 0.5, 0)] group rounded-t-[50%] border border-b-0 p-1 pb-0 transition-all duration-500 " +
            (open
              ? "border-accent bg-secondary"
              : "border-transparent bg-transparent")
          }
          onClick={() => setOpen((prev) => !prev)}
        >
          <InfoIcon
            fill="white"
            className="h-[2em] w-[2em] transition-transform group-active:scale-90"
          />
        </button>
      </li>
      <li
        id={animId.current}
        className={
          "absolute right-0 top-[32px] -z-10 origin-top-right border border-accent opacity-0 md:top-[36px]"
        }
      >
        <ul className="bg-secondary p-2">
          {children.map((element, i) => (
            <li
              className="mb-3 border-b border-transparent p-1 last-of-type:mb-0 hover:border-accent"
              key={i}
            >
              {element}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

const TextWithIcon = ({ logo, children }) => {
  return (
    <span className="flex items-center gap-2">
      {logo}
      <span>{children}</span>
    </span>
  );
};

export default Header;
