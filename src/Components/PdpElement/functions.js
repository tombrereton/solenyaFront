export function getColours(imageOptions) {
  let colours = [];

  for (let i = 0; i < imageOptions.length; i++) {
    colours.push(imageOptions[i]["Colour"]);
  }

  return colours;
}

export function getImages(imageOptions) {
  let images = [];

  for (let i = 0; i < imageOptions.length; i++) {
    for (let j = 0; j < imageOptions[i]["ImageList"].length; j++) {
      images.push(imageOptions[i]["ImageList"][j]);
    }
  }
  return images;
}
