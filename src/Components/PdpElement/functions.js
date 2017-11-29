export function getColours(imageOptions) {
  // let colours = [];

  // for (let i = 0; i < imageOptions.length; i++) {
  //   colours.push(imageOptions[i]["Colour"]);
  // }

  return imageOptions.map(element => {
    return element["Colour"];
  });
}

export function getDropdownValue(className) {
  return document.getElementsByClassName(className)[0].innerText.replace(/\s/g,'');
}

export function imageSwitcher(colour) {
  return object;
}

export function getImages(imageOptions, colour) {
  const result = imageOptions.find(element => {
    return element.Colour === colour;
  });
  return result.ImageList;
}
