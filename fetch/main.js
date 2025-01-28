// fetch("https://reqres.in/api/users").then((res) =>
//   res.json().then((data) => {

//     console.log(data);

//   })
// );

// // fetch('link').then((res)=>()
// // sdfsdf
// // })

fetch("https://fakestoreapi.com/products", {
  method: "POST",
//   CRUD 
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "User 1",
    price: 34,
    description: 'dsfsdfsdfsdf',
    image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating:{
      rate: 4.3
    }
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
    
    document.getElementById('myImage').src = data?.image
    document.getElementById('title').innerHTML ='' + data?.title
    document.getElementById('my_desc').innerHTML = 'Description: ' + data?.description
    document.getElementById('myId').innerHTML = 'ID: ' + data?.id
    document.getElementById('my_price').innerHTML = 'Price: ' + data?.price + " so'm"
  })

  .catch((err) => console.log("error"));

// response =>
