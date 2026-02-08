"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var generate_1 = require("./api/generate");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/ping", function (_req, res) {
    res.send("pong");
});
app.post("/api/generate", generate_1.generateHandler);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("\uD83D\uDD8B\uFE0F Regency Quill server running on port ".concat(PORT));
});
