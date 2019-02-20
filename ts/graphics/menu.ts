import * as Draw from "./draw";
import * as GameState from '../game/gameState';
export class MainMenu {    
    public menuContainer = new PIXI.Container();
    public newGameContainer = new PIXI.Container();
    public newGameButton = new PIXI.Graphics();
    constructor() {
        this.newGameButton.setParent(this.newGameContainer);
        this.newGameContainer.setParent(this.menuContainer);

        this.newGameButton.lineStyle(2, 0xFF00FF, 1);
        this.newGameButton.beginFill(0xFF00BB, 0.25);
        this.newGameButton.drawRoundedRect(Draw.draw.app.view.width/2, Draw.draw.app.view.height/2, 150, 50, 4);
        this.newGameButton.endFill();

        this.newGameButton.interactive = true;
        this.newGameButton.buttonMode = true;

        this.newGameButton.on('pointerdown', this.clickNewGame);


        Draw.draw.app.stage.addChild(this.menuContainer);
        Draw.draw.app.stage.addChild(this.newGameContainer);
        Draw.draw.app.stage.addChild(this.newGameButton);
    }

    private clickNewGame(){
        GameState.GameStateSingleton.state = "game";
    }
}