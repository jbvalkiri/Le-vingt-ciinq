class automobile{


constructor(w,x,y,z){

    this.marque =w;
    this.model =x;
    this.couleur =y;
    this.année =z;
    
}
affichemarque(w){
    return w + "Marque du véhicule :" + this.marque;
}
affichemodel(w){
    return w + "Model du véhicule :" + this.model;
}
affichecouleur(w){
    return w + "Couleur du véhicule :" + this.couleur;
}
afficheannée(w){
    return w + "Année du véhicule :" + this.année;
}

  }

  const sas = new automobile("Citroen","C5" , "Blanche",2022)
  console.log(sas);
  document.getElementById("one1").innerHTML= sas .affichemarque ("");
  document.getElementById("one2").innerHTML= sas .affichemodel ("");
  document.getElementById("one3").innerHTML= sas .affichecouleur ("");
  document.getElementById("one4").innerHTML= sas .afficheannée ("");
  
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');
    
    if(n > slides.length) { slideIndex = 1 }
    
    if(n < 1 ) { slideIndex = slides.length }
    
    
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    
    for(let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    
  
    slides[slideIndex - 1].style.display = 'block';
    
   
    dots[slideIndex - 1].classList.add('active');
  }

  