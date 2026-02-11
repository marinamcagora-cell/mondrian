var hvermell = 290;
var hblau = 150;
var wgrisgran = 255;
var hgris1 = 150;
var hgris2 = 147;
var hgrispetit = 60;
var hgroc = 60;
var punts = 0;
let puntVermell = false;
let puntAlien = false;
let puntLlengua = false;
let btnReset;




function preload() {
  gat_vermell = loadImage("/recursos/gat_vermell.jpg");
  glorp = loadImage("/recursos/glorp.jpg");
  soFons = loadSound("/recursos/so_tonto.mp3");
  vaca = loadImage("/recursos/vaca.jpg");
  llop = loadImage("/recursos/llop.jpg");
  conill = loadImage("/recursos/conill.jpg");
  corb = loadImage("/recursos/corb.jpg");
  gat = loadImage("/recursos/gat.jpg");
  pet = loadSound("/recursos/so_pet_llarg.mp3");
  nostalgia =loadSound ("/recursos/so_melodia.mp3");
  funebres =loadSound ("/recursos/so_funebres.mp3");
  tonto = loadSound ("/recursos/so_tonto.mp3");
  soEstupefacte =loadSound ("recursos/estupefacte_curt.mp3");
  soCrit = loadSound ("recursos/crit_random.mp3");
  soAlien =loadSound ("/recursos/so_alien.mp3");

}


function setup() {
  createCanvas(400, 600);
}

function draw() {
  //FUNCIONS
  background(220);
  mostrablau();
  mostravermell();
  mostraGrisGran();
  mostraGris1();
  mostraGris2();
  mostraGrisPetit();
  mostraGroc();


  //DOS QUADRATS GRISOS ESQUERRA SUPERIOR

  //el d'adalt
  //imatge amimació
  image(llop, 0, 0, 100, 130);
  //requadre pintat
  fill(220);
  strokeWeight(20);
  rect(-20, -20, 150, hgris1);
  //només stroke per animació
  fill(220, 0);
  strokeWeight(20);
  rect(-20, -20, 150, 150);

  //el d'aabaix
  //imatge animació
  image(gat, 0, 135, 100, 147);
  //requadre pintat
  fill(220);
  strokeWeight(8);
  rect(-8, 135, 200, hgris2);
  //stroke
  fill(220, 0);
  strokeWeight(8);
  rect(-8, 135, 200, 147);


  //REQUADRE BLAU
  //imatge animació
  image(glorp, 0, 283, 105, 120);
  //requadre pintat
  fill(4, 98, 172);
  strokeWeight(8);
  rect(-8, 283, 109, hblau);
  //stroke per animació
  fill(4, 98, 172, 0);
  strokeWeight(8);
  rect(-8, 283, 109, 150);


  //DOS QUADRATS DRETA INFERIOR

  //gris
  //imatge animació
  image(conill, 350, 282, 70, 60)
  //requadre pintat
  fill(220);
  strokeWeight(12);
  rect(350, 282, 70, hgrispetit);
  //stroke
  fill(220, 0);
  strokeWeight(12);
  rect(350, 282, 70, 60);

  //groc 
  //imatge animació
  image(corb, 350, 350, 70, 60);
  //requadre pintat
  fill(243, 230, 112);
  strokeWeight(12);
  rect(350, 350, 400, hgroc);
  //stroke
  fill(243, 230, 112, 0);
  strokeWeight(12);
  rect(350, 350, 400, 60);


  //REQUADRE GRIS GRAN INFERIOR 
  //imatge animació
  image(vaca, 100, 283, 255, 150);
  //requadre pintat
  fill(220);
  strokeWeight(8);
  rect(100, 283, wgrisgran, 150);
  //stroke 
  fill(220, 0);
  strokeWeight(8);
  rect(100, 283, 255, 150);


  //REQUADRE VERMELL 
  //imatge animació
  image(gat_vermell, 100, 0, 300, 285)
  //requadre pintat
  fill(244, 47, 39);
  strokeWeight(8);
  rect(100, -8, 400, hvermell);
  //stroke per animació
  fill(244, 47, 39, 0);
  strokeWeight(8);
  rect(100, -8, 400, 290);


  // SEPARADOR 
  strokeWeight(0);
  fill(255, 255, 255);
  rect(0, 400, 400, 45);


  //REQUADRE INFERIOR FINAL AMB TEXT
  strokeWeight(5);
  fill(218, 235, 242);
  rect(2, 447, 395, 150);
  fill(0, 0, 0);
  textAlign(CENTER);
  textSize(20);
  textFont("Courier New");
  textStyle("bold");
  text("BUSCAGATS", 200, 480);
  textStyle("italic");
  textSize(16);
  text("mou el ratolí per trobar tots els gats", 200, 500);
  textSize(12);
  text("i puja el volum de l'ordinador...",200,515);
  textStyle("normal");
  textSize(40);
  text(punts + "/3", 200, 560);

  

 //EN GUANYAR EL JOC
  if (punts >= 3) {
    jocGuanyat();
  }

}

//FUNCIÓ REQUADRE VERMELL
function mostravermell() {
  if (mouseX > 100 && mouseX < 400 && mouseY < 282 && hvermell >= 0) {
    hvermell -= 3;
    if (funebres.isPlaying())
    {
    } else{
      funebres.play();
    }

    if (puntVermell == false) {
      punts += 1;
      puntVermell = true;
    }

  } else if (hvermell < 290 && mouseX < 100 || hvermell < 290 && mouseY > 282 || hvermell < 290 && mouseX > 400) {
    hvermell += 3;
    funebres.stop();

  }
}

//FUNCIÓ REQUADRE BLAU
function mostrablau() {
  if (mouseX > 0 && mouseX < 101 && mouseY < 400 && mouseY > 282 && hblau >= 1) {
    hblau -= 3;
    if (soAlien.isPlaying())
    {
    } else{
      soAlien.play();
    }
    if (puntAlien == false) {
      punts += 1;
      puntAlien = true;
    }
  } else if (hblau < 150 && mouseX > 101 || hblau < 150 && mouseY > 400 || hblau < 150 && mouseY < 282 || hblau < 150 && mouseX > 400) {
    hblau += 3;
    soAlien.stop();


  }
}

//FUNCIÓ REQUADRE GRIS GRAN
function mostraGrisGran() {
  if (mouseX > 100 && mouseX < 355 && mouseY > 283 && mouseY < 400 && wgrisgran >= 1){
    wgrisgran -= 3;

    if (nostalgia.isPlaying())
    {
    } else{
      nostalgia.play();
    }
    
  
  }else if (mouseX < 100 && wgrisgran <= 254 || mouseX > 355 && wgrisgran <= 254 || mouseY > 400 && wgrisgran <= 254 || mouseY < 283 && wgrisgran <= 254) {
    wgrisgran += 3;
    nostalgia.stop();
    
  }
}

//FUNCIÓ REQUADRE GRIS SUPERIOE DE LA PUNTA ESQUERRA 
function mostraGris1() {
  if (mouseX < 100 && mouseX > 0 && mouseY < 150 && mouseY > 0 && hgris1 >= 1) {
    hgris1 -= 3;
    if (soCrit.isPlaying())
    {
    } else{
      soCrit.play();
    }
  } else if (hgris1 <= 148 && mouseX > 100 || hgris1 <= 148 && mouseX < 0 || hgris1 <= 148 && mouseY > 150 || hgris1 <= 148 && mouseY < 0) {
    hgris1 += 3;
    soCrit.stop();
  }

}

//FUNCIÓ REQUADRE GRIS INFERIOR DE LA PUNTA SUPERIOR ESQUERRA 
function mostraGris2() {
  if (mouseX < 100 && mouseX > 0 && mouseY < 282 && mouseY > 150 && hgris2 >= 1) {
    hgris2 -= 3;
    if (tonto.isPlaying())
    {
    } else{
      tonto.play();
    }
    if (puntLlengua == false) {
      punts += 1;
      puntLlengua = true;
    }
  } else if (hgris2 <= 147 && mouseX > 100 || hgris2 <= 147 && mouseX < 0 || hgris2 <= 147 && mouseY < 150 || hgris2 <= 147 && mouseY > 282) {
    hgris2 += 3;
    tonto.stop();
  }
}

//FUNCIÓ REQUADRE GRIS PETIT PUNTA INFERIOR DRETA
function mostraGrisPetit() {
  if (mouseX < 400 && mouseX > 350 && mouseY < 340 && mouseY > 282 && hgrispetit >= 1) {
    hgrispetit -= 3;
    if (pet.isPlaying())
    {
    } else{
      pet.play();
    }

  } else if (hgrispetit <= 60 && mouseX > 400 || hgrispetit <= 60 && mouseX < 350 || hgrispetit <= 60 && mouseY > 340 || hgrispetit <= 60 && mouseY < 282) {
    hgrispetit += 3;
    pet.stop();
  }
}

//FUNCIÓ REQUADRE GROC
function mostraGroc() {
  if (mouseX < 400 && mouseX > 350 && mouseY < 400 && mouseY > 342 && hgroc >= 1) {
    hgroc -= 3;
    if (soEstupefacte.isPlaying())
    {
    } else{
      soEstupefacte.play();
    }


  } else if (hgroc <= 60 && mouseX > 400 || hgroc <= 60 && mouseX < 350 || hgroc <= 60 && mouseY > 400 || hgroc <= 60 && mouseY < 342) {
    hgroc += 3;
    soEstupefacte.stop();
  }

}

//FUNCIÓ DE QUAN ES GUANYA EL JOC
function jocGuanyat() {
  textSize(16);
  text("Felicitats! Has trobat els gats!", 200, 585);

  //resetejar el joc
  if (mouseX < 330 && mouseX > 260 && mouseY < 556 && mouseY > 526 && mouseIsPressed) {
    resetJoc();
  }

  //botó de reset
  btnReset = createButton("RESET");
  let btnResetCol = color(108, 198, 235);
  let btnResetColHover = color(16, 110, 148);
  btnReset.style("background-color", btnResetCol);

 //botó de reset hover
  if (mouseX < 330 && mouseX > 260 && mouseY < 556 && mouseY > 526) {
    btnReset.style("background-color", btnResetColHover);
  }

  //estils del botó de reset 
  btnReset.position(260, 526, 70, 30);
  btnReset.style("font-family", "Courier New");
  btnReset.style("border-radius", "0px");
  btnReset.style("border-width", "0px");
  btnReset.style("font-size", "16px");
  btnReset.style("color", "white");
  btnReset.style("font-weight", "bold");
  btnReset.style("padding", "5px");
  btnReset.style("padding-left", "10px",);
  btnReset.style("padding-right", "10px",);
}

//FUNCIÓ RESETEJAR EL JOC
function resetJoc() {
  punts = 0;
  puntAlien = false;
  puntLlengua = false;
  puntVermell = false;
}
