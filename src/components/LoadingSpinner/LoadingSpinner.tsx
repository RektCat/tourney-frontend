import anime from "animejs";
import { useEffect } from "react";

interface LoadingSpinnerProps {
  variant?: "normal" | "inverted";
}

function LoadingSpinner({ variant = "normal" }: LoadingSpinnerProps) {
  const colorScheme = variant === "inverted" ? " bg-outline border-white" : " bg-white border-outline";

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reducedMotion || reducedMotion.matches) {
      let reducedtl = anime.timeline({
        targets: ".loader-block",
        // duration: 500, // Can be inherited
        easing: "easeOutExpo", // Can be inherited
        loop: true, // Is not inherited
      });

      reducedtl
        .add(
          {
            targets: ".loader-top-left",
            translateY: 8,
            translateX: 8,
            duration: 600,
          },
          0
        )
        .add(
          {
            targets: ".loader-top-right",
            translateY: 8,
            translateX: -8,
            duration: 600,
          },
          0
        )
        .add(
          {
            targets: ".loader-bot-left",
            translateY: -8,
            translateX: 8,
            duration: 600,
          },
          0
        )
        .add(
          {
            targets: ".loader-bot-right",
            translateY: -8,
            translateX: -8,
            duration: 600,
          },
          0
        )
        .add({
          translateY: 0,
          translateX: 0,
          duration: 1000,
        });
    } else {
      let tl = anime.timeline({
        targets: ".loader-block",
        // duration: 500, // Can be inherited
        easing: "easeOutExpo", // Can be inherited
        loop: true, // Is not inherited
      });

      tl
        // move blocks one by one
        .add({
          targets: ".loader-top-left",
          translateY: 8,
          translateX: 8,
          duration: 300,
        })
        .add({
          targets: ".loader-top-right",
          translateY: 8,
          translateX: -8,
          duration: 300,
        })
        .add({
          targets: ".loader-bot-left",
          translateY: -8,
          translateX: 8,
          duration: 300,
        })
        .add({
          targets: ".loader-bot-right",
          translateY: -8,
          translateX: -8,
          duration: 300,
        })
        // scale one big block and delay
        .add({
          scale: 2,
          duration: 300,
        })
        // drop blocks
        .add({
          scale: 1,
          easing: "easeInCubic",
          duration: 200,
        })
        // move back blocks
        .add({
          translateY: 0,
          translateX: 0,
          duration: 350,
        });
    }
  }, []);

  return (
    <div className="grid place-items-center gap-4 text-2xl">
      <div className="flex justify-center gap-4">
        <span
          className={
            "loader-block loader-top-left inline-block h-[1em] w-[1em] border-l-4 border-t-4 border-outline bg-white" +
            colorScheme
          }
        ></span>
        <span
          className={
            "loader-block loader-top-right inline-block h-[1em] w-[1em] rounded-tr-lg border-r-4 border-t-4 border-outline bg-white" +
            colorScheme
          }
        ></span>
      </div>
      <div className="flex justify-center gap-4">
        <span
          className={
            "loader-block loader-bot-left loader-left inline-block h-[1em] w-[1em] rounded-bl-lg border-l-4 border-b-4 border-outline bg-white" +
            colorScheme
          }
        ></span>
        <span
          className={
            "loader-block loader-bot-right inline-block h-[1em] w-[1em] border-r-4 border-b-4 border-outline bg-white" +
            colorScheme
          }
        ></span>
      </div>
    </div>
  );
}
export default LoadingSpinner;
