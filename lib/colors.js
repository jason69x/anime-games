let colors = ["#ff0a54", "#00b4d8", "#06d6a0", "#ff686b", "#9381ff", "#ff477e"];

const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export default getColor;
