"use strict";

function scoreModule() {
    let score = 0;
    let scoreElement = null;

    function initScore() {
        scoreElement = document.getElementById('score');
    }

    function incrementScore() {
        score++;
        render();
    }

    function render() {
        scoreElement.textContent = score;
    }

    function drop() {
        score = 0;
        render();
    }

    return {
        drop: drop,
        increment: incrementScore,
        init: initScore
    };
}