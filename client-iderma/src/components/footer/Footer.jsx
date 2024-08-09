import React from "react";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-background fixed bottom-0 flex w-full flex-col items-center p-3 text-white">
      <div className="flex h-[190px] w-full justify-evenly py-3">
        <div className="relative">
          <img
            src="/svg/logo-footer-white.svg"
            alt="logo"
            className="h-[100px]"
          />
        </div>
        <div className="mx-5 flex w-[230px] items-center text-sm">
          <h3>
            Nuestra trayectoria de contianza: más de 250 000 pacientes
            satisfechos. Los resultados hablan por si mismos. Médicos altamente
            confiables con sólidos estudios y actualización continua.
          </h3>
        </div>
        {/* enlaces directos */}
        <div className="flex flex-col">
          <h1 className="font-bold">Enlaces directos</h1>
          <div className="flex items-center">
            <Link to={"#"}>Shop</Link>
          </div>
          <div className="flex items-center">
            <Link to={"#"}>Nosotros</Link>
          </div>{" "}
          <div className="flex items-center">
            <Link to={"#"}>Servicios</Link>
          </div>{" "}
          <div className="flex items-center">
            <Link to={"#"}>Mi cuenta</Link>
          </div>{" "}
          <div className="flex items-center">
            <Link to={"#"}>Centro de ayuda</Link>
          </div>
        </div>

        {/* getintouch */}
        <div className="flex flex-col">
          <h1 className="font-bold">Get in touch</h1>
          <div className="flex w-[230px] items-center">
            <LuMapPin size={20} />
            <p className="m-1 text-xs">
              {" "}
              Calle Mártin José Olaya n°129 Miraflores, Lima | PE
            </p>
          </div>
          <div className="flex w-[230px] items-center">
            <MdOutlineMail />
            <p className="m-1 text-xs"> info@idermacapilar.com</p>
          </div>
          <div className="flex w-[230px] items-center">
            <MdOutlineLocalPhone />
            <p className="m-1 text-xs">{"(01) 4443 884"}</p>
          </div>
        </div>
        {/* Socials section */}
        <div className="flex flex-col opacity-50">
          <FaFacebookF size={30} className="my-2" />
          <FaInstagram size={30} className="my-2" />
          <FaTiktok size={30} className="my-2" />
          <AiOutlineYoutube size={30} className="my-2" />
        </div>
      </div>
      <p className="text-sm opacity-25">
        All rigth reserved to Iderma Capilar. Copyright° 2024
      </p>
    </div>
  );
}

export default Footer;
