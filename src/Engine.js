import {Vector2D} from "./Vector2D.js";

export class Engine {
    constructor(canvas, gravity, friction) {
        this.canvas = canvas;
        this.gravity = gravity;
        this.friction = friction;
        this.objects = [];
        this.enhancers = [];
    }

    /**
     * Runs the rendering
     */
    run() {
        const ctx = this.canvas.getContext('2d');

        let timeLast = null;

        const loop = (time) => {
            ctx.clearRect(0, 0, scene.width, scene.height);

            for (const object of this.objects) {
                if (timeLast) {
                    object.update((time - timeLast) / 1000);
                }
                object.render(ctx);
            }

            for (const enhancer of this.enhancers) {
                enhancer(ctx);
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
    addObject(object) {
        this.objects.push(object);
    }

    enhance(enhancer) {
        this.enhancers.push(enhancer);
    }


    /**
     * Gets the size of the canvas
     * @returns {Vector2D}
     */
    get size() {
        return new Vector2D(scene.width, scene.height);
    }
}
