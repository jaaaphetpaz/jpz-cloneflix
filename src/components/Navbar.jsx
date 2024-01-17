import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-700 text-4xl font-bold cursor-pointer">
          JPZCLONEFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <span className="inline-flex items-center justify-center text-white text-xl mr-2 font-bold w-10 h-10 bg-orange-500/80 rounded-full">
            {user?.email[0].toUpperCase()}
          </span>

          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-700 px-6 py-2 text-white rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-700 px-6 py-2 text-white rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
