let userList = document.getElementById("myBox");


fetch("https://reqres.in/api/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data?.data);

    data?.data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.id}: ${user.first_name}`;
      userList.appendChild(listItem);
    });
  });

async function registerUser() {
  let newUsername = document.getElementById("first_name").value;
  const registerUser = document.getElementById("newUser");
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name: newUsername }),
  })
    .then((res) => res.json())
    .then((data) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${data.id}: ${data.first_name}`;
      userList.appendChild(listItem);
      console.log(data);
    });
}
