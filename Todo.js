// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   let fname = username.value;
//   let userage = age.value;
//   localStorage.setItem("todo", JSON.stringify([fname, userage]));
//   console.log(e);
//   console.log(fname);
//   console.log(userage);
// });

// Create
let submitForm = document.getElementById("form-input");
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let userage = document.getElementById("userage").value;
  //   localStorage.setItem("username", JSON.stringify([username, userage]));
  console.log(username);
  console.log(userage);

  //create a list
  function addList(userData) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userData));
    //create edit btn
    let editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.onclick = function () {
      let [name, age] = userData.split(", ");
      document.getElementById("username").value = name;
      document.getElementById("userage").value = age;
      li.remove();
    };
    //delete btn
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.onclick = function () {
      localStorage.removeItem("li");
      li.remove();
    };
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    document.querySelector(".task-list").appendChild(li);
  }

  addList(`${username} , ${userage}`);

  //store data in object
  const userData = `${username}, ${userage}`;
  saveToLocalStorage(userData);

  //save function for local Storage
  function saveToLocalStorage(userData) {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    storedData.push(userData);
    localStorage.setItem("userData", JSON.stringify(storedData));
  }

  //errasing previous data
  document.getElementById("username").value = "";
  document.getElementById("userage").value = "";
});

//delete from locale storeage
// deletebtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   localStorage.removeItem("todo");
// });
