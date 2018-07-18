var targetNumber = Math.floor((Math.random() * 101) + 19);

  $(".number-to-guess").text(targetNumber);

var scorecounter = 0;

var wincounter = 0;

var losscounter = 0;
  
    
    var imageCrystal1 = $("<img>");
    
    imageCrystal1.addClass("crystal-image");
    
    imageCrystal1.attr("src", "http://moziru.com/images/ruby-clipart-crystal-3.png");
    
    imageCrystal1.attr("data-crystalvalue", Math.floor((Math.random() * 10) + 1));
    
    $(".crystals").append(imageCrystal1);
  

    
    var imageCrystal2 = $("<img>");
    
    imageCrystal2.addClass("crystal-image");
    
    imageCrystal2.attr("src", "https://vignette.wikia.nocookie.net/gemcrust/images/4/4e/Pyromorphite%27s_Gem.png/revision/latest?cb=20161230164138");
    
    imageCrystal2.attr("data-crystalvalue", Math.floor((Math.random() * 10) + 1));
    
    $(".crystals").append(imageCrystal2);


    
    var imageCrystal3 = $("<img>");
    
    imageCrystal3.addClass("crystal-image");
    
    imageCrystal3.attr("src", "https://vignette.wikia.nocookie.net/universosteven/images/e/ea/Gema_de_Amatista_Nuevo_Dise%C3%B1o.png/revision/latest?cb=20141130182909&path-prefix=es");
    
    imageCrystal3.attr("data-crystalvalue", Math.floor((Math.random() * 10) + 1));
    
    $(".crystals").append(imageCrystal3);


    
    var imageCrystal4 = $("<img>");
    
    imageCrystal4.addClass("crystal-image");
    
    imageCrystal4.attr("src", "http://www.clker.com/cliparts/3/f/1/c/129191700188815218sapphire-md.png");
    
    imageCrystal4.attr("data-crystalvalue", Math.floor((Math.random() * 10) + 1));
    
    $(".crystals").append(imageCrystal4);


  
  $(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    scorecounter += crystalValue;
    
    $(".current-score").text(scorecounter);

    if (scorecounter === targetNumber) {
      $(".crystal-wins").text(wincounter=wincounter+1);
    }

    else if (scorecounter >= targetNumber) {
      $(".crystal-losses").text(losscounter=losscounter+1);
    }

  });