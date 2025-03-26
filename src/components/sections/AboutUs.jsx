import React from "react";
import "../../assets/AboutUs.css";
import Buttons from "../ui/Buttons";
const AboutUs = () => {
  return (
    <div id="AboutUs">
      <div id="AboutUs_text">
        <h3>Пара слов о нас, производстве и брендинге</h3>
        <p>В своём стремлении улучшить пользовательский <br /> опыт мы упускаем, что ключевые особенности <br /> структуры проекта.</p>
        <p>В своём стремлении улучшить пользовательский <br /> опыт мы упускаем, что ключевые особенности <br /> структуры проекта опыт мы упускаем, что <br /> ключевые особенности структуры проекта.</p>
        <Buttons selectedButton="save" />
      </div>
    </div>
  );
};

export default AboutUs;
