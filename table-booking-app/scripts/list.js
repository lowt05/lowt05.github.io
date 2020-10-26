window.addEventListener("load",function(){
    GetBookings();
});
  
function GetBookings(){
  let url = 'https://api.sheety.co/d2f6c22aad720df1ddb808edebcc390a/bookingApIdemo/sheet1';
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
        var gRemarks = json.sheet1[i].remarks;
        var buttonId = "delete" + gId;

        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML = gId;  
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML = gRemarks; 
        row.insertCell(5).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button></br>"; 

        bookingIds.push(buttonId);
        
      }

    for (let j=0; j<bookingIds.length; j++){
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

    //let url = 'https://api.sheety.co/d2f6c22aad720df1ddb808edebcc390a/bookingApi/sheet1/'+id;
     let url = 'https://api.sheety.co/d2f6c22aad720df1ddb808edebcc390a/bookingApIdemo/sheet1'+id;
      fetch(url, {
        method:"delete"
      })
      .then((response) => {
        location.reload();
      }); 

    }else{
      alert("Delete cancelled");
    }
  }
  