function myFunction() {
    var element = document.body;
    element.classList.toggle("Dark-mode");
}

function img(){
   var modal = document.getElementById('MyModal');

            var img1 = document.getElementById('Img-certificateJava');
            var img2 = document.getElementById('Img-certificateDesign');
            var img3 = document.getElementById('Img-certificateSQL');
            var img4 = document.getElementById('Img-certificateReact');
            var img5 = document.getElementById('Img-certificateGit');
            var img6 = document.getElementById('Img-certificateHTML');
            var modalImg = document.getElementById("Img01");
            var captionText = document.getElementById("Caption");
            img1.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img2.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img3.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img4.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img5.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            img6.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }

   
            var span = document.getElementsByClassName("Close")[0];

            span.onclick = function() { 
                modal.style.display = "none";
            }
}