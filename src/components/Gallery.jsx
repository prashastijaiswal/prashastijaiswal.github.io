import React from "react";

export const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full py-4 px-16">
      <h2 className="text-center p-4 text-gray-700">Galley</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div >
          <img className="object-cover h-40 w-52 sm:col-span-3 col-span-2 row-span-2"
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=768&q=80"
            alt=""
          />
        </div>
        <div>
          <img className="object-cover h-40 w-52"
            src="https://images.unsplash.com/photo-1547707188-cdbffa0bc270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80"
            alt=""
          />
        </div>
        <div>
          <img className="object-cover h-40 w-52"
            src="https://images.unsplash.com/photo-1545126178-862cdb469409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=768q=80"
            alt=""
          />
        </div>
        <div>
          <img className="object-cover h-40 w-52"
            src="https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=768q=80"
            alt=""
          />
        </div>
        <div>
          <img  className="object-cover h-40 w-52"
            src="https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=768q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
