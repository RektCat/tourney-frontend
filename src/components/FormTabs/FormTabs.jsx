import { useRef, cloneElement, isValidElement } from "react";
import TabsHeader from "./TabsHeader";

/**
 * Renders tabs (does not have to be a form)
 * Switches between Tab children
 * TabsHeader shows which tab is shown
 */
function FormTabs({ children, currentindex }) {
  const ref = useRef();
  const tabcounter = useRef(-1);

  /**
   * Only add props to Tab children & skip over Between components
   * Can only count on top level children
   *
   * between array: Between components to render
   * tabcounter ref: render the Tab which is the currendindex
   */
  const between = [];
  tabcounter.current = -1;
  const childrenShow = children.map((child, i) => {
    if (isValidElement(child)) {
      if (child.type.typeName === "Tab") {
        tabcounter.current += 1;
        if (tabcounter.current === currentindex) {
          return cloneElement(child, { key: i, ...child.props, show: true });
        }
        return cloneElement(child, { key: i, ...child.props, show: false });
      }
      if (child.type.typeName === "Between") {
        between.push(child);
        return null;
      }
    }
    return child;
  });

  /**
   * TabsHeader filter: only add headers for Tabs
   */
  return (
    <section ref={ref} className="grid grid-cols-[100%] justify-center pb-4">
      <TabsHeader
        names={childrenShow
          .filter(
            (element) => element !== null && element.type.typeName === "Tab"
          )
          .map((element) => element.props?.tabtitle)}
        currentindex={currentindex}
      />
      <div>{between}</div>
      <div className="grid">{childrenShow}</div>
    </section>
  );
}

export default FormTabs;
