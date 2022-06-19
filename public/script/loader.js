window.addEventListener("load", function (e) {
  var bar = document.querySelector(".loadingio-spinner-eclipse-lz2x04wpz8k");
  var body = document.querySelector("body");
  i = 0;
  var inter = setInterval(function () {
    i++;
    bar.style.width = `${i}%`;
    bar.innerHTML = `${i}%`;
  }, 2000);
  setInterval(function () {
    clearInterval(inter);
    if ((bar.style.width = 100)) {
      body.style.display = "block";
      bar.style.display = "none";
    }
  }, 700);
  this.disabled = true;
});
