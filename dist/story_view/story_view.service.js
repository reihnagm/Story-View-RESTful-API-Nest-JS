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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryViewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const story_view_content_entity_1 = require("../entities/story_view_content.entity");
const story_view_type_entity_1 = require("../entities/story_view_type.entity");
const common_2 = require("@nestjs/common");
const store_story_view_dto_1 = require("../dto/store-story-view.dto");
const update_story_view_dto_1 = require("../dto/update-story-view.dto");
let StoryViewService = class StoryViewService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findAllStoryViewContent() {
        return await (0, typeorm_3.getRepository)(story_view_content_entity_1.StoryViewContent)
            .createQueryBuilder("a")
            .select("a.uid, a.content, a.backgroundColor, a.isBackgroundColor, a.uid_content_type, a.createdAt, a.updatedAt")
            .orderBy("a.id", "DESC")
            .getRawMany();
    }
    async findStoryViewContent(uid) {
        return await (0, typeorm_3.getRepository)(story_view_content_entity_1.StoryViewContent)
            .createQueryBuilder("a")
            .select("a.uid, a.content, a.backgroundColor, a.isBackgroundColor, a.uid_content_type, a.createdAt, a.updatedAt")
            .where("uid = :uid", { uid: uid })
            .getRawOne();
    }
    async update(uid, data) {
        return await (0, typeorm_3.getRepository)(story_view_content_entity_1.StoryViewContent).update({ uid: uid }, {
            content: data.content
        });
    }
    async findAllStoryContentType(uid) {
        return await (0, typeorm_3.getRepository)(story_view_type_entity_1.StoryViewType)
            .createQueryBuilder("a")
            .select("a.id, a.uid, a.type")
            .where("a.uid = :uid", { uid: uid })
            .getRawOne();
    }
    async storeStoryViewContent(data) {
        return await (0, typeorm_3.getRepository)(story_view_content_entity_1.StoryViewContent).save(data);
    }
    async destroyStoryViewContent(uid) {
        return await (0, typeorm_3.getRepository)(story_view_content_entity_1.StoryViewContent).delete({
            uid: uid
        });
    }
};
__decorate([
    __param(0, (0, common_2.Param)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, story_view_content_entity_1.StoryViewContent]),
    __metadata("design:returntype", Promise)
], StoryViewService.prototype, "update", null);
__decorate([
    __param(0, (0, common_2.Param)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryViewService.prototype, "findAllStoryContentType", null);
__decorate([
    __param(0, (0, common_2.Param)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_story_view_dto_1.StoreStoryViewDto]),
    __metadata("design:returntype", Promise)
], StoryViewService.prototype, "storeStoryViewContent", null);
__decorate([
    __param(0, (0, common_2.Param)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoryViewService.prototype, "destroyStoryViewContent", null);
StoryViewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(story_view_content_entity_1.StoryViewContent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoryViewService);
exports.StoryViewService = StoryViewService;
//# sourceMappingURL=story_view.service.js.map