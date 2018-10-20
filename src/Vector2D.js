export class Vector2D{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }


    /**
     * Adds in place the vector
     * @param vector the vector to be added
     * @returns {Vector2D}
     */
    addInPlace(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    /**
     * Scales in place the vector
     * @param ratio the ratio to be scaled
     * @returns {Vector2D}
     */
    scaleInPlace(ratio){
        this.x *= ratio;
        this.y *= ratio;
        return this;
    }

    /**
     * Scaling and creating a new object
     * @param ratio the ratio to be scaled
     * @returns {Vector2D}
     */
    scale(ratio){
        return new Vector2D(this.x * ratio, this.y * ratio)
    }
}
