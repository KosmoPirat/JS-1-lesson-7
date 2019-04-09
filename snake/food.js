"use strict";

function foodModul() {

    let coord = {
        x: null,
        y: null
    };

    function setCoordinates(point) {
        coord.x = point.x;
        coord.y = point.y;
    }

    function getCoordinates() {
        return {x: coord.x, y: coord.y};
    }

    function isCoordInPoint(point) {
        return coord.x === point.x && coord.y === point.y;
    }

    return {
        setFoodCoordinates: setCoordinates,
        getFoodCoordinates: getCoordinates,
        isFoodPoint: isCoordInPoint
    };
}

/*let food = {
    x: null,
    y: null,

    setFoodCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    getFoodCoordinates() {
        return {x: this.x, y: this.y};
    },

    isFoodPoint(point) {
        return this.x === point.x && this.y === point.y;
    }
};*/
