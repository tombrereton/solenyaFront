import { getImages } from "./functions";

const testData = [
  {
    Colour: "Grey",
    ImageList: [
      "https://i.imgur.com/vxfTdPz.jpg",
      "https://i.imgur.com/Pm66fCS.jpg",
      "https://i.imgur.com/0wjsATF.jpg",
      "https://i.imgur.com/tI2n4lF.jpg"
    ]
  },
  {
    Colour: "Black",
    ImageList: [
      "https://i.imgur.com/fOslYDO.jpg",
      "https://i.imgur.com/ChyfUeg.jpg",
      "https://i.imgur.com/rAhgewy.jpg",
      "https://i.imgur.com/L6RuD5k.jpg"
    ]
  }
];

describe("get images", () => {
  it("should exist", () => {
    expect(getImages).toBeDefined();
  });

  it("returns 4 images based on selected colour", () => {
    expect(getImages(testData, "Black")).toEqual(testData[1].ImageList);
  })

});
