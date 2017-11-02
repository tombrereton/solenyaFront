import  fetchDataToJSON  from "../DataAccess/dataFetcher";
import fetchMock from "fetch-mock";
import React from "react";
import TestData from "../DataAccess/ProductApiDataTest.json";
import {ProductServiceEndpoint} from '../config';
jest.mock("react-dom");


const fetchData = TestData[0];
fetchMock.get(ProductServiceEndpoint, fetchData);

afterEach(() => {
    jest.resetAllMocks();
})
describe("fetch", () => {
    it("calls fetch with the data URL", (done) => {
        fetchDataToJSON(ProductServiceEndpoint)
            .then(data => {
                expect(data).toEqual(fetchData);
                done();
            })
    })

    it("calls fetch with the right endpoint", (done) => {
        fetchDataToJSON(ProductServiceEndpoint)
        .then(() => {
            expect(fetchMock.lastUrl()).toEqual(ProductServiceEndpoint);
            done();
        })
    })
})

