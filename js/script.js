var button=document.querySelector(".appointment-button");
var searchForm=document.querySelector(".modal");
var form=document.querySelector("form");
var dateEntry=searchForm.querySelector("#arrival-field");
var dateDeparture=searchForm.querySelector("#departure-field");
var children=searchForm.querySelector("#children");
var adults=searchForm.querySelector("#adults");

button.addEventListener("click", function(evt){
  evt.preventDefault();
  if(searchForm.classList.contains("modal-show")) {
    searchForm.classList.remove("modal-show");
    searchForm.classList.remove("modal-error");

  } else {
    searchForm.classList.add("modal-show");
    };
    dateEntry.focus();
  });

if(searchForm.classList.contains("no-js")) {
  searchForm.classList.remove("no-js");
  form.addEventListener("submit", function(evt){
  if(!dateEntry.value||!dateDeparture.value||!children.value||!adults.value){
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");
   }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode===27){
    if(searchForm.classList.contains("modal-show")){
      searchForm.classList.remove("modal-show");
      searchForm.classList.remove("modal-error");
    }
  }
});
};
