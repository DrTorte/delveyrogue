"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const draw_1 = require("./graphics/draw");
class Index {
    constructor() {
        this.draw = new draw_1.Draw();
    }
    loop() {
        let char = new Base();
        console.log(char);
        this.loop();
    }
    initiate() {
        this.draw.initiate();
        this.loop();
    }
}
exports.Index = Index;
let index = new Index();
index.initiate();
//# sourceMappingURL=index.js.map