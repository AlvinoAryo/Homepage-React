import { Link } from "react-router-dom";

const ERR = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          to="/"
          className="text-2xl hover:text-red-500 hover: duration-300"
        >
          There is nothing in here
        </Link>
      </div>
    </>
  );
};

export default ERR;
