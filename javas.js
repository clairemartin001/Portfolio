window.addEventListener('load', (event) => {
  new cursoreffects.ghostCursor();
});

$('.cm-intro').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
$('.intro').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });

function project1(){
  document.getElementById('contenttext')
  .innerHTML="<h1>TEXTILES ARTIST BOOK</h1> <br> <p> THIS BOOK IS INSPIRED BY A SERIES OF OLD FAMILY PHOTOGRAPHS TAKEN ON A SINGLE DAY AT THE BEACH IN 2004. IT IS A COLLECTION OF TEXTILE SWATCHES IVE CREATED, PHOTOGRAPHED, AND FOUND THAT HAVE BEEN LAYERED AND PRINTED ON THE RISOGRAPH. THIS PROCESS OF LAYERING IS CREATING NEW TEXTILE PIECES THAT ARE NOT BOUND BY THE LIMITATIONS OF REALITY. </p> ";
  document.getElementById('scrollbar')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
  document.getElementById('scrollbar2')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
  document.getElementById('block1')
    .src="images/intropage.gif";
    document.getElementById('block2')
    .src="images/textile1.png";
    document.getElementById('block3')
    .src="images/textile3.png";
    document.getElementById('block4')
    .src="images/textilegif2.gif";
    document.getElementById('block5')
    .src="images/textile10.png";
    document.getElementById('block6')
    .src="images/textile9.png";
    document.getElementById('block7')
    .src="images/textilegif4.gif";
    document.getElementById('block8')
    .src="images/textilegif5.gif";
    document.getElementById('block9')
    .src="images/textile8.png";
    document.getElementById('block10')
    .src="images/textilegif3.gif";
    document.getElementById("textblurb").style.backgroundImage = "url(images/textilescover1.png)";

}

function project2(){
  document.getElementById('contenttext')
  .innerHTML="<h1>COPENHAGEN GUIDE BOOK</h1> <br> <p> AN ENTIRELY TYPOGRAPHIC TRAVEL GUIDE INSPIRED BY MANY MONTHS LIVING IN COPENHAGEN. BRINGING TO LIFE THE PLAYFULNESS OF THE CITY, YOU’LL GET KEYED IN ON THE BEST AND MOST UNIQUE SPOTS COPENHAGEN HAS TO OFFER :)</p> <p> [*PERSONAL PROJECT*]</p>";

  // var img = document.createElement('img')
  // img.src = 'images/copenhagen-cover.png';
  // document.getElementById('contenttext').appendChild(img);

  document.getElementById('block1')
    .src="images/covercph.png";
  document.getElementById('block2')
    .src="images/cope1.png";
    document.getElementById('block3')
    .src="images/toc.png";
    document.getElementById('block4')
    .src="images/pastries.png";
    document.getElementById('block5')
    .src="images/junobakery.png";
   document.getElementById('block6')
    .src="images/cheapeats.png";
    document.getElementById('block7')
    .src="images/torvhallerne.png";
    document.getElementById('block8')
    .src="images/reffen.png";
    document.getElementById('block9')
    .src="images/dancing.png";
    document.getElementById('block10')
    .src="images/indreby.png";


    document.getElementById("textblurb").style.backgroundImage = "url(images/danishflags.png)";

    document.getElementById('scrollbar')
    .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
    document.getElementById('scrollbar2')
    .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
}


function project3(){
  document.getElementById('contenttext')
  .innerHTML="<h1>COPENHAGEN FASHION WEEK BOOK</h1> <br> <p> THIS BOOK HIGHLIGHTS SIX DANISH BRANDS FEATURED IN THE SPRING/SUMMER 2023 COPENHAGEN FASHION WEEK SHOW. HIGHLIGHTING THE BEAUTY AND DETAIL WITHIN THE GARMENTS, SLOWING DOWN OUR VISUAL CONSUMPTION OF FASHION. </p> <p>[3-COLOR RISOGRAPH PRINTED BOOK, SWEN BOUND WITH SCREEN PRINTED COVER] </p> <p> [*PERSONAL PROJECT*]</p>";
  document.getElementById('block1')
  .src="images/cphfwbook.png";
  document.getElementById('block2')
  .src="images/gannicover.png";
  document.getElementById('block3')
  .src="images/ganni.png";
  document.getElementById('block4')
  .src="images/holzcover.png";
document.getElementById('block5')
  .src="images/holz2.png";
  document.getElementById('block6')
  .src="images/rotatecover.png";
  document.getElementById('block7')
  .src="images/rotate1.png";
  document.getElementById('block8')
  .src="images/soulland1.png";
  document.getElementById('block9')
  .src="images/gestuz.png";
  document.getElementById('block10')
  .src="images/gestuz2.png";

  document.getElementById("textblurb").style.backgroundImage = "url(images/cphcover3.png)";

  document.getElementById('scrollbar')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
  document.getElementById('scrollbar2')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
}

function project4(){
  document.getElementById('contenttext')
  .innerHTML="<h1>HIVECLASS</h1> <br> <p> this project is about blah blah blah</p>";

  document.getElementById('block1')
  .src="images/businesscard.png";
  document.getElementById('block2')
  .src="images/defense.gif";
  document.getElementById('block3')
  .src="images/volleygirl.png";
  document.getElementById('block4')
  .src="images/platform.png";
document.getElementById('block5')
  .src="images/beepattern.gif";
  document.getElementById('block6')
  .src="images/spraypaint.png";
  document.getElementById('block7')
  .src="images/websitepic.png";
  document.getElementById('block8')
  .src="images/banners.png";
  document.getElementById('block9')
  .src="images/aquatics.gif";
  document.getElementById('block10')
  .src="images/bwcourt.png";

  document.getElementById("textblurb").style.backgroundImage = "url(images/basketball2.png)";

  document.getElementById('scrollbar')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
  document.getElementById('scrollbar2')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
}

function project5(){
  document.getElementById('contenttext')
  .innerHTML="<h1>COLLECTION OF POSTCARDS</h1> <br> <p> IF YOU KNOW ME YOU KNOW I LOVE SENDING CARDS :) HERE ARE SOME OF THE MANY THINGS I’VE SENT IN THE MAIL.</p>";
  document.getElementById("textblurb").style.backgroundImage = "url(images/postcardcover.png)";

  document.getElementById('block1')
  .src="images/discorama.png";
  document.getElementById('block2')
  .src="images/sendinglovecards.png";
  document.getElementById('block3')
  .src="images/travelseries.png";
  document.getElementById('block4')
  .src="images/birthdaycard.png";
  document.getElementById('block5')
  .src="images/puglia.png";
  document.getElementById('block6')
  .src="images/roma.png";
document.getElementById('block7')
  .src="images/2021holiday.png";
  document.getElementById('block8')
  .src="images/2022holiday.png";
  document.getElementById('block9')
  .src="images/summerhouse.png";
  document.getElementById('block10')
  .src="images/skiier.png";

  document.getElementById('scrollbar')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
  document.getElementById('scrollbar2')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";

}

function project6(){
  document.getElementById('contenttext')
  .innerHTML="<h1>FORUMLA 1 TRADING CARDS</h1> <br> <p> 2021 FORMULA 1 TRADING CARDS WITH CUSTOM MADE TYPEFACE</p> <p> [*PERSONAL PROJECT*]</p>";

  document.getElementById('block1')
  .src="images/ric.png";
  document.getElementById('block2')
  .src="images/norris.png";
  document.getElementById('block3')
  .src="images/sainz.png";
  document.getElementById('block4')
  .src="images/charles.png";
  document.getElementById('block5')
  .src="images/verstap.png";
  document.getElementById('block6')
  .src="images/hamilton.png";
document.getElementById('block7')
  .src="images/george.png";
  document.getElementById('block8')
  .src="images/stroll.png";
  document.getElementById('block9')
  .src="images/gasly.png";
  document.getElementById('block10')
  .src="images/f1cardpile.png";

  document.getElementById("textblurb").style.backgroundImage = "url(images/f1-cover.png)";

  document.getElementById('scrollbar')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
  document.getElementById('scrollbar2')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";

}

function project7(){
  document.getElementById('contenttext')
  .innerHTML="<h1>THINGS</h1> <br> <p> this project is about blah blah blah</p>";

  document.getElementById('block1')
  .src="images/bag.gif";
  document.getElementById('block2')
  .src="images/cyanotype1.png";
  document.getElementById('block3')
  .src="images/cyanotype2.png";
  document.getElementById('block4')
  .src="images/charles.png";
  document.getElementById('block5')
  .src="images/kunst1.png";
  document.getElementById('block6')
  .src="images/hamilton.png";
document.getElementById('block7')
  .src="images/2021holiday.png";
  document.getElementById('block8')
  .src="images/2022holiday.png";
  document.getElementById('block9')
  .src="images/gestuz.png";
  document.getElementById('block10')
  .src="images/gestuz2.png";

  document.getElementById('scrollbar')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
  document.getElementById('scrollbar2')
  .innerHTML="CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! - CLICK ON IMAGE FOR FULLVIEW! -";
}


  function project8(){
    document.getElementById('contenttext')
    .innerHTML="<h1>ABOUT ME <3</h1> <br> <p> I AM A GRAPHIC DESIGNER BASED IN SAN FRANCISCO & A MFA STUDENT AT CALIFORNIA COLLEGE OF THE ARTS. </p>";

    document.getElementById('block1')
  .src="images/skiing.png";
  document.getElementById('block2')
  .src="images/greekme.png";
  document.getElementById('block3')
  .src="images/greekme.png";
  document.getElementById('block4')
  .src="images/greekme.png";
  document.getElementById('block5')
  .src="images/greekme.png";
  document.getElementById('block6')
  .src="images/greekme.png";
document.getElementById('block7')
  .src="images/greekme.png";
  document.getElementById('block8')
  .src="images/greekme.png";
  document.getElementById('block9')
  .src="images/greekme.png";
  document.getElementById('block10')
  .src="images/greekme.png";

    document.getElementById("textblurb").style.backgroundImage = "url(images/pool.png)";

    document.getElementById('scrollbar')
    .innerHTML="ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! -";
    document.getElementById('scrollbar2')
    .innerHTML="ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! - ABOUT ME! -";

}







$('.image1').click(function(e){
  $('#image1').toggleClass('fullscreen'); 
});

$('.image2').click(function(e){
  $('#image2').toggleClass('fullscreen'); 
});

$('.image3').click(function(e){
  $('#image3').toggleClass('fullscreen'); 
});

$('.image4').click(function(e){
  $('#image4').toggleClass('fullscreen'); 
});

$('.image5').click(function(e){
  $('#image5').toggleClass('fullscreen'); 
});

$('.image6').click(function(e){
  $('#image6').toggleClass('fullscreen'); 
});

$('.image7').click(function(e){
  $('#image7').toggleClass('fullscreen'); 
});

$('.image8').click(function(e){
  $('#image8').toggleClass('fullscreen'); 
});

$('.image9').click(function(e){
  $('#image9').toggleClass('fullscreen'); 
});

$('.image10').click(function(e){
  $('#image10').toggleClass('fullscreen'); 
});



