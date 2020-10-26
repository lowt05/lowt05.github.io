function BookNow(guestName, guestEmail,guestPax){
    let url = 'https://api.sheety.co/d2f6c22aad720df1ddb808edebcc390a/bookingApi/sheet1';
    let body = {
      sheet1: {
        name: guestName,
        email: guestEmail,
        pax: guestPax
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
      // document.getElementById("bookMsg").innerHTML=json.sheet1.name + " sucessfully added!";
      // GetBookings();
    });
  }
  
  window.addEventListener("load",function(){
    document.getElementById("bookNow").addEventListener("click",function(){
      let name = document.getElementById("guestName").value;
      let email = document.getElementById("guestEmail").value;
      let pax = document.getElementById("guestPax").value;
      let remark = document.getElementById("guestRemarks").value;

      console.log(name + "," + email + "," + "," + pax + "," + remarks);
  });

  });


  