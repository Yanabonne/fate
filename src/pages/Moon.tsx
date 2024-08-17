import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/Moon/Moon.scss";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { MoonApi } from "../utils/apiMoon";
import MoonPhases from "../widgets/Moon/MoonPhases";

export default function Moon() {
  const [isGeoAccepted, setIsGeoAccepted] = useState(false);
  const [geoData, setGeoData] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        MoonApi.getMoonPhase(`${latitude},${longitude}`)
          .then((res) => {
            setIsGeoAccepted(true);
            setGeoData(res.days);
          })
          .catch((err) => {
            toast(`🔮 ${err}`, {
              progressStyle: { background: "#473243" },
            });
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="moon">
      <Header />
      {geoData.length > 0 ? (
        <>
          <MoonPhases geoData={geoData} />
        </>
      ) : (
        <>
          <section className="moon__section moon__section_no-info">
            <h1 className="moon__title">Фазы луны</h1>
            <p className="moon__subtitle">
              Пожалуйста, дайте браузеру доступ к вашему местоположению. Мы не
              сохраняем и не используем ваши данные, они хранятся только
              локально в вашем браузере.
            </p>
          </section>
        </>
      )}
      <Footer noIcon={true} />
    </div>
  );
}
