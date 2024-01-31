import { PopulatedOrder } from "@/models/OrderSchema";
import * as React from "react";

export const ConfirmationEmail: React.FC<Readonly<PopulatedOrder>> = ({
  first_name,
  last_name,
  items,
  messenger,
  comment,
  email,
  phone_number,
}) => (
  <div>
    <h1>Dear {first_name}!</h1>
    <></>
  </div>
);
