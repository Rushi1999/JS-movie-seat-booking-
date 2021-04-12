//const container = document.querySelector('.container');
//const seats = document.querySelectorAll('.row .seat:not(.occupied)');
//const count = document.getElementById('count');
//const price = document.getElementById('price');
//
//const movieSelect = document.getElementById('movie');
//let ticketPrice = +movieSelect.value;
//
//const populateUI = () => {
//  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
//
//  if (selectedSeats !== null && selectedSeats.length > 0) {
//    seats.forEach((seat, index) => {
//      if (selectedSeats.indexOf(index) > -1) {
//        seat.classList.add('selected');
//      }
//    });
//  }
//
//  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
//  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
//
//  if (selectedMovieIndex !== null) {
//    movieSelect.selectedIndex = selectedMovieIndex;
//  }
//
//  if (selectedMoviePrice !== null) {
//    count.innerText = selectedSeats.length;
//    price.innerText = selectedSeats.length * +selectedMoviePrice;
//  }
//};
//
//populateUI();
//
//selectedMovie = (movieIndex, moviePrice) => {
//  localStorage.setItem('selectedMovieIndex', movieIndex);
//  localStorage.setItem('selectedMoviePrice', moviePrice);
//};
//
//const updateSelectedSeatsCount = () => {
//  const selectedSeats = document.querySelectorAll('.row .selected');
//
//  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
//
//  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
//
//  const selectedSeatsCount = selectedSeats.length;
//
//  count.innerText = selectedSeatsCount;
//  price.innerText = selectedSeatsCount * ticketPrice;
//};
//
//// Seat select event
//container.addEventListener('click', e => {
//  if (
//    e.target.classList.contains('seat') &&
//    !e.target.classList.contains('occupied')
//  ) {
//    e.target.classList.toggle('selected');
//
//    updateSelectedSeatsCount();
//  }
//});
//
//// Movie select event
//movieSelect.addEventListener('change', e => {
//  ticketPrice = +e.target.value;
//  selectedMovie(e.target.selectedIndex, e.target.value);
//
//  updateSelectedSeatsCount();
//});

//$('input:radio[name=type]:checked').val() == "walk_in")


$(document).ready(function() {
    lseat = localStorage.getItem("seatlist");
    lshow = localStorage.getItem("showClass");
    $("."+lshow+" .seat").each(function(){
        // Test if the div element is empty
        if(!($(this).hasClass('occupied'))){
           if(lseat.includes($(this).text().trim())){
               $(this).addClass("occupied");
           }
        }
    });
})

var selectedShow = $('input[type=radio][name=show]').attr('id');
$('input[type=radio][name=show]').change(function() {
    if (this.value == '10'){
        $('.show1').show();
        $('.show2').hide();
        $('.show3').hide();
    }else if(this.value == '12'){
        $('.show1').hide();
        $('.show2').show();
        $('.show3').hide();
    }else if(this.value == '8'){
        $('.show1').hide();
        $('.show2').hide();
        $('.show3').show();
    }
    
    selectedShow = $(this).attr('id');
    console.log(selectedShow)

});

var price=0;
var seatlist= [];
$('.seat').click(function(){
    console.log(1)
    
    
    if($(this).hasClass('selected')){
       $(this).removeClass('selected');
        console.log($(this).text());
        
        
        
    //For Different Prices of Gold silver and Platinum seats    
        if($(this).text().trim().slice(0, -1) == 'A'){
            console.log(price)
            price=price-320;
        }else if($(this).text().trim().slice(0, -1) == 'B'){
            console.log(price)
            price=price-280;
        }else{
            console.log(price)
            price=price-240;
        }
        
        var sind = seatlist.indexOf($(this).text().trim());
        seatlist.splice(sind, 1);
        
        $('.seatlist').html(seatlist.join(' ')+' ')
    }else{
       $(this).addClass("selected");
    
        //For Different Prices of Gold silver and Platinum seats  
        if($(this).text().trim().slice(0, -1) == 'A'){
            console.log(price)
            price=price+320;
        }else if($(this).text().trim().slice(0, -1) == 'B'){
            console.log(price)
            price=price+280;
        }else{
            console.log(price)
            price=price+240;
        }
        
        seatlist.push($(this).text().trim());
         $('.seatlist').html(seatlist.join(' ')+' ')
    
    }


    $('#price').html(price);
    $('#count').html($('.container .selected').length);
        
})


$('#bookbtn').click(function(){
  var selshow = ''
    if(selectedShow=='show1'){
        selshow='Show 1'
    }else if(selectedShow=='show2'){
        selshow='Show 2'
    }else{
        selshow='Show 3'
    }
    
    localStorage.setItem("show",selshow);
    localStorage.setItem("showClass",selectedShow);
    localStorage.setItem("price",price);
    localStorage.setItem("seatlist",seatlist);
    
    window.location.href = "bill.html";
          
})
