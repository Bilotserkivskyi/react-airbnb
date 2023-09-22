import { Fragment } from "react";

import Box from "../box";

import Heading from "../heading";

import "./index.css";

export default function NearbyAtractions({ list }) {
  return (
    <Box shadow className="attractions">
      <Heading border>Пам'ятки поблизу</Heading>

      <div>
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <div className="attractions__block">
      <a href={link} className="attractions__name">
        {name}
      </a>
    </div>
  );
}
