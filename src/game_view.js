const MapData = require('./map')

class GameView {
    constructor(){
        const GRID = [{ x: 3, y: 5, type: 1 }, { x: 5, y: 5, type: 1 },
                    { x: 4, y: 4, type: 2 }, { x: 4, y: 6, type: 2 }]
        const GRID_X_LEN = 10;
        const GRID_Y_LEN = 12;
        const REC_SIZE = 50;

        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = GRID_X_LEN * REC_SIZE;
        this.canvas.height = GRID_Y_LEN * REC_SIZE;

        this.map = new MapData(GRID_X_LEN, GRID_Y_LEN, GRID);
    }

    draw(){
        this.map.drawBackground(this.ctx);
    }
}

module.exports = GameView;