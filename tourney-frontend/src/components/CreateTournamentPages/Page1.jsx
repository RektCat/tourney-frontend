import { BasicInputWithLabel } from "../Inputs/BasicInput";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";

function Page1({ id }) {
  return (
    <FormWrapper id={id}>
      <FormHeader>Tournament Details</FormHeader>
      <div className="mx-[10%] flex flex-col items-center justify-center gap-4">
        <BasicInputWithLabel type="text" labeltext="Tournament name" />
        <BasicInputWithLabel type="text" labeltext="Tournament name" />
        <BasicInputWithLabel type="text" labeltext="Tournament name" />
        <BasicInputWithLabel type="text" labeltext="Tournament name" />
      </div>
    </FormWrapper>
  );
}

export default Page1;
