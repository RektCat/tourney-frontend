import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { z } from "zod";
import Form from "../components/Forms/Form";
import BasicInputWithLabel from "../components/Inputs/BasicInput";
import { ValidateButton } from "./FormEventTester";

function SandboxPage() {
  return (
    <div>
      <h1>Sandbox</h1>
      <LoadingSpinner variant="inverted" />
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
    </div>
  );
}
export default SandboxPage;
