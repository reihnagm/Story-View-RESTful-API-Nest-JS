"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryViewContent = void 0;
const typeorm_1 = require("typeorm");
let StoryViewContent = class StoryViewContent {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        unsigned: true,
    }),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        unique: true,
        length: "36"
    }),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "longtext"
    }),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: "36"
    }),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "uid_content_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: "255",
        default: ''
    }),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "backgroundColor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "tinyint",
        default: 0
    }),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "isBackgroundColor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Object)
], StoryViewContent.prototype, "updatedAt", void 0);
StoryViewContent = __decorate([
    (0, typeorm_1.Entity)()
], StoryViewContent);
exports.StoryViewContent = StoryViewContent;
//# sourceMappingURL=story_view_content.entity.js.map