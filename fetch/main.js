// fetch("https://reqres.in/api/users").then((res) =>
//   res.json().then((data) => {

//     console.log(data);

//   })
// );

// // fetch('link').then((res)=>()
// // sdfsdf
// // })

fetch("https://reqres.in/api/users/23", {
  method: "POST",
//   CRUD 
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    if (res.ok) {
      console.log("Muvaffaqqiyatli!");
    } else {
      console.log("Xato mavjud!");
    }
    return res.json();
  })

  .then((data) => {
    console.log(data);
  })

  .catch((err) => console.log("error"));

// response =>
