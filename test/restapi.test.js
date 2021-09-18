const request = require("supertest");
const axios = require("axios");
const appRoot = require("app-root-path");

const app = require(appRoot + "/app");
const { sequelize } = require(appRoot + "/config/database");

jest.mock("axios");

describe("GET /api/v1/httpbin", () => {
    it("return httpbin response and code 200", async () => {
        const responseHttpBin = {
            data: {
                uuid: "87de87d8-5089-4a53-a2d7-2dab62f1a5e4"
            }
        };

        axios.get.mockResolvedValue(responseHttpBin);

        await request(app)
            .get("/api/v1/httpbin")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(async (response) => {
                expect(response.body.Message.uuid).toEqual(
                    "87de87d8-5089-4a53-a2d7-2dab62f1a5e4"
                );
            })
            .catch((err) => console.error(err));
    });
});
