function BookNow(guestName, guestEmail,guestPax, guestRemarks){
    let url = 'https://api.sheety.co/99528d9511632b06c1b7c8b56fb9f308/bookingApIsheet/sheet1';
    let body = {
      sheet1: {
        name: guestName,
        email: guestEmail,
        pax: guestPax,
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
      console.log(json.sheet1);
       alert(json.sheet1.name + " sucessfully added!");
    });
  }
  
  window.addEventListener("load",function(){
    document.getElementById("bookNow").addEventListener("click",function(){
      let name = document.getElementById("guestName").value;
      let email = document.getElementById("guestEmail").value;
      let pax = document.getElementById("guestPax").value;
      let remark = document.getElementById("guestRemarks").value;

      BookNow(name, email, pax, remark);

  });
});