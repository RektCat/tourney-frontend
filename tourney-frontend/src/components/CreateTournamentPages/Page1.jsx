import { useState } from "react";
import { usePage1Store } from "../../stores/CreateTournamentStore";
import ArrowDown from "../Icons/ArrowDown";
import { BasicInputWithLabel } from "../Inputs/BasicInput";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";

//TODO: onBlur functions & JSDoc
function Page1({ id }) {
  const setProps = usePage1Store((state) => state.setPage1Props);

  return (
    <FormWrapper id={id} onSubmit={setProps}>
      <FormHeader>Tournament Details</FormHeader>
      <div className="mx-1 flex flex-col items-center justify-center gap-4 md:mx-[10%]">
        <BasicInputWithLabel
          type="text"
          name="tournamentName"
          labeltext="Tournament name"
          required
        />
        <SwitchTab />
      </div>
    </FormWrapper>
  );
}

const SwitchTab = () => {
  const [tab, setTab] = useState(true);
  const [maxplayers, setMaxplayers] = useState(0);

  const handleTabChangeBool = (bool) => {
    return () => {
      setTab(bool);
    };
  };

  return (
    <div className="w-full border border-accent bg-gray-900 pb-4">
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
            className="h-full w-full py-1 text-sm md:text-base"
          >
            Round Robin
          </button>
          <input
            type="checkbox"
            name="roundrobin"
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
            name="singleelimination"
            className="appearance-none"
            checked={!tab}
            readOnly
            tabIndex={-1}
          />
        </div>
      </div>
      <div className="grid px-4">
        <div
          className={
            "col-start-1 col-end-[-1] row-start-1 row-end-[-1] flex flex-col gap-4 " +
            (tab ? "" : "hidden")
          }
        >
          <BasicInputWithLabel
            type="text"
            name="maxPlayers"
            labeltext="Max players (2 - 32)"
            pattern="[0-9]+"
            onBlur={(e) => {
              if (e.target.value === "") return;
              let int = parseInt(e.target.value);
              if (isNaN(int)) {
                e.target.value = 2;
              } else {
                if (int < 2) e.target.value = 2;
                else if (int > 32) e.target.value = 32;
              }
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
              if (e.target.value === "") return;
              let int = parseInt(e.target.value);
              if (isNaN(int)) {
                e.target.value = 1;
              } else {
                if (int < 2) e.target.value = 1;
                else if (int > 12) e.target.value = 12;
              }
            }}
            required
            disabled={!tab}
          />
        </div>
        <div
          className={
            "col-start-1 col-end-[-1] row-start-1 row-end-[-1] " +
            (tab ? "hidden" : "")
          }
        >
          <BasicInputWithLabel
            type="text"
            name="maxPlayers"
            labeltext="Max players (2 - 32)"
            pattern="[0-9]+"
            onBlur={(e) => {
              if (e.target.value === "") return;
              let int = parseInt(e.target.value);
              if (isNaN(int)) {
                e.target.value = 2;
              } else {
                if (int < 2) e.target.value = 2;
                else if (int > 32) e.target.value = 32;
              }

              let round = 1;
              let int2 = parseInt(e.target.value);
              while (true) {
                if (2 ** round >= int2) {
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
            <span className="flex py-2">
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

export default Page1;
