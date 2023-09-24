import React, { useState } from "react";
import "./Login.css"
import logo from "./logo.png";
import image1 from "./image1.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
const Signup = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const initialValues = { email: "", password: "", college: "", name: "" };
  const [signup, setSignup] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`https://drab-jade-lamb-wig.cyclic.cloud/api/signup`, signup).then(res => res.data).catch(err => console.log(err));
      const { message, ...rest } = data;
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: rest });
        Cookie.set("user", JSON.stringify(rest));
        Navigate("/");
      })
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <div className="Login-body">
      <img className="logo" src={logo} alt="" />


      <section className="h-screen">
        <div className="px-6 h-full text-white">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src={image1}
                className="w-full"
                alt="image1"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h3 className="text-2xl font-bold text-center pb-4">Login to your account</h3>
            <h3 className="text-sm font-bold text-center pb-4">You will get all updates and notifications to the mail you enter</h3>
              <form onSubmit={handleSubmit}>
                <div class="relative z-0 mb-6 w-full group">
                  <input type="email" onChange={handleChange} name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-red-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-slate-100 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input type="password" onChange={handleChange} name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-red-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-slate-100 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 mb-6 w-full group">
                    <input type="text" onChange={handleChange} name="college" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-red-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-slate-100 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">College</label>
                  </div>
                  <div class="relative z-0 mb-6 w-full group">
                    <input type="text" onChange={handleChange} name="name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-red-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-slate-100 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                  </div>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Login</Link
                >
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;