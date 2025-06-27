

const hours = new Date().getHours();

    //greet id

    greet =document.getElementById("greet")

    if(hours >= 6 && hours < 12){
      greet.textContent="Good Morning.."
    }
    else if(hours  >= 12 && hours < 18){
      greet.textContent="Good Afternoon.."
    }
    else{
      greet.textContent="Good Evening.."

    }

