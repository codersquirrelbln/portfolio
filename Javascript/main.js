let coll = document.getElementsByClassName("collapsible");
// let minimize = document.querySelector('#minimze');
let i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// for (j = 0; j < collVisa.length; i++) {
//   collVisa[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


// minimize.addEventListener("click", () => {
//   this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     console.log('working');
//     if (content.style.display === "block") {
//       console.log('not working? inside if statement');
//       content.style.display = "none";
//     } else {
//       console.log('not working? inside else');
//       content.style.display = "block";
//     }
//     console.log('finished');
// });
