function WorldManager(world) {
    this.world = world;
};

WorldManager.prototype.play = function (n, sleepTime) {
    var sleep = sleepTime || 1000;
    var container = document.getElementById('container');
    container.innerHTML = this.world.toString();
    var turnsCount = 0;

    var tryNextTurn = function () {
        if (turnsCount < n) {
            document.title = turnsCount;
            turnsCount++;
            makeTurn();
        }
    };

    var makeTurn = function () {
        setTimeout(function () {
            container.innerHTML = this.world.toString();
            this.world.turn();
            tryNextTurn();
        }, sleep);
    };

    tryNextTurn();
};

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var bigPlan = 
    
          [ "####################################################################################################",
            "#***   #    #    ***         #    #      o         #    #      o         #    #      o     *** #  ##",
            "#***             ***                         ***                     ***                   ***     #",
            "#*** ***   ##### ***      ***    #####       ***       #####         ***     #####         ***     #",
            "##   ***   #   #    ##    ***    #   #    ## ***       #   #    ##   ***     #   #    ##           #",
            "###  ***      ##     #    ***       ##     #              ##     #              ##     #           #",
            "#           ####     #            ###      #            ###      #            ###      #     #     #",
            "#   ####                  ####                  ####                  ####                  ####   #",
            "#   ##       o            ##       o            ##       o            ##       o           ###     #",
            "# o  #         o       ### #         o       ### #         o       ### #         o       #####     #",
            "#    #                     #                     #                     #                     #     #",
            "#      #    #      o         #    #      o         #    #      o         #    #      o         #  ##",
            "#                                             ******                                               #",
            "#          #####                 #####        ******   #####                 #####                 #",
            "##         #   #    ##           #   #    ##  ******   #   #    ##           #   #    ##           #",
            "###           ##     #              ##     #  ******      ##     #              ##     #           #",
            "#           ###      #            ###      #            ###      #            ###      #   #       #",
            "#   ####                  ####                  ####         ***      ####                 #####   #",
            "#   ##       o            ##       o   ******   ##       o   ***      ##       o           ###     #",
            "# o  #         o       ### #         o   ****### #         o ***   ### #         o       ######    #",
            "#    #                     #               ***   #                     #                     ###   #",
            "#      #    #      o         #    #      o         #    #      o         #    #      o   ***   #####",
            "#                         #                   ##  #                                      ***      ##",
            "#          #######        ##     #####                 #####        *****    #####       *** ***   #",
            "##         #  ########   ##      #   #    ##           #   #    ##  *****    #   #    ##     ***   #",
            "###           ####   #   #          ##     #              ##     #  *****       ##     #     *** ###",
            "#           #####     #           ###      #            ###      #  ***       ###      #          ##",
            "#   ####                  ####                  ####                  ####                  ####  ##",
            "#   ##       o            ##       o            ##       o            ##       o            ##    ##",
            "# o  #         o       ### #         o       ### #         o       ### #         o       ### #   ###",
            "#      #    #      o         #    #      o         #    #      o ***     #    #      o         #####",
            "#                                                                ***                               #",
            "#          #####        ***      #####                 #####     *** ***     #####            ***  #",
            "##         #   #    ##  ***      #   #    ##           #   #    ##   ***     #   #    ##      ***  #",
            "###           ##     #  ***         ##     #              ##     #   ***        ##     #      ***  #",
            "#           ###      #            ###      #            ###      #            ###      #        ***#",
            "#   ####         ******   ####                  ####                  ####      ******      ###****#",
            "#   ##       o   ******   ##       o            ##       o            ##       o******      ## ****#",
            "# o  #         o ******#####         o       #####         o       #####        ******   ##### *** #",
            "####################################################################################################" ];


var valleyPlan =
           ["############################",
            "#####***              ######",
            "## *****          ***   **##",
            "#  **##**        *****o  *##",
            "#    ***         *##**    *#",
            "#                *##***    #",
            "#           *    *##**     #",
            "#** o     **#*            *#",
            "#****   ***#***         ***#",
            "#********** ##***   o  ****#",
            "##*********###***********###",
            "############################"];


/*
var world = new World(bigPlan, {
    "#": Wall,
    "~": WallFollower,
    "o": BouncingCritter
});
*/


var world = new LifelikeWorld(bigPlan, {
    "#": Wall,
    "o": PlantEater,
    "*": Plant
});

var worldManager = new WorldManager(world);
worldManager.play(1000, 100);
