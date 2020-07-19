"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.understadingText = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const axios_1 = tslib_1.__importDefault(require("axios"));
const http = "https://luis-book-hack.cognitiveservices.azure.com/luis/prediction/v3.0/apps/d737ef8d-f143-4e55-a281-70394c8e84a7/slots/production/predict?subscription-key=fc8c42451f154881937ed162e8a9de8f&verbose=true&show-all-intents=true&log=true&query=";
function understadingText(message) {
    axios_1.default.get(http + message)
        .then(response => {
        return response.data.prediction;
    })
        .catch(error => {
        console.log(error);
        throw new rest_1.HttpErrors.UnprocessableEntity('Erro ao tentar se comunicar com Luis Microsoft');
    });
}
exports.understadingText = understadingText;
//# sourceMappingURL=luis-microsoft.service.js.map