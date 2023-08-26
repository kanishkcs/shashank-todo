let array = []

$(document).ready(function() {
  
     const storedArray = localStorage.getItem('storedArray') || [];
 

    console.log(typeof(storedArray))
    const storedArrayString =  storedArray.replace(/\s+/g, '').split(',')
    const lis = document.querySelector(".main")

    storedArrayString.forEach((text) => {
        const li = document.createElement('li');
        li.className = 'strike'; 
        li.innerHTML = `
            <input type='checkbox' class='checkme' checked />
            ${text}
            <hr />
        `;
        lis.appendChild(li);
    });
  });

$(".checkme").click(function(){
    var clicked_id = $(this).parent();
    clicked_id.toggleClass("strike");
    var lists = $(".strike");
    
    lists.each(function() {
        if(!array.includes($(this).text())){
            array.push($(this).text());
        }
        
    });
    
    localStorage.setItem('storedArray', array); 
    
    console.log(localStorage.getItem("storedArray"));
});


$(".clear").click(()=>{
    localStorage.removeItem("storedArray");
})