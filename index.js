const donatebtn = document.getElementById("donate");
const anarchbtn = document.getElementById("anarch");
const survivebtn = document.getElementById("survive");
const tutbtn = document.getElementById("tut");
const differbtn = document.getElementById("differ");
const anarchHbtn = document.getElementById("anarchH");
console.log(anarchbtn);
const rowDonate = document.querySelector(".shop-item-dn");
const rowAnarch = document.querySelector(".shop-item-an");
const rowSurvive = document.querySelector(".shop-item-sr");
const rowTut = document.querySelector(".shop-item-tu");
const rowDiffer = document.querySelector(".shop-item-df");
const rowAnarchH = document.querySelector(".shop-item-ah");

donatebtn.addEventListener("click", () => {
  // rowDonate.classList.add = 'ds';
  rowDonate.classList.remove("anarch");

  rowAnarch.classList.add("anarch");
  // rowSurvive.classList.add("anarch");
  // rowTut.classList.add("anarch");
  // rowDiffer.classList.add("anarch");
  // rowAnarchH.classList.add("anarch");


  anarchbtn.classList.remove("tag-active");
  anarchbtn.classList.add("tag-inactive");

  donatebtn.classList.remove("tag-inactive");
  donatebtn.classList.add("tag-active");

  survivebtn.classList.remove("tag-active");
  survivebtn.classList.add("tag-inactive");

  tutbtn.classList.remove("tag-active");
  tutbtn.classList.add("tag-inactive");

  differbtn.classList.remove("tag-active");
  differbtn.classList.add("tag-inactive");

  anarchHbtn.classList.remove("tag-active");
  anarchHbtn.classList.add("tag-inactive");

  // rowSurvive.classList.add = 'ds';
  // rowTut.classList.add = 'ds';
  // rowDiffer.classList.add = 'ds';
  // rowAnarchH.classList.add = 'ds';
  console.log("ok");
});

anarchbtn.addEventListener("click", () => {
  // rowDonate.classList.add = 'ds';
  rowAnarch.classList.remove("anarch");

  rowDonate.classList.add("anarch");
  // rowSurvive.classList.add("anarch");
  // rowTut.classList.add("anarch");
  // rowDiffer.classList.add("anarch");
  // rowAnarchH.classList.add("anarch");


  anarchbtn.classList.remove("tag-inactive");
  anarchbtn.classList.add("tag-active");

  donatebtn.classList.remove("tag-active");
  donatebtn.classList.add("tag-inactive");

  survivebtn.classList.remove("tag-active");
  survivebtn.classList.add("tag-inactive");

  tutbtn.classList.remove("tag-active");
  tutbtn.classList.add("tag-inactive");

  differbtn.classList.remove("tag-active");
  differbtn.classList.add("tag-inactive");

  anarchHbtn.classList.remove("tag-active");
  anarchHbtn.classList.add("tag-inactive");

  // rowSurvive.classList.add = 'ds';
  // rowTut.classList.add = 'ds';
  // rowDiffer.classList.add = 'ds';
  // rowAnarchH.classList.add = 'ds';
  console.log("ok");
});
