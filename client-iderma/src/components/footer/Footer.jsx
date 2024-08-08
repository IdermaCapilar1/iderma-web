import React from "react";
import "./footer.css";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

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
        {/* enlaces directos */}
        <div className="flex flex-col ">
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
        <div className="flex flex-col">
          <FaFacebookF className="my-2" />
          <FaInstagram className="my-2" />
          <FaTiktok className="my-2" />
          <AiOutlineYoutube className="my-2" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
