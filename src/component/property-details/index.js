import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import bath from "./bath.svg";
import bed from "./bed.svg";
import bedroom from "./bedroom.svg";
import guest from "./guest.svg";

export default function PropertyDetails({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow>
      <Heading border>Деталі властивості:</Heading>
      <ul className="property__details">
        <ListItem imageSrc={guest}>
          <span>{guests} </span>
          <span>гостей</span>
        </ListItem>

        <ListItem imageSrc={bedroom}>
          <span>{bedrooms} </span>
          <span>спалень</span>
        </ListItem>

        <ListItem imageSrc={bed}>
          <span>{beds} </span>
          <span>ліжок</span>
        </ListItem>

        <ListItem imageSrc={bath}>
          <span>{baths} </span>
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
