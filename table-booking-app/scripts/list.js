window.addEventListener("load",function(){
    GetBookings();
});
  
function GetBookings(){
  let url = 'https://api.sheety.co/4c2114a86a7798b75775ccafab0605e4/verandahBookingsList/bookingsList';
     fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      var table = document.getElementById("booking-list");
      var bookingIds=[];

    for (var i = 0; i < json.bookingsList.length; i++){
        var gName = json.bookingsList[i].name;
        var gPhone = json.bookingsList[i].phone; 
        var gEmail = json.bookingsList[i].email;
        var gId = json.bookingsList[i].id - 1;
        var gDate = json.bookingsList[i].date;
        var gPax = json.bookingsList[i].pax;
        var gSession = json.bookingsList[i].session;
        var gRemarks = json.bookingsList[i].remarks;
        var buttonId = "delete" + gId;

        let row = table.insertRow(table.rows.length);
        row.insertCell(0).innerHTML = gId;  
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gPhone;
        row.insertCell(3).innerHTML = gEmail;
        row.insertCell(4).innerHTML = gDate;
        row.insertCell(5).innerHTML = gPax;
        row.insertCell(6).innerHTML = gSession;
        row.insertCell(7).innerHTML = gRemarks; 
        row.insertCell(8).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button></br>"; 

        bookingIds.push(buttonId);
        
      }

      for (let j=0; j<bookingIds.length; j++){
        console.log(bookingIds[j]);
       let el=document.getElementById(bookingIds[j]);
       el.addEventListener("click", function(){
        let theId=bookingIds[j].replace("delete",""); 
        DeleteBooking(theId);
       });
     }
     
    });
   }

function DeleteBooking(id){
    if(confirm("Are you sure you want to delete?")){
     let url = 'https://api.sheety.co/4c2114a86a7798b75775ccafab0605e4/verandahBookingsList/bookingsList/'+id;
     fetch(url, {
        method: 'DELETE'
      })
      .then((response) => {
        location.reload();
      }); 
    }else{
      alert("Delete cancelled");
    }
  }