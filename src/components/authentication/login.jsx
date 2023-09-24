import React, { useState} from "react";
import image1 from "./image1.svg";
import "./Login.css"
import logo from "./logo.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: ""
  }
  const [login, setLogin] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`https://drab-jade-lamb-wig.cyclic.cloud/api/login`, login).then(res => res.data).catch(err => console.log(err));
      console.log(data)
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: data });
        Cookie.set("user", JSON.stringify(data));
        navigate("/");
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="Login-body">
      <img className="logo" src={logo} alt="" />
      <section className="h-screen">
        <div className="px-6 h-full text-gray-500">
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
            <h3 className="text-2xl font-bold text-center">Login to your account</h3>
              <form onSubmit={handleSubmit}>
                <div className="relative z-0 mb-6 w-full group">
                  <input onChange={handleChange} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm dark:text-gray-500-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-500 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input onChange={handleChange} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm dark:text-slate-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-500 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
              </form>

              <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-center">
                Dont have an account?
                <Link
                  to="/signup"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;