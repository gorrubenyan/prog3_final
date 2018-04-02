
class gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.directions = [];
        this.index = 3;
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }

    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }

            }
            for (var i in xotakerner) {
            if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                xotakerner.splice(i, 1);
                 break;
             }

        }

        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        if (this.energy == 10) {
            var norGi = new gishatich(this.x, this.y);
            Gishatich.push(norGi);
            this.energy = 5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in Gishatich) {
                if (this.x == Gishatich[i].x && this.y == Gishatich[i].y) {
                    Gishatich.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }

}

