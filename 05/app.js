const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("form");
  loadUsers();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchPost(apiUrl, form);
  });
}

function loadUsers() {
  const promise = fetchGet(apiUrl);

  promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function fetchGet(url) {
  return fetch(url).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }

    return Promise.reject(resp);
  });
}

function insertUsers(usersList) {
  const ulElement = document.querySelector(".users");
  ulElement.innerHTML = "";
  usersList.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.innerText = `${user.firstName} ${user.lastName}`;

    ulElement.appendChild(liElement);
  });
}

function randomID() {
  return Math.floor(Math.random() * (100 + 1));
}

function fetchPost(url, form) {
  const { firstName, lastName } = form;
  const data = {
    id: randomID(),
    firstName: firstName.value,
    lastName: lastName.value,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  loadUsers();
}
