let szamok = [];
function generateUniqueRandom(maxNr) {
    let random = (Math.random() * maxNr).toFixed();
    random = Number(random);
    if(!szamok.includes(random)) {
        szamok.push(random);
        
        return random;
    } else {
         return  generateUniqueRandom(maxNr);
    }
}
let szamok2=[];
function egyenlo() {
    for (let i = 0; i < szamok.length; i++) {
        szamok2[i]=szamok[i];
    }
    
    
}
function shuffle(szamok2) {
    let currentIndex = szamok2.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [szamok2[currentIndex], szamok2[randomIndex]] = [szamok2[randomIndex], szamok2[currentIndex]];
    }
  
    return szamok2;
  }
  
function general() {
        document.getElementById("szam1").innerHTML =szamok[0];
        document.getElementById("szam1b").innerHTML =szamok2[0];
        document.getElementById("szam2").innerHTML =szamok[1];
        document.getElementById("szam2b").innerHTML =szamok2[1];
        document.getElementById("szam3").innerHTML =szamok[2];
        document.getElementById("szam3b").innerHTML =szamok2[2];
        document.getElementById("szam4").innerHTML =szamok[3];
        document.getElementById("szam4b").innerHTML =szamok2[3];
        document.getElementById("szam5").innerHTML =szamok[4];
        document.getElementById("szam5b").innerHTML =szamok2[4];
        document.getElementById("szam6").innerHTML =szamok[5];
        document.getElementById("szam6b").innerHTML =szamok2[5];
        document.getElementById("szam7").innerHTML =szamok[6];
        document.getElementById("szam7b").innerHTML =szamok2[6];
        document.getElementById("szam8").innerHTML =szamok[7];
        document.getElementById("szam8b").innerHTML =szamok2[7];

        
}
console.log(generateUniqueRandom(100));
console.log(generateUniqueRandom(100));
console.log(generateUniqueRandom(100));
console.log(generateUniqueRandom(100));
console.log(generateUniqueRandom(100));
console.log(generateUniqueRandom(100));
console.log(generateUniqueRandom(100));
console.log(generateUniqueRandom(100));
console.log('Unique random numbers:' ,szamok);
function szam1show(){document.getElementById("szam1").style.visibility = "visible";}
function szam1bshow(){document.getElementById("szam1b").style.visibility = "visible";}
function szam2show(){document.getElementById("szam2").style.visibility = "visible";}
function szam2bshow(){document.getElementById("szam2b").style.visibility = "visible";}
function szam3show(){document.getElementById("szam3").style.visibility = "visible";}
function szam3bshow(){document.getElementById("szam3b").style.visibility = "visible";}
function szam4show(){document.getElementById("szam4").style.visibility = "visible";}
function szam4bshow(){document.getElementById("szam4b").style.visibility = "visible";}
function szam5show(){document.getElementById("szam5").style.visibility = "visible";}
function szam5bshow(){document.getElementById("szam5b").style.visibility = "visible";}
function szam6show(){document.getElementById("szam6").style.visibility = "visible";}
function szam6bshow(){document.getElementById("szam6b").style.visibility = "visible";}
function szam7show(){document.getElementById("szam7").style.visibility = "visible";}
function szam7bshow(){document.getElementById("szam7b").style.visibility = "visible";}
function szam8show(){document.getElementById("szam8").style.visibility = "visible";}
function szam8bshow(){document.getElementById("szam8b").style.visibility = "visible";}
