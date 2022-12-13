import anime from "animejs";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TournamentIcon from "../components/Icons/TournamentIcon";
import nextId from "../functions/generateElementId";
import ENDPOINTS from "../static/constants/ENDPOINTS";

function Home() {
  return (
    <div className="flex flex-col items-center gap-[5vh] px-2 pt-[10vh]">
      <h2>Home...</h2>
      <JoinGameButton />
      <CreateTournamentButton />
    </div>
  );
}

const LinkStyled = ({ to = "#", children }) => {
  const id = useRef(nextId());
  const ref = useRef();
  const animScale = useRef(0.7);
  const animations = useRef({});

  //TODO: animation smoothen transition (animation skips one animScale update)
  // With linear its better
  const handleAnimation = (e) => {
    if (e.type === "mouseenter") {
      animations.current.hover = anime({
        targets: `#${id.current}`,
        scale: [animScale.current, 5],
        duration: 500,
        easing: "linear",
        begin: function () {
          animations.current.leave?.pause();
        },
        update: function (anim) {
          animScale.current = 0.7 + (anim.progress / 100) * 4.3;
        },
      });
    } else {
      animations.current.leave = anime({
        targets: `#${id.current}`,
        scale: [animScale.current, 0.7],
        duration: 500,
        easing: "linear",
        begin: function () {
          animations.current.hover?.pause();
        },
        update: function (anim) {
          animScale.current = 5 - (anim.progress / 100) * 4.3;
        },
      });
    }
  };

  useEffect(() => {
    ref.current?.addEventListener("mouseenter", handleAnimation);
    ref.current?.addEventListener("mouseleave", handleAnimation);

    return () => {
      ref.current?.removeEventListener("mouseenter", handleAnimation);
      ref.current?.removeEventListener("mouseleave", handleAnimation);
    };
  }, []);

  return (
    <Link
      to={to}
      ref={ref}
      className="w-full max-w-[600px] transition-transform active:scale-95"
    >
      <div className="relative isolate grid place-items-center overflow-hidden bg-gradient-to-tr from-primary/70 to-accent p-2">
        <div
          id={id.current}
          className="absolute aspect-square h-full scale-75 bg-gradient-radial from-white/5 via-white/50 to-white/0"
        ></div>
        <div className="relative isolate grid w-full place-items-center rounded-tl-[20%] rounded-br-[20%] bg-gray-900 py-4 md:py-6">
          {children}
        </div>
      </div>
    </Link>
  );
};

const JoinGameButton = () => {
  return (
    <LinkStyled to={ENDPOINTS.joinGame}>
      {/* <svg
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="absolute left-0 top-[15%] aspect-square h-[65%] -translate-x-1/2 "
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
          className="stroke-outline"
        ></path>
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
          className="stroke-outline"
        ></path>
      </svg> */}
      <svg
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        baseProfile="tiny"
        version="1.2"
        viewBox="0 0 24 24"
        className="absolute left-0 -z-10 aspect-square h-[65%] fill-outline"
      >
        <path d="M12 14c2.764 0 5-2.238 5-5s-2.236-5-5-5-5 2.238-5 5 2.236 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm8 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4c.827 0 1.5.673 1.5 1.5S20.827 14 20 14s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0 4.59c-1.331 0-2.332.406-2.917.969C15.968 15.641 14.205 15 12 15c-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.975-2.908-.975-2.188 0-3.5 1.091-3.5 2.183 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.405 2 6.417 2 3.762 0 6.417-1 6.417-2l-.021-.255c.463.073.996.118 1.604.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 17.863c-1.309 0-2.068-.207-2.417-.354.239-.405 1.003-.92 2.417-.92 1.107 0 1.837.351 2.208.706l-.235.344c-.452.119-1.108.224-1.973.224zM12 19c-2.163 0-3.501-.312-4.184-.561C8.337 17.761 9.734 17 12 17c2.169 0 3.59.761 4.148 1.425-.755.27-2.162.575-4.148.575zm8-1.137c-.914 0-1.546-.103-1.973-.213a3.42 3.42 0 00-.248-.375c.356-.345 1.071-.685 2.221-.685 1.324 0 2.141.501 2.404.911-.39.163-1.205.362-2.404.362zM4 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-4c.827 0 1.5.673 1.5 1.5S4.827 14 4 14s-1.5-.673-1.5-1.5S3.173 11 4 11z"></path>
      </svg>
      <span className="ml-[10%] text-[calc(1rem_+_1vw)] backdrop-blur-md md:ml-0">
        Join a Tournament
      </span>
    </LinkStyled>
  );
};

const CreateTournamentButton = () => {
  return (
    <LinkStyled to={ENDPOINTS.createTournament}>
      <TournamentIcon className="absolute left-0 -z-10 aspect-square h-[65%] text-outline" />
      <span className="ml-[10%] text-[calc(1rem_+_1vw)] backdrop-blur-md md:ml-0">
        Create a Tournament
      </span>
    </LinkStyled>
  );
};

export default Home;
