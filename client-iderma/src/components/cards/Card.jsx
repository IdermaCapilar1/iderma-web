import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Card() {
  return (
    <div className="relative mt-[150px] h-[300px] w-[180px]">
      <div>
        <img
          alt="img categorie"
          src="/imagenes/woman.png"
          className="absolute right-0 top-[-50px] z-20 w-[130px] scale-x-[-1] shadow-lg"
        />
        <div className="footer-background clip-parallelogram absolute right-[-93px] top-[-130px] z-10 h-[200px] w-[190px] rounded-xl"></div>
      </div>
      <div className="relative flex h-[280px] w-[180px] flex-col rounded-xl border shadow-2xl">
        <div className="flex-grow"></div>
        <h1 className="p-5 text-base font-semibold text-[#23315c]">
          Dermatología Láser
        </h1>
        <div className="absolute bottom-0 right-0 p-3">
          <Link to="/#" className="flex items-center text-xs text-yellow-600">
            <p className="mr-1">Más</p> <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
