import {Vector2D} from "./Vector2D.js";

export class Engine {
    constructor(canvas, gravity, friction) {
        this.canvas = canvas;
        this.gravity = gravity;
        this.friction = friction;
        this.objects = [];
    }

    /**
     * Runs the rendering
     */
    run() {
        const ctx = this.canvas.getContext('2d');

        let timeLast = null;

        const loop = (time) =>{
            ctx.clearRect(0, 0, scene.width, scene.height);

            for(const obj of this.objects){
                if (timeLast)
                    obj.update((timeLast - time) / 1000);
                obj.render(ctx);
            }

            timeLast = time;
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }

    /**
     * Adds an object to the canvas
     * @param object an object
     */
    addObject(object){
        this.objects.push(object);
    }

    /**
     * Gets the size of the canvas
     * @returns {Vector2D}
     */
    get size(){
        return new Vector2D(scene.width, scene.height);
    }
}
