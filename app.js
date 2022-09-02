let modal = document.querySelector(".modal");
let txtArea = document.getElementById("dialog-input-messageid");


function onAdd(){
  let confirmation = document.getElementById("confirmation");
  if (!confirmation.classList.contains("modal-open")) {
        confirmation.classList.add("modal-open");
        txtArea.value = "";
      }
}

function onCancel() {
  let confirmation = document.getElementById("confirmation");
  confirmation.classList.remove("modal-open");
}
function addTask(e){
  if (txtArea.value === "") {
    alert("Enter your message");
  }else {
    const messages = document.getElementById("messages");
    const messageBox = document.createElement("div");

    messageBox.classList.add("message-box","message-created");
    messages.appendChild(messageBox);
    // messageBox.classList.remove("message-created");
    requestAnimationFrame(() => {
      messageBox.classList.remove("message-created");
    });

    // (function(){
    //   messageBox.classList.remove("message-created");
    // })();

    const clientimg = document.createElement("img");
    clientimg.className = "client-img";
    clientimg.src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80";
    messageBox.appendChild(clientimg);
    const messageHeaderDiv = document.createElement("div");
    messageHeaderDiv.className = "message-header-div";
    messageBox.appendChild(messageHeaderDiv);
    const messageHeaderDivContent = document.createElement("div");
    messageHeaderDivContent.className = "message-header-div-content";
    messageHeaderDiv.appendChild(messageHeaderDivContent);
    const clientNameDiv = document.createElement("div");
    clientNameDiv.className = "client-name-div";
    messageHeaderDivContent.appendChild(clientNameDiv);
    const clientName = document.createElement("span");
    clientName.className = "client-name";
    clientNameDiv.appendChild(clientName);
    clientName.textContent = "Amir JS";
    const starDiv = document.createElement("div");
    starDiv.className = "star-div";
    messageHeaderDivContent.appendChild(starDiv);
    const starIcon = document.createElement("i");
    starIcon.className = "fa-regular fa-star";
    starDiv.appendChild(starIcon);
    const messageLine = document.createElement("span");
    messageLine.className = "message-line";
    messageLine.textContent = txtArea.value;
    messageHeaderDiv.appendChild(messageLine);
    const dataMessage = document.createElement("span");
    dataMessage.className = "date-message";
    dataMessage.textContent = "Aug, 26";
    messageHeaderDiv.appendChild(dataMessage);

    onCancel();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("confirmation")
    .addEventListener("click", onCancel);
  document
    .querySelector(".modal")
    .addEventListener("click", (e) => e.stopPropagation());
  });

// loadEventListeners();
function loadEventListeners(){
  modal.addEventListener("click", addTask);
}

let messageBox = document.getElementsByClassName("message-box");

function handleOnMouseDown(){
  console.log("on mouse down");
  startPressTimer();

}
function handleOnMouseUp(){
  console.log("on mouse up");
  clearTimeout();
}
function handleOnTouchStart(){
  console.log("on touch start");
  // startPressTimer();
}
function handleOnTouchEnd(){
  console.log("on touch end");
}

function startPressTimer(){
  setTimeout(() => {
    // console.log("timeout");
    openDeleteModal();
  },500)
}
function openDeleteModal(){
  let confirmation = document.getElementById("confirmation");
  if (!confirmation.classList.contains("modal-open")) {
        confirmation.classList.add("modal-open");
        txtArea.value = "";
      }
}
