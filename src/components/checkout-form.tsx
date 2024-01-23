"use client";

import { Order } from "@/models/OrderSchema";
import { useCartStore } from "@/services/cart/hooks";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";

export interface CheckoutFormProps {
  onSave: (data: Order) => void;
}

export function CheckoutForm({ onSave }: CheckoutFormProps) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [messenger, setMessenger] = useState("");
  const [comment, setComment] = useState("");

  const { cart } = useCartStore();

  function save(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      items: cart.map((c) => ({
        product_id: c.product._id ?? "",
        count: c.count,
      })),
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      messenger: messenger,
      comment: comment,
    });
  }

  const messengerOptions = {
    [0]: "Telegram",
    [1]: "Email",
    [2]: "Viber",
    [3]: "WhatsApp",
    [4]: "Other (add in section for commets below)",
  };

  return (
    <Form.Root onSubmit={save}>
      <Form.Field className="form-field" name="first_name">
        <div className="flex items-baseline justify-between">
          <Form.Label className="form-label">First Name*</Form.Label>
          <Form.Message
            className="text-[13px] opacity-[0.8]"
            match="valueMissing"
          >
            The field can not be blank.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input"
            type="text"
            required
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="form-field" name="last_name">
        <div className="flex items-baseline justify-between">
          <Form.Label className="form-label">Last Name*</Form.Label>
          <Form.Message
            className="text-[13px] opacity-[0.8]"
            match="valueMissing"
          >
            The field can not be blank.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input"
            type="text"
            required
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="form-field" name="email">
        <Form.Label className="form-label">Email</Form.Label>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
        <Form.Control asChild>
          <input
            className="form-input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="form-field" name="phone_number">
        <div className="flex items-baseline justify-between">
          <Form.Label className="form-label">Phone Number*</Form.Label>
          <Form.Message
            className="text-[13px] opacity-[0.8]"
            match="valueMissing"
          >
            Phone number must be in international format. Example: +380 for
            Ukraine.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input"
            type="text"
            required
            value={phone_number}
            onChange={(ev) => setPhoneNumber(ev.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="form-field" name="collection">
        <div className="flex items-baseline justify-between">
          <Form.Label className="form-label">
            Preferable messenger for contacting*
          </Form.Label>
        </div>
        <select
          className="form-input"
          value={messenger}
          onChange={(ev) => setMessenger(ev.target.value)}
        >
          <option value="">Choose messenger</option>
          {Object.entries(messengerOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </Form.Field>

      <Form.Field className="form-field" name="question">
        <Form.Label className="form-label">Questions or comments</Form.Label>
        <Form.Message className="form-input" match="valueMissing">
          Additionl information
        </Form.Message>
        <Form.Control asChild>
          <textarea
            className="Textarea"
            required
            value={comment}
            onChange={(ev) => setComment(ev.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit className="btn-primary">Place order</Form.Submit>
    </Form.Root>
  );
}
