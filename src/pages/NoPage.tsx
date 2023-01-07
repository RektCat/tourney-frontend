import { Link } from "react-router-dom";
import Button from "../components/Inputs/Button/Button";

function NoPage() {
  return (
    <div>
      <section className="grid place-items-center gap-8 pt-8">
        <h1 className="skew-x-6 text-[clamp(3rem,_3rem_+_2vw,_6rem)] leading-tight text-accent">404</h1>
        <p className="text-2xl">No page found</p>
        <Link to="/" replace>
          <Button variant="accent" className="text-xl">
            Back to Home
          </Button>
        </Link>
      </section>
    </div>
  );
}
export default NoPage;
