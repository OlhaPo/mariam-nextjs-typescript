"use client";

import { Translations } from "@/lib/dictionaryUtils";
import { Order } from "@/models/OrderSchema";
import { useCartStore } from "@/services/cart/hooks";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";

export interface CheckoutFormProps {
  onSave: (data: Order) => void;
  translations: Translations;
}

export function CheckoutForm({ onSave, translations }: CheckoutFormProps) {
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

  const messengerOptions = ["Telegram", "Email", "Viber", "WhatsApp", "Other"];

  return (
    <Form.Root onSubmit={save}>
      <Form.Field className="form-field" name="first_name">
        <div className="flex items-baseline justify-between">
          <Form.Label
            className="form-label"
            dangerouslySetInnerHTML={{
              __html: (
                (translations?.page as Translations)
                  ?.checkout_page as Translations
              )?.first_name as string,
            }}
          ></Form.Label>
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
          <Form.Label className="form-label">
            {
              (
                (translations?.page as Translations)
                  ?.checkout_page as Translations
              )?.last_name as string
            }
            *
          </Form.Label>
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
        <Form.Label className="form-label">
          {
            (
              (translations?.page as Translations)
                ?.checkout_page as Translations
            )?.email as string
          }
          *
        </Form.Label>
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
          <Form.Label className="form-label">
            {
              (
                (translations?.page as Translations)
                  ?.checkout_page as Translations
              )?.phone_number as string
            }
            *
          </Form.Label>
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

      <Form.Field className="form-field" name="messenger">
        <div className="flex items-baseline justify-between">
          <Form.Label
            className="form-label"
            dangerouslySetInnerHTML={{
              __html: (
                (translations?.page as Translations)
                  ?.checkout_page as Translations
              )?.messenger as string,
            }}
          ></Form.Label>
        </div>
        <select
          className="form-input"
          value={messenger}
          onChange={(ev) => setMessenger(ev.target.value)}
        >
          <option value=""></option>
          {messengerOptions.map((m, i) => (
            <option key={i} value={m}>
              {m === "Other"
                ? ((
                    (translations?.page as Translations)
                      ?.checkout_page as Translations
                  )?.other_messenger as string)
                : m}
            </option>
          ))}
        </select>
      </Form.Field>

      <Form.Field className="form-field" name="comment">
        <Form.Label className="form-label">
          {
            (
              (translations?.page as Translations)
                ?.checkout_page as Translations
            )?.comment as string
          }
        </Form.Label>
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
      <Form.Submit className="btn-primary">
        {
          ((translations?.page as Translations)?.checkout_page as Translations)
            ?.place_order as string
        }
      </Form.Submit>
    </Form.Root>
  );
}
