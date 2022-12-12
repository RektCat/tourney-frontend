import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CreateTournament from "./pages/CreateTournament";
import Home from "./pages/Home";
import JoinGame from "./pages/JoinGame";
import ENDPOINTS from "./static/constants/ENDPOINTS";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={ENDPOINTS.createTournament}
            element={<CreateTournament />}
          />
          <Route path={ENDPOINTS.joinGame} element={<JoinGame />} />
          {/* <Route path={ENDPOINTS.createTournament} element={<CreateTournament />} />
          <Route path={ENDPOINTS.lobbyFinder} element={<LobbyFinder />} />
          <Route path={ENDPOINTS.browse} element={<Browser />} />
          <Route path={ENDPOINTS.join.dynamic} element={<JoinLobby />} />
          <Route element={<PlayerInfoProvider />}>
            <Route path={ENDPOINTS.game} element={<Game />} />
            <Route path={ENDPOINTS.lobby.dynamic} element={<Lobby />} />
            <Route path={ENDPOINTS.tournamentEnd} element={<TournamentEnd />} />
          </Route>
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
