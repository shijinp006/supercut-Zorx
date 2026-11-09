// Contact page data — global office locations

export const OFFICES = [
  {
    id: "usa",
    tag: "Super Cut – USA",
    city: "Benbrook, Texas",
    addr: "9463 Hwy 377 Benbrook, TX 76126, Texas.",
    left: "18.0%",
    top: "41.0%",
    delay: "0s",
  },
  {
    id: "uk",
    tag: "Super Cut – UK",
    city: "Luton, London",
    addr: "19 Arthur street Luton, LU1 3SF, London",
    left: "44.0%",
    top: "26.0%",
    delay: "0.7s",
  },
  {
    id: "mena",
    tag: "Super Cut – MENA",
    city: "Abu Dhabi, UAE",
    addr: "PO Box : 778323, Abu Dhabi United Arab Emirates",
    left: "66.0%",
    top: "42.0%",
    delay: "1.4s",
  },
];

// WhatsApp chat number (+971 54 284 7496), digits only as wa.me expects
export const WHATSAPP_NUMBER = "971542847496";
export const whatsappUrl = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Hostinger webmail sign-in for the team's @supercutglobal.com mailboxes (navbar "Login")
export const WEBMAIL_URL = "https://mail.hostinger.com/";
