import React from "react";
// No need to import Font Awesome again if it's in your HTML

const SocialLink = () => {
  return (
    <ul className="flex z-50 flex-col items-center fixed right-5 top-1/2 transform -translate-y-1/2 space-y-4">
      <li>
        <a
          href="#"
          className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-300 to-white shadow-lg transition duration-500 hover:shadow-md transform hover:translate-x-[-10px] hover:scale-110"
        >
          <i
            className="fab fa-facebook-f text-xl text-gray-700 transition duration-500 hover:text-blue-600"
            aria-hidden="true"
          ></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-300 to-white shadow-lg transition duration-500 hover:shadow-md transform hover:translate-x-[-10px] hover:scale-110"
        >
          <i
            className="fab fa-twitter text-xl text-gray-700 transition duration-500 hover:text-blue-400"
            aria-hidden="true"
          ></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-300 to-white shadow-lg transition duration-500 hover:shadow-md transform hover:translate-x-[-10px] hover:scale-110"
        >
          <i
            className="fab fa-google text-xl text-gray-700 transition duration-500 hover:text-red-500"
            aria-hidden="true"
          ></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-300 to-white shadow-lg transition duration-500 hover:shadow-md transform hover:translate-x-[-10px] hover:scale-110"
        >
          <i
            className="fab fa-linkedin-in text-xl text-gray-700 transition duration-500 hover:text-blue-700"
            aria-hidden="true"
          ></i>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-300 to-white shadow-lg transition duration-500 hover:shadow-md transform hover:translate-x-[-10px] hover:scale-110"
        >
          <i
            className="fab fa-instagram text-xl text-gray-700 transition duration-500 hover:text-pink-500"
            aria-hidden="true"
          ></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLink;
