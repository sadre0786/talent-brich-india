import React from "react";

// CardItem component for individual card
const CardItem = ({ icon, title, description, bgColor }) => {
  return (
    <div className="rounded-xl bg-white p-6 cursor-pointer text-center shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <div
        className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full ${bgColor} shadow-lg`}
      >
        <i className={`fas ${icon} text-white fa-2x`}></i>
      </div>
      <h1 className="text-gray-800 mb-3 text-xl font-semibold lg:px-14">
        {title}
      </h1>
      <p className="px-4 text-gray-600">{description}</p>
    </div>
  );
};

// Main Card component
const Card = () => {
  return (
    <div className="h-full w-full pt-4 p-4 mt-16">
    <div className="grid gap-14 md:grid-cols-3 md:gap-5">
      <CardItem
        icon="fa-hard-hat"
        title="Expert Construction Services"
        description="From residential to commercial projects, we build with precision and quality. 
  We ensure durability, safety, and innovative designs for every structure."
        bgColor="bg-yellow-500"
      />
  
      <CardItem
        icon="fa-users"
        title="Skilled & Unskilled Labour"
        description="Hire experienced masons, carpenters, electricians, and more. 
  We provide both short-term and long-term labor solutions for your construction needs."
        bgColor="bg-blue-600"
      />
  
      <CardItem
        icon="fa-truck-moving"
        title="Material Supply & Logistics"
        description="We deliver top-quality construction materials on time. 
  Cement, steel, bricks, and more – everything you need for your project."
        bgColor="bg-green-500"
      />
    </div>
  </div>  
  );
};

export default Card;
