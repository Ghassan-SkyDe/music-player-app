const Error = ({ title }) => (
  <div className="flex w-full items-center justify-start ">
    <h1 className="mt-2 text-2xl font-bold text-red-600">
      {title ? title : "Error... try again!"}
    </h1>
  </div>
);

export default Error;
