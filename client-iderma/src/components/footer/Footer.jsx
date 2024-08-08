import React from "react";
import "./footer.css";
import { MapPinIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <div className="footer-background flex h-[350px] items-center justify-center p-4 text-white">
      <div className="flex w-full items-center justify-evenly">
        <img
          src="/svg/logo-footer-white.svg"
          alt="logo"
          className="h-[140px]"
        ></img>
        <div className="mx-5 w-[230px] text-sm">
          <h3>
            Nuestra trayectoria de contianza: más de 250 000 pacientes
            satisfechos. Los resultados hablan por si mismos. Médicos altamente
            confiables con sólidos estudios y actualización continua.
          </h3>
        </div>
        <div className="flex flex-col">
          <h1>Get in touch</h1>
          <div className="flex w-[230px] items-center">
            <MapPinIcon className="mx-0 size-6" />
            <p className="m-1 text-xs">
              {" "}
              Calle Mártin José Olaya n°129 Miraflores, Lima | PE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
