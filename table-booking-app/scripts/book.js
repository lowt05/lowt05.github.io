function BookNow(guestName, guestPhone, guestEmail, visitDate, guestPax, whichSession, guestRemarks){
  let url = 'https://api.sheety.co/4c2114a86a7798b75775ccafab0605e4/verandahBookingsList/bookingsList';
  let body = {
    bookingsList: {
      name: guestName,
      phone: guestPhone,
      email: guestEmail,
      date: visitDate,
      pax: guestPax,
      session: whichSession,
      remarks: guestRemarks
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.bookingsList);
     alert(json.bookingsList.name + " sucessfully added!");
  });
}

window.addEventListener("load",function(){
  document.getElementById("bookNow").addEventListener("click",function(){
    let name = document.getElementById("guestName").value;
    let phone = document.getElementById("guestPhone").value;
    let email = document.getElementById("guestEmail").value;
    let date = document.getElementById("visitDate").value;
    let pax = document.getElementById("guestPax").value;
    let session = document.getElementById("whichSession").value;
    let remarks = document.getElementById("guestRemarks").value;

    BookNow(name, phone, email, date, pax, session, remarks);

});
});