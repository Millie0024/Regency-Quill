"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAnnouncementPrompt = buildAnnouncementPrompt;
function buildAnnouncementPrompt(data) {
    var _a;
    return "\nWrite a refined Regency-era society announcement addressed to \"Dearest Gentle Reader\".\n\nAnnouncement type: ".concat(data.announcementType, "\nNames involved: ").concat(data.names, "\nTone: ").concat(data.tone, "\nScandal level: ").concat((_a = data.scandalLevel) !== null && _a !== void 0 ? _a : "mild", "\n\nGuidelines:\n- Write in third person\n- Use an editorial, newspaper-style voice\n- Maintain elegance, wit, and playful drama\n- Avoid naming real historical figures\n- Keep the announcement tasteful and celebratory\n\nEvent description:\n").concat(data.message, "\n");
}
