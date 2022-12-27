import { DefaultSport, ScoringRule, Sport } from "../../models/SportModels";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import beerpongurl from "../../static/images/unsplash-beerpongcupsneon_small.jpg";
import dartsurl from "../../static/images/unsplash-darts_small.jpg";
import snookerurl from "../../static/images/unsplash-snooker_small.jpg";
import tablefootballurl from "../../static/images/unsplash-tablefootball_small.jpg";
import { useState, useRef, PropsWithChildren, HTMLProps, ReactNode } from "react";
import Tick from "../Icons/Tick";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import BASESPORTS from "../../static/constants/BaseSports";
import { PageProps } from "./PageProps";

function Page2({ id, isValid }: PageProps) {
  // const setProps = (e) => {
  //   const tmp = new FormData(e.target);
  //   console.log(tmp);
  // };

  return (
    <FormWrapper id={id} isValid={isValid}>
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
        <div>
          <CustomSportButton icon={<span>icon</span>}>Create custom sport</CustomSportButton>
          <CustomSportButton icon={<span>icon</span>}>Import custom sport</CustomSportButton>
        </div>
      </Section>
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
        <li className="rounded-tr-lg border-b border-current bg-black py-1 text-lg font-bold leading-[1] text-accent md:text-xl">
          {sport.name}
        </li>
        <SportInfoRow title="Count of rounds" value={sport.rounds} />
        <SportInfoRow title="Match rounds" value={sport.fixedRounds ? "Fixed" : "Best of"} />
        <SportInfoRow title="Starting score" value={sport.scoreStart} />
        <SportInfoRow title="Score to reach to win" value={sport.scoreGoal ? sport.scoreGoal : "-"} />
        <SportInfoRow title="Scores in a turn" value={ScoringRule[sport.scoringRule]} />
        {sport.scoresPerTurn ? <SportInfoRow title="Scores in a turn" value={sport.scoresPerTurn} /> : <></>}
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
    <li className="flex flex-wrap gap-x-2 border-b border-b-current pr-1 pt-1 pb-1 text-xs last-of-type:border-b-0 last-of-type:pb-0 md:text-base">
      <span className="inline-block flex-grow text-left font-bold">{title}:</span>
      <span className="inline-block">{value}</span>
    </li>
  );
};

interface CustomSportExtraProps {
  icon: JSX.Element;
}

type CustomSportProps = HTMLProps<HTMLButtonElement> & CustomSportExtraProps;

const CustomSportButton = ({ onClick, children, icon }: PropsWithChildren<CustomSportProps>) => {
  return (
    <button onClick={onClick} className="p-2">
      <span>{children}</span>
      <span>{icon}</span>
    </button>
  );
};

export default Page2;
