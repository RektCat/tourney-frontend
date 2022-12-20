import React, { useRef, useState } from "react";
import Page1 from "../components/CreateTournamentPages/Page1";
import Page2 from "../components/CreateTournamentPages/Page2";
import Page3 from "../components/CreateTournamentPages/Page3";
import Between from "../components/FormTabs/Between";
import FormTabs from "../components/FormTabs/FormTabs";
import Tab from "../components/FormTabs/Tab";
import nextId from "../functions/generateElementId";

function CreateTournament() {
  const [currentindex, setCurrentindex] = useState(0);
  const formIds = useRef([nextId(), nextId(), nextId(), nextId()]);

  const handleNext = () => {
    if (currentindex >= 3) return;
    document.getElementById(formIds.current[currentindex] + "submit")?.click();
    const form = document.getElementById(formIds.current[currentindex]) as HTMLFormElement;
    if (!form?.checkValidity()) return;

    setCurrentindex((prev) => ++prev);
  };
  const handlePrevious = () => {
    if (currentindex <= 0) return;
    setCurrentindex((prev) => --prev);
  };

  return (
    <div className="mt-6 w-full px-2 md:mt-8">
      <h1 className="mb-1 text-center text-[1.875rem] font-bold leading-[0.8] md:text-[2.5rem] md:leading-[1]">
        Create a Tournament
      </h1>
      <h2 className="mb-6 text-center text-base italic md:text-xl">
        Customize everything to make it suit <mark className="bg-transparent text-outline">Your</mark> tournament!
      </h2>
      <FormTabs currentindex={currentindex}>
        {/* <Between>
          <div className="mb-5 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentindex === 0}
              className="group flex items-center gap-3 disabled:opacity-75"
            >
              <svg
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                className="translate-x-2 rotate-180 transition-transform group-disabled:group-hover:translate-x-2 canhover:group-hover:translate-x-0"
              >
                <path d="M438.6 278.6l-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .002 273.7.002 256S14.33 224 32 224h306.8L233.4 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.45 12.55 12.45 32.75-.05 45.25z"></path>
              </svg>
              <span>Back</span>
            </button>
            <button onClick={handleNext} className="group flex items-center gap-3">
              <span>{currentindex === 3 ? "Finish" : "Next"}</span>
              <svg
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                className="-translate-x-2 transition-transform canhover:group-hover:translate-x-0"
              >
                <path d="M438.6 278.6l-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .002 273.7.002 256S14.33 224 32 224h306.8L233.4 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.45 12.55 12.45 32.75-.05 45.25z"></path>
              </svg>
            </button>
          </div>
        </Between>
        <Tab tabtitle={"Tournament details"} first>
          <Page1 id={formIds.current[0]} />
        </Tab>
        <Tab tabtitle={"Select sports"}>
          <Page2 id={formIds.current[1]} />
        </Tab>
        <Tab tabtitle={"Rounds to sport"}>
          <Page3 id={formIds.current[2]} />
        </Tab> */}
        <Tab tabtitle={"Miscallenous"}>
          <div className="bg-warning pb-8">3</div>
        </Tab>
        szoveg
        <div>valami</div>
      </FormTabs>
    </div>
  );
}

export default CreateTournament;
