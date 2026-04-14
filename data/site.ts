export type HoursEntry = {
  dateLabel: string;
  hoursLabel: string;
  note?: string;
};

export type PaymentMethod = {
  id: "venmo" | "zelle";
  label: string;
  handle: string;
  qrImage: string;
  note: string;
};

export const siteConfig = {
  name: "Cafe Nhiều",
  subtitle: "A cozy dorm cafe pop-up",
  description:
    "A dorm-born spring cafe serving floral matcha, dreamy espresso specials, and refreshing fruit-forward sips.",
  location: "Metzger 221",
  hours: [
    { dateLabel: "April 14", hoursLabel: "12 PM - 8 PM", note: "Spring menu debut" },
    { dateLabel: "April 15", hoursLabel: "10 AM - 4 PM" },
    { dateLabel: "April 17", hoursLabel: "10 AM - 6 PM" }
  ] satisfies HoursEntry[],
  flyerNote: "Spring menu",
  paymentNote: "Please include your drink name in the payment note.",
  paymentMethods: [
    {
      id: "venmo",
      label: "Venmo",
      handle: "@Kayley-Phan",
      qrImage: "/payments/venmo-qr-cropped.png",
      note: "Scan to pay with Venmo."
    },
    {
      id: "zelle",
      label: "Zelle",
      handle: "856 650 3267",
      qrImage: "/payments/zelle-qr-cropped.png",
      note: "Scan to pay with Zelle."
    }
  ] satisfies PaymentMethod[]
};
