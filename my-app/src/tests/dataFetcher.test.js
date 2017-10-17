import { fetchDataToJSON } from "../dataFetcher";
import fetchMock from "fetch-mock";
import { render } from "react-dom";
import db from "../db.json";
import React from "react";
import Root from '../Root';


jest.mock("react-dom");

const fetchData = { some: "result" };
fetchMock.get("*", fetchData);

afterEach(() => {
    jest.resetAllMocks();
})
describe("fetch and render", () => {
    it("calls fetch with the data URL", (done) => {
        fetchDataToJSON()
            .then(() => {
                expect(fetchMock.lastUrl()).toEqual('http://localhost:3000/Products');
                done();
            });
    })
})

//shows the data is displayed correctly
//fetches prodcut data
//fetches product name
//fetches image
//displays the above as well a test for each 