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
    <nav className="flex justify-between pt-2 px-2">
      <Link to="/" replace>
        <img src="/Tourney-Darts.png" className="w-[120px] md:w-[200px] transition-all" />
      </Link>
      <DropDown>
        <a href="#">
          <TextWithIcon logo={<BookOpenIcon fill="white" className="w-[2rem] h-[2rem]" />}>HowToPlay</TextWithIcon>
        </a>
        <a href="#">
          <TextWithIcon logo={<GithubLogo fill="white" className="w-[2rem] h-[2rem]" />}>Frontend</TextWithIcon>
        </a>
        <a href="#">
          <TextWithIcon logo={<GithubLogo fill="white" className="w-[2rem] h-[2rem]" />}>Backend</TextWithIcon>
        </a>
        <a href="#">
          <TextWithIcon logo={<DependencyIcon fill="white" className="w-[2rem] h-[2rem]" />}>Dependencies</TextWithIcon>
        </a>
      </DropDown>
    </nav>
  );
}

const DropDown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const animId = useRef(nextId());

  useEffect(() => {
    if (open) {
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
    }
  }, [open]);

  return (
    <ul className="relative isolate">
      <li className="text-right">
        <button
          className={
            "p-1 pb-0 rounded-t-[50%] border border-b-0 transition-colors duration-500 ease-[cubic-bezier(0.11, 0, 0.5, 0)] " +
            (open ? "bg-secondary border-accent" : "bg-transparent border-transparent")
          }
          onClick={() => setOpen((prev) => !prev)}
        >
          <InfoIcon fill="white" className="w-[2rem] h-[2rem]" />
        </button>
      </li>
      <li id={animId.current} className={"-z-10 absolute right-0 top-[36px] opacity-0 origin-top-right border border-accent"}>
        <ul className="bg-secondary p-2">
          {children.map((element, i) => (
            <li className="mb-4 last-of-type:mb-0" key={i}>
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
    <span className="flex gap-2 items-center">
      {logo}
      <span>{children}</span>
    </span>
  );
};

export default Header;
