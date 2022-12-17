import { Fragment } from "react";

/**
 *  Render the header for which tab is rendered
 */
const TabsHeader = ({ names, currentindex }) => {
  return (
    <div className="mb-4 overflow-x-auto whitespace-nowrap pb-1 text-center lg:flex lg:items-center lg:justify-around">
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
              className="scrollbar-thin inline-block h-1 w-8 bg-accent align-middle opacity-50 transition-opacity duration-300 data-[passed=true]:opacity-100 lg:block lg:min-w-[2rem] lg:flex-grow"
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
        "inline-block border border-accent transition-opacity duration-300 first-of-type:rounded-l-full last-of-type:rounded-r-full " +
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
