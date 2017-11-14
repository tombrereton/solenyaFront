import getDeviceWidth from "../GetDeviceWidth";

console.error = message => {
  throw new Error(message);
};

describe("LogDeviceWidth", () => {
  it("Should get device size", () => {
    var width = getDeviceWidth();

    expect(width).not.toBeUndefined();
  });
});
