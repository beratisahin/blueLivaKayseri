import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";
import i4 from "./4.webp";

function Iletisim() {
  useDocumentTitle("İletişim - Kayseri Blue Liva Güzellik Güzellik Salonu ");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="İletişim" />
      </div>

      <div class="col-lg-6s col-md-6 col-sm-12 col-12" style={{}}>
        <div class="row" style={{}}>
          <div class="col-lg-6s col-md-6 col-sm-12 col-12">
            <img
              src={i1}
              className="contactIcons"
              title="Epilasyon Konum"
            ></img>
            <p className="contactText"><b>Adres:</b><br/> Gevhernesibe Mah. İstasyon Cad. No: 27/44 Kuşoğlu Plaza, 38010  Kocasinan / Kayseri </p>
          </div>
          <div class="col-lg-6s col-md-6 col-sm-12 col-12">
            <img
              src={i2}
              className="contactIcons"
              title="Epilasyon Konum"
            ></img>
            <p className="contactText"><b>Rezervasyon:</b> <br/>0501 116 38 38</p>
          </div>
          <div class="col-lg-6s col-md-6 col-sm-12 col-12">
            <img
              src={i3}
              className="contactIcons"
              title="Epilasyon Konum"
            ></img>
            <p className="contactText"><b>Çalışma Saatleri:</b> <br/>Her Gün: 09:00 – 19:00</p>
          </div>
          <div class="col-lg-6s col-md-6 col-sm-12 col-12">
            <img
              src={i4}
              className="contactIcons"
              title="Epilasyon Konum"
            ></img>
            <p className="contactText"><b>WhatsApp:</b> <br/>0501 116 38 38</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12450.75228344756!2d35.485385!3d38.72497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b135af81a1eb7%3A0x485f7f583a548542!2sKayseri%20Blue%20Liva%20G%C3%BCzellik%20Merkezi!5e0!3m2!1str!2str!4v1683935700750!5m2!1str!2str"
          className="googleharita"
          style={{
            width: "100%",
            height: "45rem",
            frameBorder: "0",
            allowFullScreen: "",
            referrerpolicy: "no-referrer-when-downgrade",
            ariaHidden: "false",
            tabIndex: "0",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          {" "}
        </iframe>
      </div>
    </div>
  );
}

export default Iletisim;
