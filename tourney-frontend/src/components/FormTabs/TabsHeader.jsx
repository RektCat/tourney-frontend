import { Fragment, useEffect, useState } from "react";

const TabsHeader = ({ names, currentindex }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, true);

    return () => {
      window.removeEventListener("resize", handleResize, true);
    };
  }, []);

  if (isMobile)
    return (
      <div className="mb-4 overflow-x-auto whitespace-nowrap pb-1 text-center">
        {names.map((name, i) => {
          if (names.length - 1 === i) {
            return (
              <TabHeaderMarker
                key={i}
                index={i}
                name={name}
                currentindex={currentindex}
              />
            );
          }
          return (
            <Fragment key={i}>
              <TabHeaderMarker
                name={name}
                index={i}
                currentindex={currentindex}
              />
              <span
                className="inline-block h-1 w-8 bg-accent align-middle opacity-50 transition-opacity duration-300 data-[passed=true]:opacity-100"
                data-passed={currentindex > i}
              ></span>
            </Fragment>
          );
        })}
      </div>
    );
  return (
    <div className="mb-4 flex items-center justify-around overflow-x-auto whitespace-nowrap pb-1">
      {names.map((name, i) => {
        if (names.length - 1 === i) {
          return (
            <TabHeaderMarker
              key={i}
              name={name}
              index={i}
              currentindex={currentindex}
            />
          );
        }
        return (
          <Fragment key={i}>
            <TabHeaderMarker
              name={name}
              index={i}
              currentindex={currentindex}
            />
            <span
              className="block h-1 min-w-[2rem] flex-grow bg-accent opacity-50 transition-opacity duration-300 data-[passed=true]:opacity-100"
              data-passed={currentindex > i}
            ></span>
          </Fragment>
        );
      })}
    </div>
  );
};

const TabHeaderMarker = ({ index, name, currentindex }) => {
  return (
    <span
      className={
        "inline-block border border-accent transition-opacity duration-300 " +
        (currentindex >= index ? "opacity-100" : "opacity-50")
      }
    >
      <span className="inline-block border-r border-accent px-2 py-1">
        {index + 1}.
      </span>
      <span className="inline-block px-2 py-1">{name ? name : "No title"}</span>
    </span>
  );
};
export default TabsHeader;
