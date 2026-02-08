"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLetterPrompt = buildLetterPrompt;
function buildLetterPrompt(data) {
    var _a;
    return "\nWrite a Regency-era love letter.\n\nRecipient: ".concat(data.recipient, "\nSender: ").concat((_a = data.sender) !== null && _a !== void 0 ? _a : "The Author", "\nTone: ").concat(data.tone, "\nLength: ").concat(data.length, "\n\nGuidelines:\n- Begin with a gentle salutation addressing the recipient\n- Use refined, romantic language appropriate to the Regency period\n- Express affection with emotional restraint and sincerity\n- Avoid modern phrasing or references\n- End with a graceful closing and the sender\u2019s name\n\nModern message:\n").concat(data.message, "\n");
}
