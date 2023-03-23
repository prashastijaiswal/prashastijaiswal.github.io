import React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="w-full h-[60vh]">
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/170123102557-beautiful-india-valley-of-flowers-flickr-alosh-bennett-4951216953.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280"
          alt="/"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1140px] m-auto ">
        <div className=" pb-8 backdrop-blur-sm absolute top-[20%] w-full md:-[50%] max-w-[600px]  flex flex-col text-white p-3">
          <h1 className=" text-5xl py-2 text-gray-600">Explore India</h1>
          <h2 className="text-4xl py-4 italic text-gray-500">With INDIA.bay</h2>
          <p className="">Experience the vibrant culture, rich history, and stunning landscapes of India. Explore ancient forts, majestic temples, and bustling markets while indulging in delicious cuisine and warm hospitality</p>
        </div>
      </div>
    </div>
  );
};
