import { z } from "zod";
import { ValidateButton } from "../../test/FormEventTester";
import Form from "../Forms/Form";
import BasicInputWithLabel from "../Inputs/BasicInput";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";

function Page3({ id }) {
  return (
    <>
      <FormWrapper id={id}>
        <FormHeader>Pair sports and scores</FormHeader>
      </FormWrapper>
      <Form id="targetmedaddy" receiver={"receivememommy"} validation="synthetic">
        <BasicInputWithLabel
          type="text"
          name="valami"
          labeltext="Valkami name"
          required
          schema={z.string().min(3, { message: "Minimum length is 3!" }).max(64, { message: "Max length is 64!" })}
        />
        <input type="text" name="asdas" id="asdd" />
        <input type="text" name="asda" id="asddd" />
        <ValidateButton id="receivememommy" targetid={"targetmedaddy"} />
      </Form>
    </>
  );
}

export default Page3;
