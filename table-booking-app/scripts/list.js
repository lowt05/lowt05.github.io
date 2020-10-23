window.addEventListener("load",function(){
    GetBookings();
});
  
  function GetBookings(){
//  let url = 'https://api.sheety.co/d2f6c22aad720df1ddb808edebcc390a/bookingApIdemo/sheet1';
let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingApp/bookings';
  fetch(url)
  .then((response) => response.json())
  .then(json => {
    // Do something with the data
    //console.log(json.sheet1);
    var bookings = document.getElementById("booking-list");
    var bookingIds=[];

   for (var i = 0; i < json.sheet1.length; i++){
      var gName = json.sheet1[i].name;
      var gEmail = json.sheet1[i].email;
      var gPax = json.sheet1[i].pax;
      var gId = json.sheet1[i].id;

 //for (var i = 0; i < json.bookings.length; i++){
 //var gName = json.bookings[i].name;
 //var gEmail = json.bookings[i].email;
 //var gPax = json.bookings[i].pax;
 //var gId = json.bookings[i].id;



      var buttonId = "delete" + gId;

      let row = bookings.insertRow(bookings.rows.length);
      row.insertCell(0).innerHTML = gId;  
      row.insertCell(1).innerHTML = gName;
      row.insertCell(2).innerHTML = gEmail;
      row.insertCell(3).innerHTML = gPax;
      row.insertCell(4).innerHTML = ""; //Remarks
      row.insertCell(5).innerHTML = "<button id='" + buttonId + "' class'btn btn-Danger'>Delete</button></br>"; 

      // bookings.innerHTML += gId + "- " + gName + ", " + gEmail + "- " + gPax;
      // bookings.innerHTML += "<button id='" + buttonId + "'>Delete </button></br>";

      bookingIds.push(buttonId);
      
    }
    for (let j=0; j<bookingIds.length; j++){
       // console.log(bookingIds[j]);
      let el=document.getElementById(bookingIds[j]);
      el.addEventListener("click", function(){
       let theId=bookingIds[j].replace("delete",""); 
       // DeleteBooking(theId);
      });
    }
    
   });
  }
 