import { PropsWithChildren } from "react";

/**
 * For FormTabs component to render between Tab and TabsHeader
 */
function Between(props: PropsWithChildren) {
  return <div {...props}>{props.children}</div>;
}

//Indentifies its type
Between.typeName = "Between";
export default Between;
