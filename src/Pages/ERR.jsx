import { Link } from "react-router-dom";

const ERR = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex justify-center items-center text-2xl">
          <h1>There is nothing in here</h1>
        </div>
        <Link
          to="/"
          className="flex justify-center hover:text-blue-600 duration-300"
        >
          Go back.
        </Link>
      </div>
    </>
  );
};

export default ERR;
