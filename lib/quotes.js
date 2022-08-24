const quotes = [
  {
    anime: "Shingeki no Kyojin",
    quote:
      "I want to see and understand the world outside. I don't want to die inside these walls without knowing what's out there!",
    character: "Eren Jaeger",
  },
  {
    anime: "Kuroko No Basket",
    quote: "If you haven't changed, that means you haven't improved.",
    character: "Tetsuya Kuroko",
  },
  {
    anime: " Vinland Saga",
    quote: "Let those who seek death find it.",
    character: "Father Willibald",
  },
  {
    anime: "Gintama",
    quote:
      "The best way to live a full life is to be a child, no matter your age.",
    character: "Gintoki Sakata",
  },
  {
    anime: "Tonari No Kaibutsu-kun",
    quote: "You can't pick up water once it's spilled, so handle it carefully.",
    character: "Yoshida Haru",
  },
];

const getQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default getQuote;
