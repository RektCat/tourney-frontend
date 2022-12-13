import anime from "animejs";
import { useEffect, useRef } from "react";
import nextId from "../../functions/generateElementId";
import toggleDisplay from "../../functions/toggleElementDisplay";

/**
 * Wrapper component for tab pages
 * @param show - Boolean to show or not
 * @param tabtitle - TabsHeader to show this title
 * @param first - Which tab to rendeer first
 */
function Tab({ children, show, tabtitle, first = false }) {
  const id = useRef(nextId());
  const ref = useRef();

  useEffect(() => {
    if (show) {
      anime({
        targets: ref.current,
        opacity: 1,
        begin: function () {
          toggleDisplay(true, id.current);
        },
        duration: 300,
        easing: "easeInQuad",
        delay: 225,
      });
    } else {
      anime({
        targets: ref.current,
        opacity: 0,
        duration: 300,
        easing: "easeInQuad",
        complete: function () {
          toggleDisplay(false, id.current);
        },
      });
    }
  }, [show]);

  return (
    <div
      ref={ref}
      id={id.current}
      data-title={tabtitle}
      className={
        "col-start-1 col-end-[-1] row-start-1 row-end-[-1]" +
        (first ? "" : "hidden opacity-0")
      }
    >
      {children}
    </div>
  );
}

//Indentifies its type
Tab.typeName = "Tab";
export default Tab;
