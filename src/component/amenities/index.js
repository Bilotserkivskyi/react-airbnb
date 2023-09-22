import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airport from "./airport.svg";
import concierge from "./concierge.svg";
import room from "./room.svg";
import child from "./child.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box shadow>
      <Heading border>Зручності:</Heading>
      <ul className="amenities">
        {hasPool && (
          <ListItem imageSrc={pool}>
            <span>Басейн</span>
          </ListItem>
        )}

        {hasGym && (
          <ListItem imageSrc={gym}>
            <span>Спортивний зал</span>
          </ListItem>
        )}

        {hasFreeBreakfast && (
          <ListItem imageSrc={breakfast}>
            <span>Безкоштовний сніданок</span>
          </ListItem>
        )}

        {hasFreeWiFi && (
          <ListItem imageSrc={wifi}>
            <span>Безкоштовний Wi-Fi</span>
          </ListItem>
        )}

        {hasParking && (
          <ListItem imageSrc={parking}>
            <span>Безкоштовний вуличний паркінг</span>
          </ListItem>
        )}

        {hasPetsAllowed && (
          <ListItem imageSrc={pets}>
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>
        )}

        {hasAirportShuttle && (
          <ListItem imageSrc={airport}>
            <span>Трансфер до/з аеропорту</span>
          </ListItem>
        )}

        {hasConciergeService && (
          <ListItem imageSrc={concierge}>
            <span>Консьєрж-сервіс</span>
          </ListItem>
        )}

        {hasRoomService && (
          <ListItem imageSrc={room}>
            <span>Обслуговування номерів</span>
          </ListItem>
        )}

        {hasChildFriendly && (
          <ListItem imageSrc={child}>
            <span>Підходить для дітей</span>
          </ListItem>
        )}
      </ul>
    </Box>
  );
}
