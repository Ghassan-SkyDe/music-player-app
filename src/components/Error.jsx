const Error = ({ title }) => (
  <div className="flex w-full items-center justify-start ">
    <p className="mt-2 text-2xl font-bold text-red-600">
      {title ? title : "Error... try again!"}
    </p>
  </div>
);

export default Error;
