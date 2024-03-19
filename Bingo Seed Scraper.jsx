/*
Use the below command to run this program in your command prompt. If you navigate the command prompt to the folder this file is in, you can just use the filename

node "[Folder Path you saved this file in]\Bingo Seed Scraper.jsx"
*/
var printRate = 2000000; //How often will the console print the seed and #valid entries to show it is still running.
                         //This should print every ~30 seconds, but depending on your computer's strength, that may vary
                         //If it is set too low, the command prompt may overflow and you may lose information
                         //if it is set too high, the program may appear stagnant
var wsrBingoList =
[
    "Beat an opponent 6-0 in Table Tennis - Match",//0
    "Beat an opponent in an 11-Point match in Table Tennis - Match",
    "Beat the opponents by 10 points or more in Basketball - Pickup Game",
    "Clear the first 3 levels in Swordplay Showdown",
    "Collect an i Point on Wedge Island in Island Flyover",
    "Complete 3 stages in Canoeing",//5
    "Complete Clasic B in Frisbee Golf",
    "Complete Classic A in Frisbee Golf",
    "Complete Classic A in Golf",
    "Complete Classic B in Golf",
    "Complete Classic C in Frisbee Golf",//10
    "Complete Classic C in Golf",
    "Complete Resort A in Frisbee Golf",
    "Complete Resort A in Golf",
    "Complete Resort B in Frisbee Golf",
    "Complete Resort B in Golf",//15
    "Complete Resort C in Frisbee Golf",
    "Complete Resort C in Golf",
    "Complete a stage in Canoeing - Expert",
    "Complete a stage of Power Cruising without going out of bounds",
    "Complete any 3 hole course Blind (Holding 2 before selecting course)",//20
    "Complete any Cycling race without going down to 0 hearts",
    "Complete the \"Across the Bridge\" race in Cycling",
    "Complete the \"Up the Volcano\" race in Cycling",
    "Complete the Power Crusing course \"Lagoon\"",
    "Complete the Power Crusing course \"Shoals\"",//25
    "Crash 5 times in Island Flyover",
    "Crash into lava in Island Flyover",
    "Fall off a cliff/into a river twice in Cycling",
    "Finish 1st in any Cycling race",
    "Finish any 3 Hole course in Frisbee Golf without touching bunkers or water",//30
    "Finish any 3 Hole course in Golf without touching bunkers or water",
    "Finish any Frisbee Golf 3 hole course with only the Driver Frisbee",
    "Gain 30 points in Table Tennis - Return Challenge without hitting any can",
    "Get 100 or more points in Archery - Beginner",
    "Get 1000 or more points in Wakeboarding - Intermediate",//35
    "Get 15 or more points in Basketball - 3 Point Contest",
    "Get 25 points or more in Skydiving",
    "Get 3 mid-air catches in Frisbee Dog",
    "Get 3 spares in any Bowling mode",
    "Get 50 or more points in Archery - Expert",//40
    "Get 500 or more points in Frisbee Dog",
    "Get 700 or more points in Wakeboarding - Expert",
    "Get a score higher than 5 in 4 gates on Power Cruising",
    "Get a score of 1.0 on 5 gates in Power Cruising",
    "Get a score of 1600 or over in Wakeboarding - Beginner",//45
    "Get a score of over 1500 in Bowling - 100-Pin Game",
    "Get a score of over 70 points in Archery - Intermediate",
    "Get a time of under 2:05.00 in Cycling - To the Beach",
    "Get a turkey in any bowling mode",
    "Get any stamp in Archery",//50
    "Get any stamp in Basketball - 3 Point Contest",
    "Get any stamp in Basketball - Pickup Game",
    "Get any stamp in Bowling - 100 Pin Game",
    "Get any stamp in Bowling - Spin Control",
    "Get any stamp in Bowling - Standard Game",//55
    "Get any stamp in Canoeing",
    "Get any stamp in Cycling",
    "Get any stamp in Frisbee Dog",
    "Get any stamp in Frisbee Golf",
    "Get any stamp in Golf",//60
    "Get any stamp in Island Flyover",
    "Get any stamp in Power Crusing",
    "Get any stamp in Skydiving",
    "Get any stamp in Swordplay - Duel",
    "Get any stamp in Swordplay - Showdown",//65
    "Get any stamp in Swordplay - Speed Slice",
    "Get any stamp in Table Tennis - Match",
    "Get any stamp in Table Tennis - Return Challenge",
    "Get any stamp in Wakeboarding",
    "Get over 100 points in Bowling - Spin Control",//70
    "Get over 100 points in Table Tennis - Return Challenge",
    "Get over 170 points in a Standard Game of Bowling",
    "Get par/under par on any 3 hole course in Golf",
    "Get the \"Miguels's Plane\" i Point in Island Flyover",
    "Get the i Point in the Volcano in Island Flyover",//75
    "Get the i Point on the Bowling court in Island Flyover",
    "Get two slam dunks in Basketball - Pickup game",
    "Give Up on 5 different holes in Golf",
    "Give up on 2 different holes in Golf with only water hazards",
    "Hit 10 cans in Table Tennis - Return Challenge",//80
    "Hit any secret target in Archery",
    "Hit the 10 point mark on Archery 3 times in a row",
    "Hit the barriers every throw in Bowling - Spin Control (Minus the 10th frame)",
    "Hit the five point area in Archery",
    "Hit the server's face with a ball 10 times in Table Tennis - Return Challenge",//85
    "Hit your opponent in the face 3 times with a ball in Table Tennis - Match",
    "Pop a balloon in Frisbee Dog two times",
    "Pop all 5 time balloons in the Power Cruising Free Practice",
    "Ride over 3 different rocks/bananas in Cycling (Doesn't have to be all in 1 race)",
    "Slice 15 items in Swordplay - Speed Slice practice",//90
    "Slice two candles in Swordplay - Speed Slice",
    "Slice two clocks in Swordplay - Speed Slice",
    "Slice two pieces of bread in Swordplay - Speed Slice",
    "Stun your opponent by blocking 7 times in Swordplay - Duel",
    "Take a picture with Gwen in Skydiving",//95
    "Win a game of Swordplay - Speed Slice without letting the opponent get any points",
    "Win a match of Swordplay - Duel without getting stuned by an opponent's block"
];

var wsrStampBingoList = [
    "1-Stage Master (Cycling)",//0
    "100 Pointer (Return Challenge)",
    "200 Point Dive (Skydiving)",
    "200 Pointer (Return Challenge)",
    "3-Stage Master (Cycling)",
    "50 Pointer (Return Challenge)",//5
    "5000-Pointer (Power Cruising)",
    "6-Stage Maste (Cycling)",
    "A Cut Above (Speed Slice)",
    "A Secret to Everybody (Archery)",
    "A for Effort (Frisbee Dog)",//10
    "Ace of Clubs (Golf)",
    "Back From the Brink (TT Match)",
    "Bag of Tricks (Wakeboarding)",
    "Balloon Animal (Frisbee Dog)",
    "Balloonatic (Island Flyover)",//15
    "Beginner Licence (Canoeing)",
    "Bonus Plumber (3-Point Contest)",
    "Bull Stampede (Archery)",//18
    "Buzzer Beater (Pickup Game)",
    "Camera Shy (Skydiving)",//20
    "Century Shot (Archery)",
    "Chip It In (Golf)",
    "Cliff-Hanger (Duel)",
    "Cut the Red Tape (Canoeing)",
    "Double Time (Speed Slice)",//25
    "Ducks in a Row (Canoeing)",
    "English Major (Spin Control)",
    "Epic Rally (TT Match)",
    "Expert Licence (Canoeing)",
    "First of Many (Cycling)",//30
    "Follow That Plane (Island Flyover)",
    "For the Birds (Skydiving)",
    "Friends in High Places (Skydiving)",
    "Gobble Gobble (Bowling)",
    "Golden Arm (Frisbee Dog)",//35
    "Good Dog (Frisbee Dog)",
    "Head First (Spin Control)",
    "High Five (Skydiving)",
    "Hole In One (Frisbee Golf)",
    "Hole-In-One (Golf)",//40
    "Hoop Hero (Pickup Game)",
    "Hot Hand (3-Point Contest)",
    "Hot Streak (3-Point Contest)",
    "Huge Air (Wakeboarding)",
    "In Your Face (TT Match)",//45
    "Intermediate Licence (Canoeing)",
    "Island Hopper (Island Flyover)",
    "King of Clubs (Golf)",
    "Last Gasp (Cycling)",
    "Last Mii Standing (Duel)",//50
    "Leisure Cruiser (Power Cruising)",
    "Lights Out (Pickup Game)",
    "Lucky Skip (Frisbee Golf)",
    "Master Carver (Wakeboarding)",
    "Met Your Match (Duel)",//55
    "Not a Scratch (Showdown)",
    "Off the Wall (100-Pin Game)",
    "On a Roll (Frisbee Golf)",
    "One for All (Spin Control)",
    "One-Hit Wonder (Duel)",//60
    "Perfect 10 (Showdown)",
    "Perfect Game (Bowling)",
    "Perfect Target (Frisbee Dog)",
    "Perfectly Matched (TT Match)",
    "Pin Dropper (100-Pin Game)",//65
    "Pin Dropper (Bowling)",
    "Pin Dropper (Spin Control)",
    "Pop Frenzy (Island Flyover)",
    "Power Cruiser (Power Cruising)",
    "Power Jumper (Power Cruising)",//70
    "Pro Bowler (Bowling)",
    "Psychic Slice (Speed Slice)",//72
    "Pure Shooter (3-Point Contest)",
    "Quick Draw (3-Point Contest)",
    "Recycler (Return Challenge)",//75
    "Rim Rattler (Pickup Game)",
    "Ringmaster (Power Cruising)",
    "Save Face (Return Challenge)",
    "Secret Strike (100-Pin Game)",
    "Sharpshooter (Archery)",//80
    "Slice and Dice (Speed Slice)",//81
    "Slicing Machine (Speed Slice)",
    "Smooth Landing (Wakeboarding)",
    "Split Spare (100-Pin Game)",
    "Split Spare (Bowling)",//85
    "Split Spare (Spin Control)",
    "Straight and Narrow (Frisbee Golf)",
    "Straight to the Point (Duel)",
    "Super Strike (100-Pin Game)",
    "Sure Shot (Archery)",//90
    "Sword Fighter (Showdown)",
    "Swordmaster (Showdown)",
    "Table Titan (TT Match)",
    "The Long Way Home (Wakeboarding)",
    "Triple Dip (Pickup Game)",//95
    "Under Par (Frisbee Golf)",
    "Under Par (Golf)",
    "Untouchable (Showdown)",
    "Wuhu Tour Gide (Island Flyover)"
];
var wiiSportsBingoList = [
    "Complete a Wii Fitness training session",//0
    "Finish 9-Hole Game in Golf",
    "Finish Beginner in Golf",
    "Finish Expert in Golf",
    "Finish Intermediate in Golf",
    "Finish any 3-Hole Golf course without touching bunkers or water",//5
    "Finish any Golf course Blind(Hold 2)",
    "Finish any course in Golf without using the driver",
    "Finish any game in Baseball",
    "Finish any game in Baseball with a mercy rule",
    "Get 140 or more points without a gutter ball",//10
    "Get 165 or more points in a Standard Game of Bowling",//11
    "Get 2 Home Runs in Baseball",
    "Get 3 Spares in Bowling",//13
    "Get 3 Spares with a different Color Ball then Blue(hold any button on D-Pad besides up)",//14
    "Get 3 Strikeouts in Baseball",//15
    "Get 3 Strikes in Bowling(Doesn’t have to be a Turkey)",//16
    "Get a Bunt Single in Baseball",
    "Get a Gold Medal in any Training Game",
    "Get a Silver Medal in any Training Game",
    "Get a Triple in Baseball",//20
    "Get a Turkey in Bowling",
    "Get all gutters in Bowling(Except the third throw on the 10th Frame)",
    "Get at least 10 points in Timing your Swing(Tennis Training)",
    "Get at least 12 points in Returning Balls(Tennis Training)",
    "Get at least 15 points in Batting Practice(Baseball Training)",//25
    "Get at least 15 points in Working the Bag(Boxing Training)",
    "Get at least 200 points in Target Practice(Golf Training)",
    "Get at least 25 points in Swing Control(Baseball Training)",
    "Get at least 30 points in Throwing Punches(Boxing Training)",
    "Get at least 450 points in Power Throws(Bowling Training)",//30
    "Get at least 5 points in Target Practice(Tennis Training)",
    "Get at least 50 points in Dodging(Boxing Training)",
    "Get past at least 5 stages in Putting(Golf Training)",
    "Get past at least 7 stages in Picking Up Spares(Bowling Training)",
    "Get past at least 7 stages in Spin Control(Bowling Training)",//35
    "Get within 500 ft. in Hitting the Green(Golf Training)",
    "Give Up on any 3-hole Course in Golf",
    "Have the CPU commit an error in Baseball",
    "Hit at least 5 Home Runs In Hitting Home Runs(Baseball Training)",
    "Win a Best-of-3 Match in Tennis",//40
    "Win a Best-of-5 Match in Tennis",
    "Win a Match in Boxing",
    "Win a Match in Boxing while only using one hand(doesn’t matter which hand)",
    "Win a Match in Boxing without dodging(No Slow-Mo Punches)",
    "Win a Single Match in Tennis",//45
    "Win any match in Tennis without losing a single point",
    "Win any match with the blue courts(Hold 2 until courts show up)"
];

function printBingoListArray(listNum)
{
  var list = wiiSportsBingoList;
  var formattingString = "*********************";
  var title = " Wii Sports Bingo Options ";
  if(listNum==2)
  {
    list = wsrBingoList;
    title = " Wii Sports Resort Normal Bingo Options ";
  }
  else if(listNum==3)
  {
    list = wsrStampBingoList;
    title = " Wii Sports Resort Stamp Bingo Options ";
  }
  console.log(formattingString + title + formattingString);
  for(var i = 0; i < list.length; i++)
  {
    console.log(i.toString() + ": " + list[i]);
  }
}
(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = i.pow(g, m); k = i.pow(2, k); n = k * 2; l(i.random(), j) })([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, seed) {
    var cardType = "Normal";
    var SEED = seed;
    var size = 5;

    // simpler generator that just does a random choice without duplicates
    Math.seedrandom(SEED);
    if (true) {
        var usedGoals = {};
        var bingoBoard = [];
        var bingoBoardNums = [];

        for (var i = 1; i <= 25; i++) {
            var randIndex = Math.floor(Math.random() * bingoList.length);
            while (usedGoals[randIndex]) {
                randIndex = Math.floor(Math.random() * bingoList.length);
            }
            usedGoals[randIndex] = true;

            var goal = bingoList[randIndex];
            if (typeof goal == 'string') {
                bingoBoard[i] = {"name": goal};
            } else {
                bingoBoard[i] = goal;
            }
            bingoBoardNums[i] = randIndex;
        }
        //console.log(bingoBoard);
        //console.log(bingoBoardNums);
        return bingoBoardNums;
    }
};

function compArrs(checkin,checkfor)
{
  for(var i = 0; i < checkfor.length; i++)
  {
    if(!checkin.includes(checkfor[i]))
    {
      return false;
    }
  }
  return true;
}
function getLineK(k,a,b,c,d,e,table,bingoList)
{
  return bingoList[table[k+a]]+", "+bingoList[table[k+b]]+", "+bingoList[table[k+c]]+", "+bingoList[table[k+d]]+", "+bingoList[table[k+e]];
}
function getLine(a,b,c,d,e,table,bingoList)
{
  return bingoList[table[a]]+", "+bingoList[table[b]]+", "+bingoList[table[c]]+", "+bingoList[table[d]]+", "+bingoList[table[e]];
}
function printBingos(table,bingoList,i)
{
  var msg = "Seed: " + i.toString() + "\n";
  for(var k = 0; k < 12; k++)
  {
    if(k<5)
    {
      msg += "Col " + (k+1).toString() + ": ";
      msg += getLineK(k,1,6,11,16,21,table,bingoList) + "\n";
    }
    else if(k<10)
    {
      msg += "Row " + (k-4).toString() + ": ";
      msg += getLineK((k-5)*5,1,2,3,4,5,table,bingoList) + "\n";
    }
    else if(k<11)
    {
      msg += "TLBR Diagonal: ";
      msg += getLine(1,7,13,19,25,table,bingoList) + "\n";
    }
    else
    {
      msg += "BLTR Diagonal: ";
      msg += getLine(5,9,13,17,21,table,bingoList) + "\n";
    }
  }
  console.log(msg)
}

function singleBingoScrape(generic, bingolist,endOnFirst,startSeed)
{
  var valcount = 0;
  console.log("Beginning search for seed containing a bingo using "+generic.toString() + ".\n\nWARNING: This may take multiple hours to complete");
  for (var i = startSeed; i <= 2147483647; i++)
  {
     var currSeed = i.toString();
     var table = bingoGenerator(bingolist,currSeed);
     var c = 1;
     var col1 = [table[c],table[c+5],table[c+10],table[c+15],table[c+20]];
     var row1 = [table[(c-1)*5+1],table[(c-1)*5+2],table[(c-1)*5+3],table[(c-1)*5+4],table[(c-1)*5+5]];
     c = 2;
     var col2 = [table[c],table[c+5],table[c+10],table[c+15],table[c+20]];
     var row2 = [table[(c-1)*5+1],table[(c-1)*5+2],table[(c-1)*5+3],table[(c-1)*5+4],table[(c-1)*5+5]];
     c = 3;
     var col3 = [table[c],table[c+5],table[c+10],table[c+15],table[c+20]];
     var row3 = [table[(c-1)*5+1],table[(c-1)*5+2],table[(c-1)*5+3],table[(c-1)*5+4],table[(c-1)*5+5]];
     c = 4;
     var col4 = [table[c],table[c+5],table[c+10],table[c+15],table[c+20]];
     var row4 = [table[(c-1)*5+1],table[(c-1)*5+2],table[(c-1)*5+3],table[(c-1)*5+4],table[(c-1)*5+5]];
     c = 5;
     var col5 = [table[c],table[c+5],table[c+10],table[c+15],table[c+20]];
     var row5 = [table[(c-1)*5+1],table[(c-1)*5+2],table[(c-1)*5+3],table[(c-1)*5+4],table[(c-1)*5+5]];
     var tlbr = [table[1],table[7],table[13],table[19],table[25]];
     var bltr = [table[5],table[9],table[13],table[17],table[21]];

     var genericmsg = "";
     var tasklist = [];
     if(compArrs(generic,col1))
     {
       genericmsg = "Col 1";
       tasklist = col1;
     }
     if(compArrs(generic,col2))
     {
       genericmsg = "Col 2";
       tasklist = col2;
     }
     if(compArrs(generic,col3))
     {
       genericmsg = "Col 3";
       tasklist = col3;
     }
     if(compArrs(generic,col4))
     {
       genericmsg = "Col 4";
       tasklist = col4;
     }
     if(compArrs(generic,col5))
     {
       genericmsg = "Col 5";
       tasklist = col5;
     }

     if(compArrs(generic,row1))
     {
       genericmsg = "Row 1";
       tasklist = row1;
     }
     if(compArrs(generic,row2))
     {
       genericmsg = "Row 2";
       tasklist = row2;
     }
     if(compArrs(generic,row3))
     {
       genericmsg = "Row 3";
       tasklist = row3;
     }
     if(compArrs(generic,row4))
     {
       genericmsg = "Row 4";
       tasklist = row4;
     }
     if(compArrs(generic,row5))
     {
       genericmsg = "Row 5";
       tasklist = row5;
     }

     if(compArrs(generic,tlbr))
     {
       genericmsg = "TLBR Diagonal";
       tasklist = tlbr;
     }
     if(compArrs(generic,bltr))
     {
       genericmsg = "BLTR Diagonal";
       tasklist = bltr;
     }
     if(genericmsg!="")
     {
       var finallist = "";
       for(var x =0; x < tasklist.length; x++)
       {
        finallist = finallist + tasklist[x].toString()+ ": "+ bingolist[tasklist[x]]+ "\n";
       }
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
       console.log("SEED: " + i.toString());
       console.log("Searched Combo found at " + genericmsg);
       console.log("Task List:");
       console.log(finallist);
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
       if(endOnFirst)
       {
         console.log("Search Completed after finding matching seed");
         return;
       }
       valcount++;
     }
     else if(i%printRate==0)
     {
       console.log("SEED: " + i.toString() + " | Valid Entries Calculated: " + valcount.toString());
     }
   }
   console.log("Searched through all valid seeds and found "+ valcount.toString() + " seeds that match the entered options.");
}

function tripleBingoScrape(generic,bingolist,endOnFirst,numBingos,startSeed)
{
  var gInclude = new Array(bingolist.length).fill(false);
  for(var y = 0; y < generic.length; y++)
  {
    gInclude[generic[y]] = true;
  }
  var valcount = 0;
  var beginBingos = " three ";
  if(numBingos==2)
  {
    beginBingos = " two ";
  }
  console.log("Beginning search for seed containing" + beginBingos + "bingos using "+generic.toString() + ".\n\nWARNING: This may take multiple hours to complete");
  for (var i = startSeed; i <= 2147483647; i++)
  {
     var currSeed = i.toString();
     var table = bingoGenerator(bingolist,currSeed);
     var bingoOpts = new Array(12).fill(true); //cols = 0-4, rows = 5-9, tlbr = 10, bltr = 11
     var col = new Array(5).fill(true);
     var row = new Array(5).fill(true);
     var tlbr = true;
     var bltr = true;
     var bcount = 0;

     var alltasks = [];
     var tasklist = [];
     //cols
     bingoOpts[0] = gInclude[table[1]] && gInclude[table[6]]&& gInclude[table[11]]&& gInclude[table[16]]&& gInclude[table[21]];
     bingoOpts[1] = gInclude[table[2]] && gInclude[table[7]]&& gInclude[table[12]]&& gInclude[table[17]]&& gInclude[table[22]];
     bingoOpts[2] = gInclude[table[3]] && gInclude[table[8]]&& gInclude[table[13]]&& gInclude[table[18]]&& gInclude[table[23]];
     bingoOpts[3] = gInclude[table[4]] && gInclude[table[9]]&& gInclude[table[14]]&& gInclude[table[19]]&& gInclude[table[24]];
     bingoOpts[4] = gInclude[table[5]] && gInclude[table[10]]&& gInclude[table[15]]&& gInclude[table[20]]&& gInclude[table[25]];

     //rows
     bingoOpts[5] = gInclude[table[1]] && gInclude[table[2]]&& gInclude[table[3]]&& gInclude[table[4]]&& gInclude[table[5]];
     bingoOpts[6] = gInclude[table[6]] && gInclude[table[7]]&& gInclude[table[8]]&& gInclude[table[9]]&& gInclude[table[10]];
     bingoOpts[7] = gInclude[table[11]] && gInclude[table[12]]&& gInclude[table[13]]&& gInclude[table[14]]&& gInclude[table[15]];
     bingoOpts[8] = gInclude[table[16]] && gInclude[table[17]]&& gInclude[table[18]]&& gInclude[table[19]]&& gInclude[table[20]];
     bingoOpts[9] = gInclude[table[21]] && gInclude[table[22]]&& gInclude[table[23]]&& gInclude[table[24]]&& gInclude[table[25]];

     bingoOpts[10] = gInclude[table[1]] && gInclude[table[7]]&& gInclude[table[13]]&& gInclude[table[19]]&& gInclude[table[25]];
     bingoOpts[11] = gInclude[table[5]] && gInclude[table[9]]&& gInclude[table[13]]&& gInclude[table[17]]&& gInclude[table[21]];
     bcount = bingoOpts.reduce((a, b) => a + b, 0);

     if(bcount>(numBingos-1))
     {
       var genericmsg = "";
       for(var k = 0; k < 12; k++)
       {
         if(k<5&&bingoOpts[k])
         {
           genericmsg += "Col " + (k+1).toString() + ",";
           alltasks = alltasks.concat([table[k+1],table[k+6],table[k+11],table[k+16],table[k+21]]);
         }
         else if(k<10&&bingoOpts[k])
         {
           genericmsg += "Row " + (k-4).toString() + ",";
           alltasks = alltasks.concat([table[(k-5)*5+1],table[(k-5)*5+2],table[(k-5)*5+3],table[(k-5)*5+4],table[(k-5)*5+5]]);
         }
         else if(k<11&&bingoOpts[k])
         {
           genericmsg += "TLBR Diagonal, ";
            alltasks = alltasks.concat([table[1],table[7],table[13],table[19],table[25]]);
         }
         else if(bingoOpts[k])
         {
           genericmsg += "BLTR Diagonal, ";
           alltasks = alltasks.concat([table[5],table[9],table[13],table[17],table[21]]);
         }
       }
       tasklist = [...new Set(alltasks)];
       var finallist = "";
       for(var x =0; x < tasklist.length; x++)
       {
        finallist = finallist + tasklist[x].toString() + ": " + bingolist[tasklist[x]] + "\n";
       }
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
       console.log("SEED: " + i.toString());
       console.log("Searched Combo found at " + genericmsg);
       console.log("Task List:");
       console.log(finallist);
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
       if(endOnFirst)
       {
         console.log("Search Completed after finding matching seed");
         return;
       }
       valcount++;
     }
     else if(i%printRate==0)
     {
       console.log("SEED: " + i.toString() + " | Valid Entries Calculated: " + valcount.toString());
     }
  }
  console.log("Searched through all valid seeds and found "+ valcount.toString() + " seeds that match the entered options.");
}

function fullBingoScrape(generic, bingolist,endOnFirst,startSeed)
{
  var valcount = 0;
  console.log("Beginning search for seed with a bingo card using "+generic.toString() + ".\n\nWARNING: This may take multiple hours to complete");
  for (var i = startSeed; i <= 2147483647; i++)
  {

     var currSeed = i.toString();
     var table = bingoGenerator(bingolist,currSeed);
     // if(i==13)
     // {
     //   console.log(table);
     //   return;
     // }
     var match = true;
     for(var j = 1; j <=25; j++)
     {
       if(!generic.includes(table[j]))
       {
         match = false;
         break;
       }
     }

     if(match)
     {
       var finalOpts = "";
       for(var f = 1; f <= 25; f++)
       {
         finalOpts += table[f].toString() + ": " + bingoList[table[f]] + "\n";
       }
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
       console.log("SEED: " + i.toString());
       console.log("Tasks:\n" + finalOpts);
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
       if(endOnFirst)
       {
         console.log("Search Completed after finding matching seed");
         return;
       }
       valcount++;
     }
     else if(i%printRate==0)
     {
       console.log("SEED: " + i.toString() + " | Valid Entries Calculated: " + valcount.toString());
     }
   }
   console.log("Searched through all valid seeds and found "+ valcount.toString() + " seeds that match the entered options.");
}

//BingoGenerator function and original bingo lists written by kbuzsaki and obtained from Github
//All remaining code written by Ectric

function q1()
{
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

  var bingolist = wiiSportsBingoList;
  var listnum = 1;
  var numBingos = 1;
  var options = [];

  readline.question("Which Bingo Board type do you want to search?\n\n1: Wii Sports Normal (default)\n2: Wii Sports Resort Normal\n3: Wii Sports Resort Stamps\n\nEnter Game Number: ", game => {
    if(game=="2")
    {
      bingolist = wsrBingoList;
      listnum = 2;
    }
    else if(game=="3")
    {
      bingolist = wsrStampBingoList;
      listnum = 3;
    }
    readline.close();
    q2(bingolist,listnum,numBingos,options);
  });
}

function q2(bingolist,listnum,numBingos,options)
{
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

  readline.question("Do you want to search single, double, triple, or blackout bingo?\n\n1: Single (default)\n2: Double\n3: Triple\nb: Blackout (Full)\n\nEnter Number of Bingos: ", nBingo => {
    if(nBingo=="3")
    {
      numBingos = 3;
    }
    else if(nBingo=="2")
    {
      numBingos = 2;
    }
    else if(nBingo=="b")
    {
      numBingos = 12;
    }
    readline.close();
    printBingoListArray(listnum);
    q3(bingolist,listnum,numBingos,options);
  });
}

function q3(bingolist,listnum,numBingos,options)
{
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

  var numBingoNote = " 5 items for a single bingo search. ";
  if(numBingos==2)
  {
    numBingoNote = " 9 items for a double bingo search. ";
  }
  else if(numBingos==3)
  {
    numBingoNote = " 12 items for a triple bingo search. ";
  }
  else if(numBingos==12)
  {
    numBingoNote = " 25 items for a blackout bingo search. ";
  }

  readline.question("Enter the tasks you want to find in your bingo(s). Use the numbers for each item listed above and separate them with only commas, no spaces. e.g. 13,44,2,65,23\nNote: You must have a minimum of" + numBingoNote +"\n\nEnter options here: ", items => {
    var its = items.split(",");
    for(var i = 0; i < its.length; i++)
    {
      options.push(parseInt(its[i]));
    }
    readline.close();
    if((numBingos==1&&options.length<5)||(numBingos==2&&options.length<9)||(numBingos==3&&options.length<12)||(numBingos==12&&options.length<25))
    {
      options = [];
      console.log("ERROR: Not enough options entered. Make sure your formatting is correct and you enter in enough items to make the desired bingos");
      q3(bingolist,listnum,numBingos,options);
    }
    else
    {
      q4(bingolist,listnum,numBingos,options);
    }
  });
}
function q4(bingolist,listnum,numBingos,options)
{
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

  readline.question("What seed number do you want to start at?\nNote: Must enter value between 0 and 2147483647 inclusive. Any other value entered will default to starting at 0.\n\n Enter Answer here: ", seedEntry => {
    var startSeed = parseInt(seedEntry);
    readline.close();
    if(isNan(startSeed)||startSeed<0||startSeed>2147483647)
    {
      startSeed = 0;
    }
    q5(bingolist,listnum,numBingos,options,startSeed);
  });

}

function q5(bingolist,listnum,numBingos,options,startSeed)
{
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

  readline.question("Would you like to find all possible seeds or stop after finding the first?\n\n0: Find all matching seeds (default)\n1: Find First Only\n\n Enter Answer here: ", firstOnly => {
    var stopOnFirst = (firstOnly=="1");
    readline.close();
    if(numBingos==1)
    {
      singleBingoScrape(options,bingolist,stopOnFirst,startSeed);
    }
    else if(numBingos==12)
    {
      fullBingoScrape(options,bingolist,stopOnFirst,startSeed);
    }
    else
    {
      tripleBingoScrape(options,bingolist,stopOnFirst,numBingos,startSeed);
    }
  });
}
q1();
