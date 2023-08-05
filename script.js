let isOrderAccepted =false
let isValetFound = false

window.addEventListener('load',function(){
    document.getElementById('acceptOrder').addEventListener('click',function(){
        askRestaurantToAcceptOrReject();
        checkIfOrderAcceptedFromRestaurant();
        // alert("askRestaurantToAcceptOrReject");
    })
})

function askRestaurantToAcceptOrReject(){
    setTimeout(()=>{
        isOrderAccepted=confirm('Should restaurant accept or not')
        console.log(isOrderAccepted);
    },1000)
}

function checkIfOrderAcceptedFromRestaurant(){
setTimeout(()=>{
    if(isOrderAccepted) alert("Order Accepted");
    else alert("Order rejected")
},5000)
}