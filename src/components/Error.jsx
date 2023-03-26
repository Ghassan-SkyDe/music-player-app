
const Error = ({title}) => (
  <div className="w-full flex justify-start items-center ">
    <h1 className="font-bold text-2xl text-red-600 mt-2">{title ? title : "Error... try again!"}</h1>
  </div>
);

export default Error;
