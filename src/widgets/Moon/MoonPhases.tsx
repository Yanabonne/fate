import React, { useEffect } from "react";
import moonImg from "../../images/moon-2.png";

type TMoonData = {
  datetime: string;
  moonphase: number;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}[];

type TMoonProps = {
  geoData: TMoonData;
};

export default function MoonPhases({ geoData }: TMoonProps) {
  function getMoonName(phase: number) {
    return phase < 0.02 || phase > 0.98
      ? "Новолуние 🌑"
      : phase >= 0.02 && phase <= 0.23
      ? "Растущий серп 🌒"
      : phase > 0.23 && phase < 0.27
      ? "Первая четверть 🌓"
      : phase >= 0.27 && phase <= 0.48
      ? "Растущая луна 🌔"
      : phase > 0.48 && phase < 0.52
      ? "Полнолуние 🌕"
      : phase >= 0.52 && phase <= 0.73
      ? "Убывающая луна 🌖"
      : phase > 0.73 && phase < 0.77
      ? "Последняя четверть 🌗"
      : "Убывающий серп 🌘";
    //   phase > 0.75 &&phase <=0.98 ?
  }

  function getMoonAdvice(phase: number) {
    return phase < 0.02 || phase > 0.98
      ? "Новолуние запускает цикл и знаменует время для планирования и закладывания намерений. Старайтесь в этот день: не конфликтовать, сглаживать углы, свести к минимуму тяжелый труд, больше отдыхать, не копить обиды и недовольство."
      : phase >= 0.02 && phase <= 0.23
      ? "Эта фаза Луны сильно влияет на настроение и состояние человека. Если Луна находится в этой фазе, значит, настал период внутренней работы. Рекомендуется строить планы и рассматривать варианты их реализации. Поддерживать нужный уровень энергии помогут активное времяпровождение, увлечения, творчество."
      : phase > 0.23 && phase < 0.27
      ? "Эта фаза Луны сильно влияет на настроение и состояние человека. В эту фазу цикла рекомендуется вести активную жизнь, начать движение к поставленным целям и увеличить интенсивность работы. Если не направлять свою энергию в нужное русло, есть риск стать агрессивным и раздражительным. "
      : phase >= 0.27 && phase <= 0.48
      ? "В эту фазу пришло время активного внешнего действия. Поставленные в первую четверть цели требуют их исполнения. Также в этот период человеческое тело предрасположено к регенерации и очищению."
      : phase > 0.48 && phase < 0.52
      ? "Полнолуние сильно влияет на человека. Старайтесь не ругаться и не вступать в конфликты, ведь в этот период люди неоднозначно воспринимают друг друга, эмоциональный фон напряжен. Полнолуние, с другой стороны, — это время откровений, наград и, конечно же, перемен. Вот тогда и раскроются плоды вашего труда. "
      : phase >= 0.52 && phase <= 0.73
      ? "Эту фазу называют фазой пассивного внешнего действия. Эта фаза Луны положительно влияет на состояние человека. Если сегодня третья четверть, то, скорее всего, ваш эмоциональный фон стабильный, а настроение приподнятое. Также это благоприятный период для того, чтобы простить своих врагов, отдать долги и завершить дела. "
      : phase > 0.73 && phase < 0.77
      ? "Считается, что это один из самых спокойных и гармоничных этапов цикла. Лунная энергия способствует избавлению от ненужного и гармонизации жизни."
      : "Время познания себя от третьей четверти до новолуния — период пассивного внутреннего действия. Вы уже наблюдаете результаты от своих действий, поэтому настал момент проанализировать плоды работы и подвести итоги. Теперь уместно готовиться к построению нового плана на будущий месяц. В этот период не провоцируйте ссоры, воздерживайтесь от чрезмерного общения, это может вас опустошить.";
    //   phase > 0.75 &&phase <=0.98 ?
  }

  return (
    <>
      <h1 className="moon__title">Фазы луны</h1>
      <h1 className="moon__subtitle">
        Сегодня: {new Date(geoData[0].datetime).toLocaleDateString()}
      </h1>
      <div className="moon_curved">
        <div className="moon__curved_1"></div>
        <div className="moon__curved_2"></div>
      </div>
      <div className="moon__container moon__container_purple">
        <section className="moon__section moon__section_main">
          <div className="moon__info">
            <h2 className="moon__title-2">
              {getMoonName(geoData[0].moonphase)}
            </h2>
            {/* <p className="moon__text">Коэффициент: {geoData[0].moonphase}</p> */}
            <p className="moon__text">
              <span className="moon__text_span">Восход солнца:</span>{" "}
              {geoData[0].sunrise}
            </p>
            <p className="moon__text">
              <span className="moon__text_span">Заход солнца:</span>{" "}
              {geoData[0].sunset}
            </p>
            <p className="moon__text">
              <span className="moon__text_span">Восход луны:</span>{" "}
              {geoData[0].moonrise}
            </p>
            <p className="moon__text">
              <span className="moon__text_span">Заход луны:</span>{" "}
              {geoData[0].moonset}
            </p>
            <p className="moon__text">
              <span className="moon__text_span">О фазе:</span>{" "}
              {getMoonAdvice(geoData[0].moonphase)}
            </p>
          </div>
          <img src={moonImg} alt="Полная луна" className="moon__img"></img>
        </section>
      </div>
      <div className="moon__container moon__container_beige">
        <section className="moon__section moon__section_calendar">
          <h2 className="moon__title-2">Две недели</h2>
          <div className="moon__scroll">
            <div className="moon__grid moon__grid_main">
              <p>Дата</p>
              <p>Фаза луны</p>
              {/* <p>О фазе луны</p> */}
              <p>Коэффициент</p>
              <p>Восход солнца</p>
              <p>Заход солнца</p>
              <p>Восход луны</p>
              <p>Заход луны</p>
            </div>
            {geoData.slice(1).map((item) => (
              <div className="moon__grid">
                <p>{new Date(item.datetime).toLocaleDateString()}</p>
                <p>{getMoonName(item.moonphase)}</p>
                {/* <p>{getMoonAdvice(item.moonphase)}</p> */}
                <p>{item.moonphase}</p>
                <p>{item.sunrise}</p>
                <p>{item.sunset}</p>
                <p>{item.moonrise}</p>
                <p>{item.moonset}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="moon_curved_bottom">
        <div className="moon__curved_3"></div>
        <div className="moon__curved_4"></div>
      </div>
    </>
  );
}
