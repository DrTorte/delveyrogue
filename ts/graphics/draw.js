"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("pixi.js/bin/pixi.js");
require("p2");
class Draw {
    constructor() {
        this.app = new PIXI.Application();
    }
    initiate() {
        document.body.appendChild(this.app.view);
        let bunny = PIXI.Sprite.fromImage("assets/bunny.png");
        bunny.anchor.set(0.5);
        bunny.x = this.app.screen.width / 2;
        bunny.y = this.app.screen.height / 2;
        bunny.filters;
        this.app.stage.addChild(bunny);
        this.app.ticker.add(function (delta) {
            bunny.rotation += .05 * delta;
        });
    }
}
exports.Draw = Draw;
//# sourceMappingURL=draw.js.map