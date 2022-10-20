window.addEventListener('load', function () {
  document.querySelector(".submit-btn").addEventListener("click", function(){
    document.querySelector(".second-container").style.display = "block";
});
});
  document.querySelector(".submit-btn").addEventListener("click", function(){
    document.querySelector(".container").style.display = "none";
  });
  const btns = document.querySelectorAll(".number");
  btns.forEach(btn => {
    btn.addEventListener("click", function(){
      this.classList.add("selected");
      document.querySelector(".raiting-number").innerHTML = this.innerHTML;
    });
  });
