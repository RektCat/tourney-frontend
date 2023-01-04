import { useState } from "react";
import { usePage1Store } from "../../stores/CreateTournamentStore";
import ArrowDown from "../Icons/ArrowDown";
import { InputWithLabel } from "../Inputs/TextInputs/InputWithLabel";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import { z } from "zod";
import { PageProps } from "./PageProps";

//TODO: onBlur functions & JSDoc
function Page1({ id, isValid }: PageProps) {
  const setProps = usePage1Store((state) => state.setPage1Props);

  return (
    <FormWrapper id={id} onValidated={setProps} isValid={isValid}>
      <FormHeader>Tournament Details</FormHeader>
      <div className="flex flex-col items-center justify-center gap-4 md:mx-[10%]">
        <div className="w-full px-1 md:px-0">
          <InputWithLabel
            type="text"
            name="tournamentName"
            labeltext="Tournament name"
            required
            schema={z.string().min(3, { message: "Minimum length is 3!" }).max(64, { message: "Max length is 64!" })}
          />
        </div>
        <SwitchTab />
      </div>
    </FormWrapper>
  );
}

const SwitchTab = () => {
  const [tab, setTab] = useState<boolean>(true);
  const [maxplayers, setMaxplayers] = useState<number>(0);

  const handleTabChangeBool = (bool: boolean) => {
    return () => {
      setTab(bool);
    };
  };

  return (
    <div className="w-full border-y border-accent bg-gray-900 pb-4 md:border-x">
      <div className="mb-4 flex w-full">
        <div
          className={
            "flex-1 border-r border-b border-r-accent border-b-transparent " +
            (tab ? "" : "border-b-accent bg-secondary")
          }
        >
          <button
            onClick={handleTabChangeBool(true)}
            type="button"
            className="h-full w-full py-1 text-sm outline outline-2 outline-transparent focus-visible:outline-outline md:text-base"
          >
            Round Robin
          </button>
          <input
            type="checkbox"
            name="tournamentType"
            value="roundRobin"
            className="appearance-none"
            checked={tab}
            tabIndex={-1}
            readOnly
          />
        </div>
        <div
          className={
            "flex-1 border-l border-b border-l-accent border-b-transparent " +
            (tab ? "border-b-accent bg-secondary" : "")
          }
        >
          <button
            onClick={handleTabChangeBool(false)}
            type="button"
            className="h-full w-full py-1 text-sm outline outline-2 outline-transparent focus-visible:outline-outline md:text-base"
          >
            Single Elimination
          </button>
          <input
            type="checkbox"
            name="tournamentType"
            value="singleElimination"
            className="appearance-none"
            checked={!tab}
            readOnly
            tabIndex={-1}
          />
        </div>
      </div>
      <div className="grid px-4">
        <div
          className={"col-start-1 col-end-[-1] row-start-1 row-end-[-1] flex flex-col gap-4 " + (tab ? "" : "hidden")}
        >
          <InputWithLabel
            type="text"
            name="maxPlayers"
            labeltext="Max players (2 - 32)"
            inputMode="numeric"
            required
            disabled={!tab}
            schema={z.coerce
              .number({ invalid_type_error: "Input must be a number!", required_error: "Required" })
              .int({ message: "Must be a whole number! " })
              .gte(2, { message: "Minimum is 2!" })
              .lte(32, { message: "Maximum is 32!" })}
          />
          <InputWithLabel
            type="text"
            name="roundCount"
            labeltext="Round Count (1-12)"
            inputMode="numeric"
            schema={z.coerce
              .number({ invalid_type_error: "Input must be a number!", required_error: "Required" })
              .int({ message: "Must be a whole number! " })
              .gte(1, { message: "Minimum is 1!" })
              .lte(12, { message: "Maximum is 12!" })}
            required
            disabled={!tab}
          />
        </div>
        <div className={"col-start-1 col-end-[-1] row-start-1 row-end-[-1] " + (tab ? "hidden" : "")}>
          <InputWithLabel
            type="text"
            name="maxPlayers"
            labeltext="Max players (2 - 32)"
            inputMode="numeric"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              if (isNaN(parseInt(target.value))) return;
              let round = 1;
              let int = parseInt(target.value);
              while (true) {
                if (2 ** round >= int) {
                  setMaxplayers(round);
                  break;
                }
                round++;
              }
            }}
            required
            disabled={tab}
            schema={z.coerce
              .number({ invalid_type_error: "Input must be a number!", required_error: "Required" })
              .int({ message: "Must be a whole number! " })
              .gte(2, { message: "Minimum is 2!" })
              .lte(32, { message: "Maximum is 32!" })}
          />
          <p>
            <span className="flex pb-2 pt-3 pl-4">
              <ArrowDown className="h-4 w-4" />
              <ArrowDown className="h-4 w-4" />
            </span>
          </p>
          <InputWithLabel
            type="text"
            name="roundCount"
            labeltext="Number of rounds: "
            required
            disabled={tab}
            value={maxplayers}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
