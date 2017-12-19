export function getColours(imageOptions) {

  return imageOptions.map(element => {
    return element["Colour"];
  });
}

export function getDropdownValue(className) {
  return document.getElementsByClassName(className)[0].innerText.replace(/\s/g, '');
}

export function getImages(imageOptions, colour) {
  const result = imageOptions.find(element => {
    return element.Colour === colour;
  });
  return result.ImageList;
}
