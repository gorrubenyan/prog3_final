var socket = io.connect();
var side = 20;
var matrix = [[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
[0, 0, 1, 0, 0, 0, 0, 1, 7, 7, 7, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[0, 1, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[0, 1, 1, 0, 0, 7, 4, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 1, 0, 1, 0, 7, 4, 1, 5, 0, 0, 2, 0, 0, 4, 3, 3, 1, 0, 0, 2, 0, 0, 4, 0, 0, 1, 0, 0],
[1, 0, 0, 1, 1, 0, 0, 1, 5, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 1, 1, 0, 1, 0, 0, 1, 2, 0, 0, 2, 5, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 0, 1, 1, 1, 0, 0, 1, 5, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 0, 1, 0, 0, 0, 3, 1, 5, 0, 0, 0, 5, 3, 4, 0, 7, 1, 0, 0, 8, 8, 8, 8, 8, 7, 8, 8, 8],
[1, 0, 1, 1, 0, 0, 3, 1, 0, 7, 0, 0, 5, 3, 0, 0, 7, 1, 0, 0, 8, 8, 8, 8, 8, 7, 8, 8, 8],
[1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 7, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[0, 1, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[0, 1, 1, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 1, 8, 8, 8],
[1, 1, 0, 1, 0, 0, 4, 1, 5, 0, 0, 2, 0, 0, 4, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 1, 8, 8, 8],
[1, 0, 0, 1, 1, 0, 0, 1, 5, 7, 0, 0, 0, 7, 3, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 1, 1, 0, 1, 0, 0, 1, 2, 0, 0, 2, 5, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 1, 8, 8, 8],
[1, 0, 1, 1, 1, 0, 0, 1, 5, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 0, 1, 0, 0, 0, 3, 1, 5, 0, 0, 0, 5, 0, 4, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 8, 8, 8, 8, 8, 0, 8, 8, 8],
[1, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8]


];


var grassArr = [];
var xotakerner = [];
var Gishatich = [];
var wifii = [];
var youtude = [];
var dinamitt = [];
var exanak = "garun";


myVar = setInterval(function () {
    if (exanak == "garun") {
        exanak = "amar"
    }
    else if (exanak == "amar") {
        exanak = "ashun"
    }
    else if (exanak == "ashun") {
        exanak = "dzmer"
    }
    else if (exanak == "dzmer") {
        exanak = "garun"
    }

}, 2000);


function setup() {

    if (exanak == "garun") {
        frameRate(20)
    }
    else if (exanak == "amar") {
        frameRate(10)

    }
    else if (exanak == "ashun") {
        frameRate(8)
    }
    else if (exanak == "dzmer") {
        frameRate(4)
    }

    createCanvas(matrix[0].length * side, matrix.length * side);


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xotaker = (new Xotaker(x, y))
                xotakerner.push(xotaker)
            }
            else if (matrix[y][x] == 3) {
                var gishaticnher = (new gishatich(x, y))
                Gishatich.push(gishaticnher)
            }
           
            else if (matrix[y][x] == 4) {
                wifii.push(new wifi(x, y));
            }
            else if (matrix[y][x] == 5) {
                youtude.push(new youtube(x, y));
            }
           
            else if (matrix[y][x] == 7) {
                dinamitt.push(new Dinamit(x, y));
            }
            else if (matrix[y][x] == 8) {

            }
        }
    }


}




function draw() {





//////////////////////////////////////      Statistika     //////////////////////////////////
if(frameCount % 60 == 0){
    var kadr = {
        "xotakerneri qanaky-": xotakerner.length, 
        "gishatichneri qanaky-": Gishatich.length,
        // "wifineri qanaky-": wifii.length,
        // "youtubei qanaky-": youtude.length,
        // "dinamiti qanaky-": dinamitt.length,
    };
    var myJSON = JSON.stringify(kadr);
    function handleSubmit(evt) {
        socket.emit("send statistics", myJSON);
    }
    handleSubmit();
}












    background('#A8EBF7');
    noStroke();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            /////////////////////            Xot               ////////////////////////////////////////

            if (matrix[y][x] == 1 && exanak == "amar") {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && exanak == "garun") {
                fill("#05F8AB");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 1 && exanak == "ashun") {
                fill("#FCF3CF");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 1 && exanak == "dzmer") {
                fill("#73C6B6  ");
                rect(x * side, y * side, side, side);
            }

            ///////////////////             Etnashert            /////////////////////////////////////////////////

            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

            ///////////////////////        Xotaker             /////////////////////////////////////


            else if (matrix[y][x] == 2 && exanak == "amar") {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2 && exanak == "garun") {
                fill("#F9E79F");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2 && exanak == "ashun") {
                fill("#F4D03F");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2 && exanak == "dzmer") {
                fill("#B7950B");
                rect(x * side, y * side, side, side);
            }


            //////////////////              Gishatich            ////////////////////////////////////////////


            else if (matrix[y][x] == 3 && exanak == "amar") {
                fill("red");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3 && exanak == "garun") {
                fill("rgb(172, 22, 22)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3 && exanak == "ashun") {
                fill("rgb(148, 22, 22)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3 && exanak == "dzmer") {
                fill("rgb(114, 52, 52)");
                rect(x * side, y * side, side, side);
            }

            /////////////////////       WiFi             /////////////////////////////



            else if (matrix[y][x] == 4 && exanak == "amar") {
                fill("blue");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4 && exanak == "garun") {
                fill("rgb(55, 55, 247)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4 && exanak == "ashun") {
                fill("rgb(64, 64, 207)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4 && exanak == "dzmer") {
                fill("rgb(38, 38, 128)");
                rect(x * side, y * side, side, side);
            }

            ///////////////////        youtube            //////////////////////////////



            else if (matrix[y][x] == 5 && exanak == "amar") {
                fill("black");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5 && exanak == "garun") {
                fill("rgb(34, 33, 33))");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5 && exanak == "ashun") {
                fill("rgb(56, 48, 48)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5 && exanak == "dzmer") {
                fill("rgb(56, 40, 40)");
                rect(x * side, y * side, side, side);
            }



          

            ////////////////////////////// Dinamit ///////////////////////////////////////////////////

            else if (matrix[y][x] == 7 && exanak == "amar") {
                fill("rgb(196, 9, 243)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 7 && exanak == "garun") {
                fill("rgb(197, 101, 221)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 7 && exanak == "ashun") {
                fill("rgb(122, 75, 134)");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 7 && exanak == "dzmer") {
                fill("rgb(85, 60, 92)");
                rect(x * side, y * side, side, side);
            }








        }
        if (exanak == "amar" || exanak == "ashun" || exanak == "garun") {
            for (var i in grassArr) {
                grassArr[i].bazmanal();

            }
        }
        else if (exanak == "dzmer") {
            for (var i in grassArr) {
                //  grassArr[i].sharjvel();

            }
        }

        for (var i in xotakerner) {
           // xotakerner[i].sharjvel()
            xotakerner[i].utel();
            xotakerner[i].bazmanal();
            xotakerner[i].mahanal();
        }

        for (var i in Gishatich) {
          //  Gishatich[i].sharjvel()
            Gishatich[i].utel();
          Gishatich[i].bazmanal();
            Gishatich[i].mahanal();
        }

      
        for (var i in wifii) {

            wifii[i].sharjvel()
            wifii[i].bazmanal()
            wifii[i].utel()
            wifii[i].mahanal()

        }
        for (var i in youtude) {

            youtude[i].sharjvel()
            youtude[i].bazmanal()
            youtude[i].utel()
            youtude[i].mahanal()

        }


        for (var i in dinamitt) {
            dinamitt[i].bazmanal()
            dinamitt[i].sharjvel()
            dinamitt[i].utel()
            // dinamitt[i].mahanal()

        }


    
     

        strokeWeight(4);
        fill("white");
        textSize(12 + (mouseX / width)*72);
        text(exanak, 10, 40);

    }






}