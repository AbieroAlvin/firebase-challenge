import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Signup = () => {
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // validate name
    if (formData.name.trim() === "") {
      newErrors.name = "Your name is required !";
      isValid = false;
    }

    // validate email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // validate password
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    // validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      if (validateForm()) {
        toast.success("Logged in successfully");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="w-full h-screen items-center flex justiy-center">
      <img
        className="sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed full px-8 py-24 z-50">
        <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white px-8">
          <div className="mx-auto py-16 max-w-[320px]">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <div className="flex flex-col gap-1">
                <label>Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="outline-none py-1 px-2 rounded-md focus:outline-green-400 text-black"
                />
                {errors.firstName && (
                  <span className="text-sm text-center text-red-500 font-semibold">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none py-1 px-2 rounded-md focus:outline-green-400 text-black"
                />
                {errors.email && (
                  <span className="text-sm text-center text-red-500 font-semibold">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="outline-none py-1 px-2 rounded-md focus:outline-green-400 text-black"
                />
                {errors.password && (
                  <span className="text-sm text-center text-red-500 font-semibold">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="outline-none py-1 px-2 rounded-md focus:outline-green-400 text-black"
                />
                {errors.confirmPassword && (
                  <span className="text-sm text-center text-red-500 font-semibold">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 font-semibold rounded-md"
              >
                Submit
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
