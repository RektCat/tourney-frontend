import { useState } from "react";
import { usePage1Store } from "../../stores/CreateTournamentStore";
import ArrowDown from "../Icons/ArrowDown";
import { BasicInputWithLabel } from "../Inputs/BasicInput";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import { z } from "zod";

interface Page1Props {
  id?: string;
}
//TODO: onBlur functions & JSDoc
function Page1({ id }: Page1Props) {
  const setProps = usePage1Store((state) => state.setPage1Props);

  return (
    <FormWrapper id={id} onSubmit={setProps}>
      <FormHeader>Tournament Details</FormHeader>
      <div className="flex flex-col items-center justify-center gap-4 md:mx-[10%]">
        <div className="w-full px-1 md:px-0">
          <BasicInputWithLabel
            type="text"
            name="tournamentName"
            labeltext="Tournament name"
            required
            // schema={z.string().max(32, { message: "Max length is 32!" }).email({ message: "Invalid email address" })}
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
          <button onClick={handleTabChangeBool(true)} type="button" className="h-full w-full py-1 text-sm md:text-base">
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
            className="h-full w-full py-1 text-sm md:text-base"
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
          <BasicInputWithLabel
            type="text"
            name="maxPlayers"
            labeltext="Max players (2 - 32)"
            pattern="[0-9]+"
            onBlur={(e) => {
              handleOnBlur(e.target, 2, 32);
            }}
            required
            disabled={!tab}
          />
          <BasicInputWithLabel
            type="text"
            name="roundCount"
            labeltext="Round Count (1-12)"
            pattern="[0-9]+"
            onBlur={(e) => {
              handleOnBlur(e.target, 1, 12);
            }}
            required
            disabled={!tab}
          />
        </div>
        <div className={"col-start-1 col-end-[-1] row-start-1 row-end-[-1] " + (tab ? "hidden" : "")}>
          <BasicInputWithLabel
            type="text"
            name="maxPlayers"
            labeltext="Max players (2 - 32)"
            pattern="[0-9]+"
            onBlur={(e) => {
              handleOnBlur(e.target, 2, 32);

              let round = 1;
              let int = parseInt(e.target.value);
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
          />
          <p>
            <span className="flex pb-2 pt-3 pl-4">
              <ArrowDown className="h-4 w-4" />
              <ArrowDown className="h-4 w-4" />
            </span>
          </p>
          <BasicInputWithLabel
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

const handleOnBlur = (target: HTMLInputElement, min: number, max: number) => {
  if (target.value === "") return;
  let int = parseInt(target.value);
  if (isNaN(int)) {
    target.value = String(min);
  } else {
    if (int < min) target.value = String(min);
    else if (int > max) target.value = String(max);
  }
};

export default Page1;
