function toggleBox(e) {
    let box = document.getElementById("box");
    e.name === 'menu-outline' ? (e.name = "close-outline", box.classList.add('top-[80px]'), box.classList.add('opacity-100')) : (e.name = "menu-outline", box.classList.remove('top-[80px]'), box.classList.remove('opacity-100'))
}

const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Submitted Successfully");
  });
}


function gotoJob()
{
    window.location.href = "jobpage.html";
}

/* Job Page.html Codes */

document.addEventListener("DOMContentLoaded", () => {
    const sortBtns = document.querySelectorAll(".job-buttons > *");
    const sortContainers = document.querySelectorAll(".job-container > *");
    sortBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        sortBtns.forEach((btn) => btn.classList.remove("on"));
        btn.classList.add("on");

        const targetData = btn.getAttribute("data-target");
        sortContainers.forEach((item)=>{
          item.classList.add("delete");
          if(item.getAttribute("data-item") === targetData || targetData === "all")
          {
            item.classList.remove("delete");
          }
        });
      });
    });
  });
  