import { useEffect } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { useState } from "react";
export const Card = ({ data}) => {
  const [titles, setTitles] = useState(data.title);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const splittedWords = titles.split(" ");
    const truncatedTitle = splittedWords.slice(0, 4).join(" ");
    setTitles(truncatedTitle);
  }, [titles]);
  const {  imageUrl, price } = data;
  const MaxPrice = Math.floor(Math.random() * (2000 - 1000) + 1000);
  const discountedPrice = Math.floor(((MaxPrice - price) / MaxPrice) * 100);
  async function handleClick(e) {
    e.preventDefault();
    try {
      const user = JSON.parse(Cookie.get("user"));
      const toSend = {
        userid: user.id,
        bookid: data._id,
        quantity: 3,
      };
      const response = await axios.post(
        "https://drab-jade-lamb-wig.cyclic.cloud/api/addToCart",
        { body: toSend }
      );
      if (response.status === 200) {
        setSuccess(true);
        setMessage(`${titles} added to Cart Successfully. Open Cart to checkout`);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (success) {
      setInterval(() => {
        setSuccess(false);
        setMessage("")
      }, 5000);
    }
  }, [success]);
  return (
    <div class=" relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-gradient-to-r from-gray-100 to-red-50 shadow-md">
      <a class="relative mx-3 mt-3 flex h-60 rounded-xl" href="/">
        <img class="object-scale-down" src={imageUrl} alt="product" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discountedPrice}% OFF
        </span>
      </a>
      <div class="mt-4 px-5 pb-5">
        
          <h5 class="text-xl tracking-tight text-slate-900">{titles}</h5>
      
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900">₹{price}</span>
            <span class="text-sm text-slate-900 line-through">₹{MaxPrice}</span>
          </p>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <button
          onClick={handleClick}
          href="#"
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
      {success ? (
        <div className="flex pb-4 shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-900 text-gray-100 divide-gray-700">
          <div className="flex flex-1 flex-col p-4 border-l-8 border-green-400">
            <span className="text-2xl">Success</span>
            <span className="text-xs text-gray-400">
              {message}
            </span>
          </div>
          <button onClick={()=> {setSuccess(false)}} className="px-4 flex items-center text-xs uppercase tracki text-gray-400 border-gray-700">
            Dismiss
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
