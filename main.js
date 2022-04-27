
////////////ExtraCurricular Slide Shows //////////////////////


//Society of Women Engineers//
            var sweSlideNumber = 0;
            var wopoSlideNumber = 0;

            sweAnnimation()
            wopoAnimation()
            
            function wopoAnnimation() {
              var i;
              var x = document.getElementsByClassName("sweSlides");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              sweSlideNumber++;
              if (sweSlideNumber > x.length) {sweSlideNumber = 1}    
              x[sweSlideNumber-1].style.display = "block";  
              setTimeout(wopoAnnimation, 3000);    
            }

//Womens Water Polo//
            function sweAnnimation() {
              var i;
              var x = document.getElementsByClassName("wopoSlides");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              wopoSlideNumber++;
              if (wopoSlideNumber > x.length) {wopoSlideNumber = 1}    
              x[wopoSlideNumber-1].style.display = "block";  
              setTimeout(sweAnnimation, 3000);    
            }
//////////////////////////////////////////////////////////////////






////////////Publication Slide Shows //////////////////////
              function plusDivs(n) {
                showDivs(slideIndex += n);
              }
              
              function currentDiv(n) {
                showDivs(slideIndex = n);
              }
              
              function showDivs(n) {
                var i;
                var x = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("demo");
                if (n > x.length) {slideIndex = 1}    
                if (n < 1) {slideIndex = x.length}
                for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
                }
                for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" w3-red", "");
                }
                x[slideIndex-1].style.display = "block";  
                dots[slideIndex-1].className += " w3-red";
              }
//////////////////////////////////////////////////////////////////








