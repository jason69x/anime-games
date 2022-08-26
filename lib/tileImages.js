const tileImages = [
  { src: "/images/1.webp", matched: false },
  { src: "/images/2.webp", matched: false },
  { src: "/images/3.webp", matched: false },
  { src: "/images/4.webp", matched: false },
  { src: "/images/5.webp", matched: false },
  { src: "/images/6.webp", matched: false },
  { src: "/images/7.webp", matched: false },
  { src: "/images/8.webp", matched: false },
];

const shuffleCards = () => {
  return [...tileImages, ...tileImages]
    .sort(() => Math.random() - 0.5)
    .map((tile) => ({ ...tile, id: Math.random() }));
};

export default shuffleCards;
