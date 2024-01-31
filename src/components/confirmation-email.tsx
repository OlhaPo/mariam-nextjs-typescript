import { PopulatedOrder } from "@/models/OrderSchema";
import * as React from "react";

export const ConfirmationEmail: React.FC<Readonly<PopulatedOrder>> = ({
  first_name,
}) => (
  <div>
    <h2>Dear {first_name}!</h2>
    <p>Your order has been received.</p>
    <p>Order details are shown below.</p>
  </div>
);
