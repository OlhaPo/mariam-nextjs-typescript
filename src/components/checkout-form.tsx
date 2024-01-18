import * as Form from "@radix-ui/react-form";
import { useState } from "react";

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [messenger, setMessenger] = useState("");

  const messengerOptions = {
    [0]: "Telegram",
    [1]: "Email",
    [2]: "Viber",
    [3]: "WhatsApp",
    [4]: "Other",
  };

  return (
    <div>
      <Form.Root className="w-[50%]">
        <Form.Field className="form-field" name="firstName">
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="form-field" name="lastName">
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
              value={lastName}
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

        <Form.Field className="form-field" name="phoneNumber">
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
              value={phoneNumber}
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
            <textarea className="Textarea" required />
          </Form.Control>
        </Form.Field>

        <Form.Submit className="btn-primary">
          <button>Place order</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
