import "./index.css";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div>
      <div className="contact">
        <img src={image} className="img"></img>

        <div className="contact__block">
          <h1 className="contact__text">Господар - {name}</h1>

          <div className="contact__sub-block">
            <span className="contact__sub-value">Телефон: {phone}</span>
            <span className="contact__sub-value">
              Дзвонить: {response_time}
            </span>
            <span className="contact__sub-value">
              {response_rate}% швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p className="contact__paragraph">{info}</p>
    </div>
  );
}
