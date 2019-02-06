$(document).ready(function(){
  init();
})

//syntaxe alternative es6 pour attendre et ecouter le chargement du document et ensuite on pourra executer notre code a l'interieur
// $(()=>{

// })

function init(){
  //appel de la function counter 
  counter();

  //le .on() remplace le addEventListener
  //on ecoute le click sur tous les liens
  $('a').on('click', onDelete);

  //on ecoute le click sur l'elements qui a l'id add
  $('#add').on('click', add);

  //on ecoute le click 
  //On effctue le addEvenListener et le click dans la meme fonction
  $('.search button').click(search);

}

//function de suppression
function onDelete(event){

  //on casse le comportement par default du lien sur lequel
  //on a cliqué
  event.preventDefault();
  //supression du parent de l'element sur lequel on a cliqué
  $(this).parent().remove();

  //appel de la function counter afin de mettre a jour notre compteur
  counter();
}

//function qui s'occupe d'afficher le nombre des articles
//pour l'injecter dans le html et principalement dans le texte de notre h3
function counter(){
  $('#counter h3').text("Compteur : " + $('article').length);
}

// function ajouter pour ajouter les articles selon le contenu
function add(){

  //verifie si le contenu du textarea n'est pas vide
  if( $('textarea').val() !== "" ){

    //stockage et création de notre nouvel article que l'on veut ajouter
    let value = `<article class="contact">
    <img src="img/profils1.png" alt="profil1">
    <h2>Profil 1</h2>
    <p>${$('textarea').val()}</p>
    <a href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
    </article>`;

    //ajout à la fin de notre section qui a la classe content
    $('.content').append(value);
  }

  //remet le contenu du textarea a chaine de caracteres vides
  $('textarea').val("");

  //actualisation du compteur
  counter();
  // on recupere les functionnalités de suppression qui sont appelées dans init
  init();
}

//function de recherche selon le texte que l'on a rentré dans l'input
function search(){

  //on execute une boucle sur les titres de nos articles
    $('article h2').each(function(i, element){
       //compare le texte de notre input et si il est different des titres
       if( $('.search input').val() !==  $(element).text()){
        //on cache les elements
        $(element).parent().css('display', 'none')
      }else{
        //ils sont identiques et donc ils sont afficher
        $(element).parent().css('display', 'flex')
      }
    })

    $('.search input').val("");

}

