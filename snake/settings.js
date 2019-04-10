"use strict";
const MAX_MAP_SIZE = 30;
const MIN_MAP_SIZE = 10;
const MAX_SPEED_SIZE = 15;
const MIN_SPEED_SIZE = 1;
const MAX_WIN_SIZE = 50;
const MIN_WIN_SIZE = 5;

function settingModule() {

    let rowsCount = 21;
    let colsCount = 21;
    let speed = 9;
    let winLength = 50;

    function getRowCount() {
        return rowsCount;
    }

    function getColsCount() {
        return colsCount;
    }

    function getspeed() {
        return speed;
    }

    function getWinLength() {
        return winLength;
    }

    function validateSettings() {
        if (rowsCount < MIN_MAP_SIZE || rowsCount > MAX_MAP_SIZE) {
            console.error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
            return false;
        }

        if (colsCount < MIN_MAP_SIZE || colsCount > MAX_MAP_SIZE) {
            console.error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
            return false;
        }

        if (speed < MIN_SPEED_SIZE || speed > MAX_SPEED_SIZE) {
            console.error('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
            return false;
        }

        if (winLength < MIN_WIN_SIZE || winLength > MAX_WIN_SIZE) {
            console.error('Неверные настройки, значение winLength должно быть в диапазоне [5, 50].');
            return false;
        }

        return true;
    }

    return {
        validate: validateSettings,
        rowsCount: getRowCount,
        colsCount: getColsCount,
        speed: getspeed,
        winLength: getWinLength
    };
}

/*let settings = {
     rowsCount: 21,
     colsCount: 21,
     speed: 9,
     winLength: 50,

     validate() {
         if (this.rowsCount < MIN_MAP_SIZE || this.rowsCount > MAX_MAP_SIZE) {
             console.error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
             return false;
         }

         if (this.colsCount < MIN_MAP_SIZE || this.colsCount > MAX_MAP_SIZE) {
             console.error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
             return false;
         }

         if (this.speed < MIN_SPEED_SIZE || this.speed > MAX_SPEED_SIZE) {
             console.error('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
             return false;
         }

         if (this.winLength < MIN_WIN_SIZE || this.winLength > MAX_WIN_SIZE) {
             console.error('Неверные настройки, значение winLength должно быть в диапазоне [5, 50].');
             return false;
         }

         return true;
     }
 };*/
