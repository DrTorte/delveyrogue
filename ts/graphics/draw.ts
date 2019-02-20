class Draw {
    public app = new PIXI.Application();

    initiate(){
        document.body.appendChild(this.app.view);
    }
}

export const draw : Draw = new Draw();