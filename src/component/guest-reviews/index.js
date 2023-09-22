import { Fragment } from "react";

import Box from "../box";

import Heading from "../heading";

import "./index.css";

export default function GuestReviews({ list }) {
  return (
    <div className="review__block">
      <Heading border>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__title">
        <span className="review__name">{guestName}</span>
        <span className="review__rating">Рейтинг: {rating}</span>
      </div>
      <p className="review__text">{review}</p>
    </Box>
  );
}
