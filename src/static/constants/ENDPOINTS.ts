interface Endpoints {
  [key: string]: string;
}

const ENDPOINTS: Endpoints = {
  createTournament: "createtournament",
  joinGame: "joingame",
  enterName: "enteryourname",
};

export default ENDPOINTS;
