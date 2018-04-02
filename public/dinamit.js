
class Dinamit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.directions = [];
            this.index = 7
       
    }
    bazmanal() {
        if (this.energy == 17) {
            var norDinamit = new Dinamit(this.x, this.y);
            dinamitt.push(norDinamit);
            this.energy = 5;
        }
    }
    // mahanal() {
    //     if (this.energy == 0) {
    //         for (var i in dinamitt) {
    //             if (this.x == dinamitt[i].x && this.y == dinamitt[i].y) {
    //                 dinamitt.splice(i, 1);
    //                 matrix[this.y][this.x] = 0;

    //             }

    //         }
    //     }
    // }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 7;
            this.energy--;
           
        }

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


    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 7;
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }

            for (var i in wifi) {
                if (wifi[i].x == this.x && wifi[i].y == this.y) {
                    wifi.splice(i, 1);
                     break;
                 }
    
            }
            for (var i in gishatich) {
                if (gishatich[i].x == this.x && gishatich[i].y == this.y) {
                    gishatich.splice(i, 1);
                     break;
                 }
    
            }
    
            for (var i in Grass) {
                if (Grass[i].x == this.x && Grass[i].y == this.y) {
                    Grass.splice(i, 1);
                     break;
                 }
    
            }
    
    
            for (var i in youtube) {
                if (youtube[i].x == this.x && youtube[i].y == this.y) {
                    youtube.splice(i, 1);
                     break;
                 }
    
            }

        }
        else {
            this.sharjvel();
        }


    }


}


