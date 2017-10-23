import  fetchDataToJSON  from "../dataFetcher";
import fetchMock from "fetch-mock";
import { render } from "react-dom";
import React from "react";
import Root from '../Root';
import testData from '../product_api_data_test.json';
const productServiceEndpoint = 'http://team-solenya-product-dev.azurewebsites.net/';
jest.mock("react-dom");


const fetchData = testData[0];
fetchMock.get(productServiceEndpoint, fetchData);

afterEach(() => {
    jest.resetAllMocks();
})
describe("fetch", () => {
    it("calls fetch with the data URL", (done) => {
        fetchDataToJSON(productServiceEndpoint)
            .then(data => {
                expect(data).toEqual(fetchData);
                done();
            })
    })

    it("calls fetch with the right endpoint", (done) => {
        fetchDataToJSON(productServiceEndpoint)
        .then(() => {
            expect(fetchMock.lastUrl()).toEqual(productServiceEndpoint);
            done();
        })
    })
})

