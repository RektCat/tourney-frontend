import { DefaultSport, Sport } from "../../models/SportModels";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import beerpongurl from "../../static/images/unsplash-beerpongcupsneon_small.jpg";
import dartsurl from "../../static/images/unsplash-darts_small.jpg";
import snookerurl from "../../static/images/unsplash-snooker_small.jpg";
import tablefootballurl from "../../static/images/unsplash-tablefootball_small.jpg";
import { useState, useRef } from "react";
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
      className={
        "relative flex overflow-hidden rounded-lg bg-gray-300 p-1 text-black outline outline-2 outline-transparent transition-all canhover:hover:outline-outline" +
        (selected ? " opacity-100" : " opacity-75")
      }
    >
      <input type="checkbox" className="absolute appearance-none" checked={selected} readOnly name={sport.name} />
      <span className="absolute top-[2px] left-[2px] z-50 inline-block rounded-br-xl bg-gray-300">
        <Tick className={"h-6 w-6 fill-accent transition-opacity" + (selected ? " opacity-100" : " opacity-0")} />
      </span>
      <span>
        <img
          src={imgurl.current}
          className="h-[80px] w-[80px] object-cover md:h-[100px] md:w-[100px]"
          alt="sport image"
        />
      </span>
      <p className="flex flex-col px-4 pb-1">
        <span className="text-lg font-bold md:text-xl">{sport.name}</span>
        <span className="inline-block">{sport.name}</span>
      </p>
    </button>
  );
};

export default Page2;
