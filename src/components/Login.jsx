import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { signUp } = UserAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(formData.email, formData.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="w-full h-screen">
      <img
        className="sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white px-12">
          <div className="mx-auto py-16 max-w-[320px]">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <div className="flex flex-col gap-1">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none py-1 px-2 rounded-md focus:outline-green-400 text-black"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="outline-none py-1 px-2 rounded-md focus:outline-green-400 text-black"
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 font-semibold rounded-md my-6"
              >
                Sign In
              </button>
              <div className="flex w-full justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to Netflix?</span>{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
