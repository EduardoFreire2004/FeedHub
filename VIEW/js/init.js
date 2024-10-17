(function($){
  $(function(){
   // $('select').material_select();
    $('select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.querySelector('.rating-wrapper').addEventListener('click', updateStarRating, false);
function updateStarRating(evt){
    for(i=0; i < parseInt(evt.target.id); i++){
        const stars = document.querySelectorAll('.rating-wrapper img');
        for(s=0; s < 5; s++){
            stars[s].classList.remove('rating-checked');
        }
        for(j=0; j < parseInt(evt.target.id); j++){
            stars[j].classList.add('rating-checked');
        }
    }
    document.querySelector('#rating').value = evt.target.id;
}