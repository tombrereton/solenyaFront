const LogClicks = (clickableElementId) => {
    
   var homeClick = document.getElementById(clickableElementId)
    console.log("What is this",homeClick);
    homeClick.addEventListener('click', function(e){
        newrelic.addPageAction('clickedTryMe');
        console.log("Click:", homeClick);
    })
}

export default LogClicks;