

var over=false;
var cases=document.getElementsByClassName('box');
var tour= 1;
var re=document.getElementById('again');
function isEmpty(pid){

  if(document.getElementById(pid).innerHTML == "")//pid est stocke id dans la grande function
    return true;
  else {
    return false;
  }
}

function playagain(){
  for(var i =0; i<9; i++){
    cases[i].innerHTML="";
  }
  if(cases[i].innerHTML=="")
    tour=1;
  if(cases[i].innerHTML=="")
    over=1;
}
re.addEventListener('click',playagain );

function putSymbol(pid){//pid est stocke id dans la grande function
  if(tour == 1)
    document.getElementById(pid).innerHTML = "<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>";
  else {
    document.getElementById(pid).innerHTML = "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";
  }

}

function testdiagonale(){
  var joueur1= new Array(0,0);
  var joueur2= new Array(0,0);
  for (var i = 0; i < 9; i++) {
    if(i==2 || i==4 || i==6){
      if(cases[i].innerHTML=="<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>"){
        joueur1[0]++;
      }
      if(cases[i].innerHTML=="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>"){
        joueur2[0]++;
      }
    }
    if(i==0 || i==4 || i==8){
      if(cases[i].innerHTML=="<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>"){
        joueur1[1]++;
      }
      if(cases[i].innerHTML=="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>"){
        joueur2[1]++;
      }
    }
  }
  for(var i=0; i<2;i++){
    if(joueur1[i]==3 && tour==1){
      return 1;
    }
    if(joueur2[i]==3 && tour==2){
      return 1;
    }
  }
  return 0;
}


function testcolonne(){
  var joueur1= new Array(0,0,0);
  var joueur2= new Array(0,0,0);
  for(var i=0; i<9;i++){
      console.log("i % 3 = "+(i%3));
      if(cases[i].innerHTML=="<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>"){
        joueur1[i%3]++;
      }
      if(cases[i].innerHTML=="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>"){
        joueur2[i%3]++;
      }
  }
  for(var i=0; i<3;i++){
    if(joueur1[i]==3 && tour==1){
      return 1;
    }
    if(joueur2[i]==3 && tour==2){
      return 1;
    }
  }
  return 0;
}


function testligne(){
  var joueur1= new Array(0,0,0);
  var joueur2= new Array(0,0,0);
  for(var i=0; i<9;i++){
    if(i<3){
      if(cases[i].innerHTML=="<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>"){
        joueur1[0]++;
      }
      if(cases[i].innerHTML=="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>"){
        joueur2[0]++;
      }
    }
    if(i>=3 && i<6){
      if(cases[i].innerHTML=="<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>"){
        joueur1[1]++;
      }
      if(cases[i].innerHTML=="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>"){
        joueur2[1]++;
      }
    }
    if(i>=6 ){
      if(cases[i].innerHTML=="<i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i>"){
        joueur1[2]++;
      }
      if(cases[i].innerHTML=="<i class=\"fa fa-times\" aria-hidden=\"true\"></i>"){
        joueur2[2]++;
      }
    }
  }
  for(var i=0; i<3;i++){
    if(joueur1[i]==3 && tour==1){
      return 1;
    }
    if(joueur2[i]==3 && tour==2){
      return 1;
    }
  }
  return 0;
}


function isFull() {
  for(var i=0; i<9;i++){
    if(cases[i].innerHTML=="")
      return false;
  }
  return true;
}
//partie finie
function isOver() {
  if(testcolonne()==1 || testligne()==1 || testdiagonale()==1){
    return 1;
  }else if(isFull()==true){
    return 2;
  }else {
    return 0;
  }
}

function conteneur(monthis){
  if(over ==false){
      var id=monthis.id;
    console.log(id);
    if(isEmpty(id)== false)
      return 0;
    putSymbol(id);
    if(isOver()== 1){
      over=true;
      document.getElementById('info').innerText="le joueur " + tour+" a gagné";
    }else if(isOver()== 2){
      over=true;
      document.getElementById('info').innerText="Egalité ";
    }else{
      tour=(tour==1)?2:1;
      document.getElementById('info').innerText="C'est au joueur " + tour;
    }
  }


}
