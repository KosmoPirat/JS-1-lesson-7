"use strict";

function statusModule() {
    let condition = null;

    function Playing() {
        condition = 'playing';
    }

    function Stopped() {
        condition = 'stopped';
    }

    function Finished() {
        condition = 'finished';
    }

    function inPlay() {
        return condition === 'playing';
    }

    function onStop() {
        return condition === 'stopped';
    }

    return {
        setPlaying: Playing,
        setStopped: Stopped,
        setFinished: Finished,
        isPlaying: inPlay,
        isStopped: onStop,
    };
}

/*let status = {
    condition: null,

    setPlaying() {
        this.condition = 'playing';
    },

    setStopped() {
        this.condition = 'stopped';
    },

    setFinished() {
        this.condition = 'finished';
    },

    isPlaying() {
        return this.condition === 'playing';
    },

    isStopped() {
        return this.condition === 'stopped';
    }
};*/
