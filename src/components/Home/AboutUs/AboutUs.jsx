import "./AboutUs.css";

export default function AboutUs() {
  //const example = '/routes/cities?name=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0';

  return (
    <section id="about_us" className="AboutUs">
      <h2>О нас</h2>
      <div className="AboutUs__content">
        <p>
          Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
          наблюдаем, как с каждым днем все больше людей заказывают жд билеты
          через интернет.
        </p>
        <p>
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
          но стоит ли это делать? Мы расскажем о преимуществах заказа через
          интернет.
        </p>
        <strong>
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          Благодаря динамическому ценообразованию цена на билеты в это время
          самая низкая.
        </strong>
      </div>
    </section>
  );
}
