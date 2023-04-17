const button = document.getElementsByClassName("titulo_2")

button.addEventListener("mouseover", function() {
  this.style.backgroundColor = "red";
});

button.addEventListener("mouseout", function() {
  this.style.backgroundColor = "initial";
});