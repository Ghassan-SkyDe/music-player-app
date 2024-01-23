import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="flex w-full flex-col items-center justify-center">
    <img src={loader} alt="loader" className="h-32 w-32 object-contain" />
    <p className="mt-2 text-2xl font-bold text-white">
      {title || "loading..."}
    </p>
  </div>
);

export default Loader;
