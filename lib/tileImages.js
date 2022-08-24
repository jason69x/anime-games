const tileImages = [
  { src: "/images/1.png", matched: false },
  { src: "/images/2.png", matched: false },
  { src: "/images/3.png", matched: false },
  { src: "/images/4.png", matched: false },
  { src: "/images/5.png", matched: false },
  { src: "/images/6.png", matched: false },
  { src: "/images/7.png", matched: false },
  { src: "/images/8.png", matched: false },
];

const shuffleCards = () => {
  return [...tileImages, ...tileImages]
    .sort(() => Math.random() - 0.5)
    .map((tile) => ({ ...tile, id: Math.random() }));
};

export default shuffleCards;
