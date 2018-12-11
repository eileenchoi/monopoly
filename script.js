
const userSelection ={
    office: [
        {
            propCard: "orange",
            excuse: "Your car won't start. Don't have a car? Get one." 
        },
        {
            propCard: "parkPlace",
            excuse: "There's a S.W.A.T team outside your neighbor's house, and they've told everyone to remain inside until further notice."
        },
        {
            propCard: "marvinGardens",
            excuse: "There is stuff coming from your butt and it won't stop."
        },
        {
            propCard: "balticAve",
            excuse: "You've discovered you have lice."
        },
    ],
     outside: [
        {
            propCard: "orange",
            excuse: "The airline lost your grandmother's body shipping it back to the motherland for the funeral. You have to go. Now. "
        },
        {
            propCard: "parkPlace",
            excuse: "Crabs."
        },
        {
            propCard: "marvinGardens",
            excuse: "Your Uncle died. Again."
        },
        {
            propCard: "balticAve",
            excuse: "Your dog won't stop puking. Don't have a dog? Get one."
        },
    ],
     home: [
         {
             propCard: "orange",
             excuse: "Tell yourself you deserve that magnum of ros\xE9 in the fridge and get your wine on.",
         },
         {
             propCard: "parkPlace",
             excuse: "Powers out."
         },
         {
             propCard: "marvinGardens",
             excuse: "Fridge is dead. You have to fix it."
         },
         {
             propCard: "balticAve",
             excuse: "You CAN'T work. There's no more beer."
         },
     ],
     car: [
         {
             propCard: "orange",
             excuse: "You forgot you're due in court today, to testify against your drug-dealer father."
         },
         {
             propCard: "parkPlace",
             excuse: "Someone robbed you last night, and they stole your tools. Nothing else, just your tools."
         },
         {
             propCard: "marvinGardens",
             excuse: "Someone stole your boots."
         },
         {
             propCard: "balticAve",
             excuse: "The dog turned off the alarm."
         },
     ]}

$(document).ready(function () {

    let userArray = null;

        // listen for the user submit, prevent default. 
        $("form").on("submit", function (e) {
         e.preventDefault()
        
        //  animation on click, and repeat on click
        const animationName = "animated rubberBand";
        const animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

        $("button").addClass(animationName).one(animationEnd, function(){
            $(this).removeClass(animationName)
        });
    
        // variable to store the first user input
        const firstUserInput = $("input[name=workplace]:checked").val();
        console.log(firstUserInput);
        
        // variable to store the second user input
        const secondUserInput = $("input[name=propCard]:checked").val();
        console.log(secondUserInput);
        
        // the array tied to the first user selection is stored in the userArray variable 
        const userArray = userSelection[firstUserInput];
        console.log(userArray);
        
        // for-loop to run through the options, to see if the second user input matches any of the propCard options in the userArray. When the secondUserInput matches a propCard in the array, then the corresponding excuse is displayed on the screen, within the 'response' div. 
        
        for(let i = 0; i < userArray.length; i= i+1){   
            if (secondUserInput === userArray[i].propCard){
                console.log (userArray[i].excuse);    
                $(".response").html(userArray[i].excuse);  
            }
            
            
        }; // for-loop closed 
    });  //  form function closed
}); //  primary function closed
    
//smoothscroll plugin

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
