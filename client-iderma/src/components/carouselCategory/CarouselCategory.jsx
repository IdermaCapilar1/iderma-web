import React from "react";
import Cards from "../cards/Cards";

function CarouselCategory() {
  return (
    <div className="m-5 flex w-full">
      {/* title carousel */}
      <div>
        <h3 className="text-blue-800">Acerca de nuestros servicios</h3>
        <h1 className="font-['Catchye'] text-2xl">
          Brindamos experiencia única para ti
        </h1>
        <div className="flex w-[600px]">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default CarouselCategory;
