const boxes = document.querySelectorAll(".group div")
boxes.forEach(box => {
    box.addEventListener('mouseenter', function(event){
        box.style.backgroundColor = "red";
        setTimeout(function() {
            box.style.backgroundColor = "orange";
        }, 50);
        setTimeout(function() {
            box.style.backgroundColor = "yellow";
        }, 100);
        setTimeout(function() {
            box.style.backgroundColor = "green";
        }, 150);
        setTimeout(function() {
            box.style.backgroundColor = "blue";
        }, 200);
        setTimeout(function() {
            box.style.backgroundColor = "navy";
        }, 250);
        setTimeout(function() {
            box.style.backgroundColor = "purple";
        }, 300);
    });

    box.addEventListener('mouseleave', function(event){
        setTimeout(function() {
            box.style.backgroundColor = "";
            }, 300);
    });
})