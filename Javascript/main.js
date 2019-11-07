let copyText = document.querySelector('#my-input');
// let copyBtn = document.querySelector('.copy-btn');

// console.log(copyBtn);
// console.log(copyText.value);


const copyEmail = (event) => {
  // event.preventDefault();
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}

// copyBtn.addEventListener('click', copyEmail());
// let coll = document.getElementsByClassName("collapsible");
// // console.log(coll);
// // let minimize = document.querySelector('#minimze');
// let i;

// console.log(coll);
// for (i = 0; i < coll.length; i++) {
//   console.log('hello');
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     console.log(content);
//     if (content.style.display === "block") {
//       console.log('if statement');
//       content.style.display = "none";
//     } else {
//       console.log('else statement');
//       content.style.display = "block";
//     }
//   });
// }



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
