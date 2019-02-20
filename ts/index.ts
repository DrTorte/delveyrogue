import * as Draw from "./graphics/draw";
import { Base } from "./character/base";
import * as GameState from './game/gameState';
import { MainMenu } from './graphics/menu';

export class Index {

    public loop() {

        if (GameState.GameStateSingleton.state == "menu"){
            console.log("In menu, you!");
        } else if (GameState.GameStateSingleton.state == "game"){
            //do stuff. Stuff!
            console.log("yep.");
        }
    }

    public initiate(){
        Draw.draw.initiate();
        let menu = new MainMenu();
        this.loop();
    }
}

let index = new Index();

index.initiate();