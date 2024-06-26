import React from "react";
import ResourceButton from "./ResourceButton/ResourceButton.jsx/ResourceButton";
import "./Resources.css";

const RESOURCES = [
  {
    name: "СР НАУ",
    imgUrl: "/sr_nau.jpg",
    link: "https://t.me/studrada_nau",
  },
  {
    name: "Корисна інфа",
    imgUrl: "/korysna_infa.jpeg",
    link: "https://t.me/+ADIO-Leog1dlODYy",
  },
  {
    name: "Nauchan",
    imgUrl: "/nauchan.jpeg",
    link: "https://t.me/nauchan_news",
  },
  {
    name: "KAI informal",
    imgUrl: "/KAI_informal.jpeg",
    link: "https://t.me/nauinformal",
  },
  {
    name: "СР Студмістечка",
    imgUrl: "/sr_sm_nau.jpeg",
    link: "https://t.me/nau_srsm",
  },
  {
    name: "ТОСА НАУ",
    imgUrl: "/tosa.jpeg",
    link: "https://t.me/tosa_nau",
  },
  {
    name: "Вступник НАУ",
    imgUrl: "/vstupnyk_nau.jpeg",
    link: "https://t.me/pknau",
  },
];

const Resources = () => {
  return (
    <>
      <h2 className="resources__title">Студентські ресурси</h2>
      <ul className="resources__list">
        {RESOURCES.map((item) => (
          <li>
            <ResourceButton
              name={item.name}
              imgUrl={item.imgUrl}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Resources;
