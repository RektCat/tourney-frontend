import { BASESPORTS, DEFAULTSPORT } from "../../static/constants/SportEnums";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import beerpongurl from "../../static/images/unsplash-beerpongcupsneon_small.jpg";
import dartsurl from "../../static/images/unsplash-darts_small.jpg";
//TODO: replace image with snooker instead of billiard
import snookerurl from "../../static/images/unsplash-billiard_small.jpg";
import tablefootballurl from "../../static/images/unsplash-tablefootball_small.jpg";
import { useRef } from "react";

function Page2({ id }) {
  return (
    <FormWrapper id={id}>
      <FormHeader>Select sports</FormHeader>
      <div className="flex flex-wrap gap-4">
        {Object.keys(BASESPORTS).map((sportKey, i) => (
          <BaseSportCard key={i} sport={BASESPORTS[sportKey]} />
        ))}
      </div>
    </FormWrapper>
  );
}

const switchImageUrl = (defaultSport) => {
  switch (defaultSport) {
    case DEFAULTSPORT.beerpong:
      return beerpongurl;
    case DEFAULTSPORT.darts:
      return dartsurl;
    case DEFAULTSPORT.snooker:
      return snookerurl;
    case DEFAULTSPORT.tablefootball:
      return tablefootballurl;
  }
};

const BaseSportCard = ({ sport }) => {
  const imgurl = useRef(switchImageUrl(sport.defaultSport));
  return (
    <div>
      <button className="flex overflow-hidden rounded-lg border-2 border-gray-300 bg-gray-300 text-black drop-shadow-lg">
        {/* //TODO: */}
        {/* <input type="checkbox" name={sport.name} /> */}
        <span>
          <img
            src={imgurl.current}
            className="h-auto w-[80px] object-contain md:w-[100px]"
            alt="sport image"
          />
        </span>
        <span className="inline-block px-4 py-1">sport</span>
      </button>
    </div>
  );
};

export default Page2;
