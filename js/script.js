let togel=document.querySelector(".toggel");
togel.addEventListener('click',()=>{
    togel.classList.toggle('Active');
})
let navigation=document.querySelector('.navigation');
togel.addEventListener('click',()=>{
    navigation.classList.toggle('active');
})
 // galerie js//
 let none=document.querySelector(".none");
 let more=document.querySelector('.more');
 
 more.addEventListener('click',()=>{
    none.classList.toggle('visible');
 })
 more.addEventListener('click',()=>{
    more.classList.toggle('povot')
 })