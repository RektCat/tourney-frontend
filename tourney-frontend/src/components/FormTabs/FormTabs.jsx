import { useRef, cloneElement, isValidElement } from "react";
import TabsHeader from "./TabsHeader";

function FormTabs({ children, currentindex }) {
  const ref = useRef();
  const tabcounter = useRef(-1);

  const between = [];

  tabcounter.current = -1;
  const childrenShow = children.map((child, i) => {
    if (isValidElement(child)) {
      if (child.type.name === "Tab") {
        tabcounter.current += 1;
        if (tabcounter.current === currentindex) {
          return cloneElement(child, { key: i, ...child.props, show: true });
        }
        return cloneElement(child, { key: i, ...child.props, show: false });
      }
      if (child.type.name === "Between") {
        between.push(child);
        return null;
      }
    }
    return child;
  });

  return (
    <section ref={ref} className="grid grid-cols-[100%] justify-center pb-4">
      <TabsHeader
        names={childrenShow
          .filter((element) => element !== null)
          .map((element) => element.props?.tabtitle)}
        currentindex={currentindex}
      />
      <div>{between}</div>
      <div className="grid">{childrenShow}</div>
    </section>
  );
}

export default FormTabs;
