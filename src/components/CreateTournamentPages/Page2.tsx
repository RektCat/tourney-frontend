import { DefaultSport, ScoringRule, Sport } from "../../models/SportModels";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import beerpongurl from "../../static/images/unsplash-beerpongcupsneon_small.jpg";
import dartsurl from "../../static/images/unsplash-darts_small.jpg";
import snookerurl from "../../static/images/unsplash-snooker_small.jpg";
import tablefootballurl from "../../static/images/unsplash-tablefootball_small.jpg";
import { useState, useRef, PropsWithChildren, HTMLProps } from "react";
import Tick from "../Icons/Tick";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import BASESPORTS from "../../static/constants/BaseSports";
import { PageProps } from "./PageProps";
import Button from "../Inputs/Button/Button";
import UploadIcon from "../Icons/UploadIcon";
import AddIcon from "../Icons/AddIcon";
import Modal from "../Modal/Modal";
import CancelButton from "../Inputs/CancelButton/CancelButton";
import InputWithLabel from "../Inputs/TextInputs/InputWithLabel";
import { z } from "zod";
import Form from "../Forms/Form";
import RadioButton from "../Inputs/RadioButton/RadioButton";
import Checkbox from "../Inputs/Checkbox/Checkbox";
import BasicButton from "../Inputs/BasicButton/BasicButton";

function Page2({ id, isValid }: PageProps) {
  const [customSportModal, setCustomSportModal] = useState<boolean>(false);
  const [endingScore, setEndingScore] = useState<boolean>(false);
  const [commonInputs, setCommonInputs] = useState<Array<number>>([]);
  const [customSports, setCustomSports] = useState<Array<Sport>>([]);

  const closeCustomSportModal = () => {
    setCustomSportModal(false);
    setEndingScore(false);
  };
  const openCustomSportModal = () => {
    setCustomSportModal(true);
  };
  // const setProps = (e) => {
  //   const tmp = new FormData(e.target);
  //   console.log(tmp);
  // };

  return (
    <FormWrapper id={id} isValid={isValid} onValidated={(e: HTMLFormElement) => console.log(new FormData(e))}>
      <FormHeader>Select sports or create your own</FormHeader>
      <Section>
        <SectionHeader>Base sports</SectionHeader>
        <div className="flex flex-wrap gap-4">
          {Object.keys(BASESPORTS).map((sportKey, i) => (
            <BaseSportCard key={i} sport={BASESPORTS[sportKey]} />
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader>Custom sports</SectionHeader>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <CustomSportButton onClick={openCustomSportModal} icon={<AddIcon className="h-5 w-5" />}>
            Create custom sport
          </CustomSportButton>
          <CustomSportButton icon={<UploadIcon className="h-5 w-5" />}>Import custom sport</CustomSportButton>
        </div>
      </Section>
      <Modal open={customSportModal}>
        <div className="relative p-2">
          <h3 className="px-6 pb-2 text-center text-lg font-bold leading-tight md:text-xl">Create your custom sport</h3>
          <span className="absolute right-2 top-2 block">
            <CancelButton type="button" onClick={closeCustomSportModal} className="block" />
          </span>
          <Form className="flex flex-col gap-2 py-2">
            <InputWithLabel
              type="text"
              name="name"
              labeltext="Name of the sport"
              required
              schema={z.string().max(32, { message: "Max length is 32!" })}
            />
            <InputWithLabel
              type="text"
              name="rounds"
              inputMode="numeric"
              labeltext="Number of rounds"
              required
              schema={z.coerce
                .number({ invalid_type_error: "Input must be a number!", required_error: "Required" })
                .min(1, { message: "Minimum is 1" })
                .max(32, { message: "Max length is 32!" })}
            />
            <fieldset className="flex flex-row gap-2">
              <RadioButton
                label="Fixed Rounds"
                fullWidth
                id="fixedRoundsInput"
                name="fixedRounds"
                value="true"
                required
              />
              <RadioButton
                label="Best of Rounds"
                fullWidth
                id="bestOfRoundsInput"
                name="fixedRounds"
                value="false"
                required
              />
            </fieldset>
            <InputWithLabel
              type="text"
              name="scoreStart"
              inputMode="numeric"
              labeltext="Starting score"
              required
              schema={z.coerce.number({ invalid_type_error: "Input must be a number!", required_error: "Required" })}
            />
            <div className="flex flex-col gap-2 md:flex-row">
              <Checkbox
                className="md:basis-1/2 md:self-end"
                label="Has ending score?"
                onChange={(e: any) => {
                  setEndingScore(e.target.checked);
                }}
              />
              <InputWithLabel
                type="text"
                name="scoreGoal"
                inputMode="numeric"
                labeltext="Ending score"
                required
                disabled={!endingScore}
                schema={z.coerce.number({ invalid_type_error: "Input must be a number!", required_error: "Required" })}
              />
            </div>
            <section className="rounded-sm outline outline-2 outline-offset-4 outline-black/80">
              <p className="pb-2 text-center text-xs md:text-sm">
                You can generate scores, and buttons will be generated for each one for easier access!
              </p>
              <div className="flex flex-row gap-2">
                {/* TODO: inputs number -> check if number -> into array -> show components */}
                <InputWithLabel
                  type="text"
                  name="commonInput"
                  inputMode="numeric"
                  labeltext="Common inputs"
                  schema={z.coerce.number({
                    invalid_type_error: "Input must be a number!",
                    required_error: "Required",
                  })}
                />
                <BasicButton type="button" className="self-end">
                  Add
                </BasicButton>
              </div>
              {commonInputs.length !== 0 && commonInputs.map((num, i) => <span key={i}>{num}</span>)}
            </section>
          </Form>
        </div>
      </Modal>
    </FormWrapper>
  );
}

const switchImageUrl = (defaultSport: DefaultSport | undefined) => {
  switch (defaultSport) {
    case DefaultSport.Beerpong:
      return beerpongurl;
    case DefaultSport.Darts:
      return dartsurl;
    case DefaultSport.Snooker:
      return snookerurl;
    case DefaultSport.Tablefootball:
      return tablefootballurl;
  }
};

interface BaseSportCardProps {
  sport: Sport;
}

const BaseSportCard = ({ sport }: BaseSportCardProps) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((state) => !state);
  };

  const imgurl = useRef(switchImageUrl(sport.defaultSport));
  return (
    <button
      type="button"
      onClick={handleClick}
      title="Select sport"
      className={
        "relative flex flex-grow overflow-hidden rounded-lg bg-gray-300 p-1 text-black outline outline-2 outline-transparent transition-all canhover:hover:outline-outline" +
        (selected ? " opacity-100" : " opacity-60 canhover:opacity-75")
      }
    >
      <input type="checkbox" className="absolute appearance-none" checked={selected} readOnly name={sport.name} />
      <span
        className={
          "absolute top-0 left-0 z-50 inline-block rounded-br-xl bg-accent transition-opacity" +
          (selected ? " opacity-100" : " opacity-0")
        }
      >
        <Tick className={"h-6 w-6 fill-gray-300"} />
      </span>
      <img
        src={imgurl.current}
        className="min-h-[80px] w-[80px] rounded-l-lg object-cover md:min-h-[100px] md:w-[125px]"
        alt="sport image"
      />
      <ul className="flex flex-grow flex-col pl-2">
        <li className="rounded-tr-lg border-b border-current bg-black py-1 text-lg font-bold leading-[1] text-white ">
          {sport.name}
        </li>
        <SportInfoRow title="Count of rounds" value={sport.rounds} />
        <SportInfoRow title="Match rounds" value={sport.fixedRounds ? "Fixed" : "Best of"} />
        <SportInfoRow title="Starting score" value={sport.scoreStart} />
        <SportInfoRow title="Score to reach to win" value={sport.scoreGoal ? sport.scoreGoal : "-"} />
        <SportInfoRow title="Scores in a turn" value={ScoringRule[sport.scoringRule]} />
        {sport.scoresPerTurn ? <SportInfoRow title="Scores amount per turn" value={sport.scoresPerTurn} /> : <></>}
      </ul>
    </button>
  );
};

interface SportInfoRowProps {
  title: string;
  value: string | number;
}

const SportInfoRow = ({ title, value }: SportInfoRowProps) => {
  return (
    <li className="flex flex-wrap gap-x-2 border-b border-b-current pr-1 pt-1 pb-1 text-xs last-of-type:border-b-0 last-of-type:pb-0 md:text-sm">
      <span className="inline-block flex-grow text-left font-bold">{title}:</span>
      <span className="inline-block font-semibold">{value}</span>
    </li>
  );
};

interface CustomSportProps extends HTMLProps<HTMLButtonElement> {
  icon: JSX.Element;
}

const CustomSportButton = ({ onClick, children, icon }: PropsWithChildren<CustomSportProps>) => {
  return (
    <Button onClick={onClick} variant="accent" type="button" innerClass="py-2 px-3 bg-black/80 flex items-center">
      <span className="inline-block pr-2 text-lg">{children}</span>
      <span className="inline-block border-l border-l-accent/50 pl-2">{icon}</span>
    </Button>
  );
};

export default Page2;
