const tabitems = document.querySelectorAll(".tab-item");
const tabContentitems = document.querySelectorAll(".tab-content-item");
//select tab content item
function selectItem(e) {
  removeborder();
  removeShow();
  //add border to current tab
  this.classList.add("tab-border");
  //grab content item from DOM
  const tabContentItems = document.querySelector(`#${this.id}-content`);
  tabContentItems.classList.add("show");
}
function removeborder() {
  tabitems.forEach((item) => item.classList.remove("tab-border"));
}
//listen for tab click
tabitems.forEach((item) => item.addEventListener("click", selectItem));
function removeShow() {
  tabContentitems.forEach((item) => item.classList.remove("show"));
}
