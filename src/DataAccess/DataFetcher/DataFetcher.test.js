import fetchDataToJSON from "./";
import fetchMock from "fetch-mock";
import TestData from "../../TestData/ProductApiDataTest.json";
import { ProductServiceEndpoint } from "../../testConfig";
jest.mock("react-dom");

const fetchData = TestData[0];
fetchMock.get(ProductServiceEndpoint, fetchData);

afterEach(() => {
  jest.resetAllMocks();
});
describe("fetch", () => {
  it("calls fetch with the data URL", done => {
    fetchDataToJSON(ProductServiceEndpoint).then(data => {
      expect(data).toEqual(fetchData);
      done();
    });
  });

  it("calls fetch with the right endpoint", done => {
    fetchDataToJSON(ProductServiceEndpoint).then(() => {
      expect(fetchMock.lastUrl()).toEqual(ProductServiceEndpoint);
      done();
    });
  });
});
