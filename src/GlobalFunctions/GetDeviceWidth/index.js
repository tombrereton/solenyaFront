const getDeviceWidth = () => {
  let width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  return width;
};

export default getDeviceWidth;
