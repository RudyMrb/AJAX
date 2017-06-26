$(function(){
  let index = 0; // L'index permettra de parcourir le tableau d'image

  setInterval(function(){ // Permet d'effectuer une fonction toute les x seconde

    let image = ["https://www.carmudi.pk/journal/wp-content/uploads/2014/06/Featured-image-World-cup-stars-and-their-super-cars-.jpg", "https://68.media.tumblr.com/73dde01f88d6af6feec194ca8ea5cd22/tumblr_inline_on8iu8U4Pg1u0g39g_1280.jpg", "http://68.media.tumblr.com/4785a88cb63a9a3121b8e9eb662c1ded/tumblr_oe43lgX5nr1ubhfqco1_1280.jpg", "http://cdn.quotesgram.com/img/71/94/243980622-StayRad_banner1.jpg"]; // Variable qui stocke nos images

    if(index == image.length) // Condition pour revenir à la premiere image
      index = 0;

  $("#slider-Mike").attr("src", image[index]); // Modifier la source de l'image

  index++;

  }, 2000); // Toute les 2 secondes

  $(".one_third").one("click", function() { // Function se declanche au click sur l'id #rudy

    $("#rudy1").attr("src", "http://e.deportes.americadigital.pe/ima/0/0/3/6/7/367384/290x180.jpg"); // Modifier la source de l'image
    $("#rudy2").attr("src", "http://e.deportes.americadigital.pe/ima/0/0/3/6/1/361443/290x180.jpg"); // Modifier la source de l'image
    $("#rudy3").attr("src", "http://e.deportes.americadigital.pe/ima/0/0/3/6/8/368111/290x180.jpg"); // Modifier la source de l'image
  });

  $(".one_third").click(function(){
    let image = $("#rudy1").attr("src"); // Je stock la valeur src de la permiere image dans la variable
    $("#rudy1").attr("src", $("#rudy3").attr("src")); // Je modifie le src de la premiere image par le src de la troisieme
    $("#rudy3").attr("src", $("#rudy2").attr("src")); // Je modifie le src de la troisieme image par le src de la deuxieme
    $("#rudy2").attr("src", image);
  });

  $(".more > a").click(function()  { // La fonction se déclanche au clique sur la balise a qui se trouve dans class more
    event.preventDefault(); // Annuler l'evenement par defaut

    console.log($(this)) // Balise a selectionner
    console.log($(this).parent()) // Balise p class more
    console.log($(this).parent().parent()) // Balise article class one_quartier
    console.log($(this).parent().parent().children("p")) // Balise p

    $(this).parent().parent().children("p").eq(0).append(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  });

  var request = $.ajax({ // Envoi d'un request sur une url avec une methode
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET",
  dataType: "json" // optionnel - Defie le type de donnée reçu par le serveur
  });

  request.done(function( users ) { // done = success - Code à effectuer en cas de reussite - REPONSE EN CAS DE REUSSITE (users == reponse du serveur)
    var content ="";
    console.log(users);
    for (var i = 0; i < users.length; i++){
      content += '<li><a href="#">'+users[i].name+'</a></li>'
    }
    $("#right_column ul").html(content) // Evenement du DOM - Modification de l'HTML dans La balise ul qui se trouve dans la balise qui a l'id right_column
  });

  request.fail(function( jqXHR, textStatus ) { // fail =
    alert( "Request failed: " + textStatus );
  });

  //**********************************************************************

  $.ajax({ // Envoi d'un request sur une url avec une methode
  url: "https://jsonplaceholder.typicode.com/photos",
  method: "GET",
  dataType: "json" // optionnel - Defie le type de donnée reçu par le serveur
  })

  .done(function( photos ) { // done = success - Code à effectuer en cas de reussite - REPONSE EN CAS DE REUSSITE (users == reponse du serveur)
    console.log($("#posts img"))
    for(var i = 0; i < 2; i++){
      $("#posts img").eq(i).attr("src",photos[i].url)
    }
    $(".mores > a").click(function()  { // La fonction se déclanche au clique sur la balise a qui se trouve dans class more
      event.preventDefault(); // Annuler l'evenement par defaut

      console.log($(this)) // Balise a selectionner
      console.log($(this).parent()) // Balise p class more
      console.log($(this).parent().parent()) // Balise article class one_quartier
      console.log($(this).parent().parent().children("img")) // Balise p

      for(var i = 0; i < 2; i++){
        if(photos[i].url == $(this).parent().parent().parent().children("img").attr("src")){
          $(this).parent().parent().children("p").append(photos[i].title);
        }
      }
    });
  })

  .fail(function( jqXHR, textStatus ) { // fail =
    alert( "Request failed: " + textStatus );
  });
});
