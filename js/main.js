const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//select tab content item
function selectItem(e) {
  //remove border from all tabs
  removeBorder();
  //removes content from all tabs
  removeShow();
  //add border to current tab
  this.classList.add("tab-border");
  //grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //used trick, as you click the tab, id is tab-1,tab-2 or so on..
  //add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

//listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
