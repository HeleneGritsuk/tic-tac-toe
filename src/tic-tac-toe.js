class TicTacToe {
    constructor() {
        this.matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
        ];

        this.symbol='x';
        this.winner=null;
        console.log(this.matrix);
    }
    getCurrentPlayerSymbol() {
        var count=0;
        for (var i=0;i<3;i++)
         for (var j=0;j<3;j++) {
            if(this.matrix[i][j]==0)
            {
                //console.log(this.matrix[i][j]);
                count++;
            }
         }
        this.symbol = (count%2==0) ? 'o' : 'x';
        console.log("счетчик", count);
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        console.log("ячейка=", this.matrix[rowIndex][columnIndex]);
        console.log("строка/колонка", rowIndex,columnIndex);
        if(this.matrix[rowIndex][columnIndex]==0) {
            console.log("записали: ", this.symbol);
        this.matrix[rowIndex][columnIndex]=this.symbol;
        this.symbol = (this.symbol=='x') ? 'o' : 'x';
        }
    }

    isFinished() {
        for(var x=0,y=0;x<3;x++,y++) {
        if((this.matrix[x][0]==this.matrix[x][1])&&(this.matrix[x][1]==this.matrix[x][2])&&(this.matrix[x][0]!=0)) {
            this.winner=this.matrix[x][0];
            return true;
         }
        if((this.matrix[0][y]==this.matrix[1][y])&&(this.matrix[1][y]==this.matrix[2][y])&&(this.matrix[0][y]!=0)) {
            this.winner=this.matrix[0][y];
            return true;
         }
        }
        if ((this.matrix[0][0]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[2][2])&&(this.matrix[0][0]!=0)) {
            this.winner=this.matrix[0][0];
            return true;
        }
        if ((this.matrix[0][2]==this.matrix[1][1])&&(this.matrix[1][1]==this.matrix[2][0])&&(this.matrix[0][2]!=0)) {
            this.winner=this.matrix[0][2];
            return true;
         }

        if (this.noMoreTurns()) return true;

        return false;
    }

    getWinner() {
        if(this.isFinished()) return this.winner;
        else return null;
    }

    noMoreTurns() {
        var count=0;
        for (var i=0;i<3;i++)
         for (var j=0;j<3;j++) {
            if(this.matrix[i][j]==0)
            {
                //console.log(this.matrix[i][j]);
                count++;
            }
         }

         return (count==0) ? true : false;
    }

    isDraw() {
        if ((this.noMoreTurns()) && (!this.getWinner())) return true;
        else return false;

    }

    getFieldValue(rowIndex, colIndex) {
        if(!this.matrix[rowIndex][colIndex]) {
            return null;
        }

        return (this.matrix[rowIndex][colIndex]);

    }
}

module.exports = TicTacToe;
