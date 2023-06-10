const items = document.getElementsByClassName("item");
const right = document.getElementById("right");
const left = document.getElementById("left");
const leftContent=left.innerHTML;
// getting all child elements of left container and converting it to array
let array=Array.from(left.children);
console.log(array);

const resetFunction = () => {
  // resetting right container
  right.innerHTML = "";
  // resetting left container
  for (let item of array) {
    left.appendChild(item);
    item.style.background="#00d4ff";
  }
};

dragAndDrop();
function dragAndDrop() {
  for (let item of items) {
    item.addEventListener("dragstart", function (e) {
      const selectedItem = e.target;
      right.addEventListener("dragover", function (e) {
        e.preventDefault();
        // previousContainer=this;
      });
      item.addEventListener("drag", function (event) {
        // changing the appearance while dragging the item
        item.classList.add("dragging");
      });
      right.addEventListener("drop", function (e) {
        // changing the UI when an item is dropped in the second container
        selectedItem.style.backgroundColor = "#0480c7";
        right.appendChild(selectedItem);
      });
    });
  }
}
