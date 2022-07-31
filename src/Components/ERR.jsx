import { Link } from "react-router-dom";

const ERR = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-center items-center h-screen">
          <Link to="/" className="text-2xl hover:text-blue-600 duration-300">
            There is nothing in here
          </Link>
        </div>
      </div>
    </>
  );
};

export default ERR;
