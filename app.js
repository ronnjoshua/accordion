// Variables

const accordion_div = document.getElementsByClassName('content-container');

for(i = 0; i < accordion_div.length; i++){
    
    accordion_div[i].addEventListener('click', function() {

        this.classList.toggle('active');

    });
}