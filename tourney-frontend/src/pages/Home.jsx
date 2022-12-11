import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center gap-[5vh] px-2 pt-[10vh]">
      <h2>Home</h2>
      <Link to="#" className="w-full max-w-[650px]">
        <div className="bg-gradient-to-tr from-primary/70 to-accent p-1">
          <div className=" bg-gray-900">Csatlakozás játékhoz</div>
        </div>
      </Link>
      <Link to="#" className="w-full max-w-[650px]">
        <div className="bg-gradient-to-tr from-primary/70 to-accent p-1">
          <div className=" bg-gray-900">Bajnokság létrehozása</div>
        </div>
      </Link>
      <footer className="absolute bottom-0 w-full border-t border-t-white bg-white/10 py-[2px] text-center text-xs">
        Created by <b>Norbert Tanács</b> for thesis
      </footer>
    </div>
  );
}

export default Home;
