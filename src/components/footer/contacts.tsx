import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import {
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  FACEBOOK_LINK,
  PHONE_NUMBER,
  EMAIL,
} from "../../constants/contacts";

export function Contacts() {
  return (
    <div className="contacts-section">      
      <div className="flex flex-row gap-4">
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={20} />
        </a>
        <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={20} />
        </a>
      </div>
      <div className="flex flex-col gap-1 md:gap-4">
        <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
    </div>
  );
}
