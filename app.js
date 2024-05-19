let eye = document.querySelector('.eye')
let eye2 = document.querySelector('.eye2')
let pass_change = document.querySelector('.pass_change')

eye.addEventListener('click' ,function(){  
   pass_change.type = "text";
   eye.style.display = "none";
   eye2.style.display = "block";
});
eye2.addEventListener('click' ,function(){
  
   pass_change.type = "password";
   eye2.style.display = "none";
   eye.style.display = "block";
});
