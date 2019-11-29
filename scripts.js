window.addEventListener("load", function(){
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function(event){
        let confirmTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeoff === true){
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in Flight";
            let background = document.getElementById("shuttleBackground");
            background.style.backgroundColor = "blue";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = 10000;
        }
    })

    let land = document.getElementById("landing");
    land.addEventListener("click", function(event){
        alert("The shuttle is landing. Landing gear engaged");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";
        let background = document.getElementById("shuttleBackground");
        background.style.backgroundColor = "green";
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = 0;
        rocket.style.top = '250px';
    })

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function(event){
        let confirmAbort = confirm("Confirm that you want to abort the mission.");
        if (confirmAbort === true){
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Mission Aborted";
            let background = document.getElementById("shuttleBackground");
            background.style.backgroundColor = "green";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = 0;
            rocket.style.top = '250px';
            rocket.style.left = '220px';
        }
    })
    
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.top = '250px';
    rocket.style.left = '220px';

    let up = this.document.getElementById("up");
    up.addEventListener("click", function(event){ 
        if (rocket.style.top > '0'){
            let temp = parseInt(rocket.style.top);
            temp2 = temp - 10 + 'px';
            rocket.style.top = temp2;  
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML= parseInt(shuttleHeight.innerHTML)+10000;
        }
    })

    let down = this.document.getElementById("down");
    down.addEventListener("click", function(event){
        if (rocket.style.top < '250px'){
            let temp = parseInt(rocket.style.top);
            temp2 = temp + 10 + 'px';
            rocket.style.top = temp2;  
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML= parseInt(shuttleHeight.innerHTML)-10000;
        }
    })

    let left = this.document.getElementById("left");
    left.addEventListener("click", function(event){
        if(rocket.style.left > '0'){
            let temp = parseInt(rocket.style.left);
            temp2 = temp - 10 + 'px';
            rocket.style.left = temp2;  
        }
    })

    let right = this.document.getElementById("right");
    right.addEventListener("click", function(event){
        if(rocket.style.left < '440px'){
            let temp = parseInt(rocket.style.left);
            temp2 = temp + 10 + 'px';
            rocket.style.left = temp2;  
        }
    })
})