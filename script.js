var hillary = document.getElementbyId("hillary");
var hillaryPic = document.getElementbyId("hillary-pic");
var george = document.getElementbyId("george");
var georgePic = document.getElementbyId("george-pic");
var ben = document.getElementbyId("ben");
var benPic = document.getElementbyId("ben-pic");

hillary.addEventListener("click", function() {
  if (hillaryPic.className === "hide") {
    hillaryPic.className = "";
  } else {
    hillaryPic.className = "hide";
  }
});

george.addEventListener("click", function() {
  if (georgePic.className === "hide") {
    georgePic.className = "";
  } else {
    georgePic.className = "hide";
  }
});

ben.addEventListener("click", function() {
  if (benPic.className === "hide") {
    benPic.className = "";
  } else {
    benPic.className = "hide";
  }
});
