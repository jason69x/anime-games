const tileImages = [
  { src: "/images/1.jpg", matched: false },
  { src: "/images/2.jpg", matched: false },
  { src: "/images/3.jpg", matched: false },
  { src: "/images/4.jpg", matched: false },
  { src: "/images/5.jpg", matched: false },
  { src: "/images/6.jpg", matched: false },
  { src: "/images/7.jpg", matched: false },
  { src: "/images/8.jpg", matched: false },
];

const shuffleCards = () => {
  return [...tileImages, ...tileImages]
    .sort(() => Math.random() - 0.5)
    .map((tile, idx) => ({ ...tile, id: idx }));
};

export default shuffleCards;
