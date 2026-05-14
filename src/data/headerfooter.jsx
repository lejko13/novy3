export const siteData = {
  navLinks: [
    { type: "scroll", label: "Domov", id: "hero" },
    { type: "scroll", label: "Ako to funguje", id: "ako-to-funguje" },

    {
      type: "dropdown",
      label: "Pobočky",
     items: [
  {
    name: "Martina Benku, Prešov",
    href: "/pobocky/martina-benku",

  fotky: [
  "/benko/martinbenka1.jpg",
  "/benko/martinbenka2.jpg",
  "/benko/martinbenka3.jpg",
  "/benko/martinbenka4.jpg",
  "/benko/martinbenka5.jpg",

],
    address: "Martina Benku 7887/1A, 080 01 Prešov",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.8!2d21.255!3d49.001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eed0c743b96e3%3A0x40b38bed512e6860!2sMartina%20Benku%207887%2F1A%2C%20080%2001%20Pre%C5%A1ov!5e0!3m2!1ssk!2ssk!4v1700000000000",
  },
  {
    name: "Šváby, Prešov",
    href: "/pobocky/svaby",
    address: "Švábska 41/A, 080 05 Prešov",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.2!2d21.275!3d48.998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eed3c3a9f%3A0xabc123!2sŠvábska%2041A%2C%20080%2005%20Prešov!5e0!3m2!1ssk!2ssk!4v1700000000001",
  },
  // {
  //   name: "Lazovná BB",
  //   href: "/pobocky/lazovna-bb",
  //   address: "Lazovná ul., 974 01 Banská Bystrica",
  //   mapEmbed:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5!2d19.146!3d48.736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47154c0b1234%3A0xdef456!2sLazovná%2C%2097401%20Banská%20Bystrica!5e0!3m2!1ssk!2ssk!4v1700000000002",
  // },
]
    },

    { type: "scroll", label: "Trénerka", id: "trenerka" },
    { type: "scroll", label: "Galéria", id: "galeria" },
    { type: "scroll", label: "Kontakt", id: "kontakt" },

    { type: "route", label: "FAQ", href: "/faq" },
  ],
};