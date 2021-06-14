






var count = document.querySelectorAll(".drum").length;
for(var i = 0; i<count ; i++)
    {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () 
    {
        var ranNum = Math.floor(Math.random()*5);
        switch (ranNum)
        {
            case 0:
                this.style.color="white";
                break;
            case 2:
                this.style.color="blue";
                break;
            case 3:
                this.style.color="yellow";
                break;
            case 4:
                this.style.color="green";
                break;
            default:
                this.style.color="red";
        }
        
        var keyNote = this.innerText;
        var audio = new Audio("sounds/" + keyNote + ".mp3");
        audio.play();

    });
    }

    document.addEventListener("keypress", function(event)
    {

        var keyPress = event.key;
        var audio = new Audio("sounds/" + keyPress + ".mp3");
        audio.play();
        // document.querySelector("."+keyPress).style.color="white";
        var ranNum2 = Math.floor(Math.random()*5);
        switch (ranNum2)
        {
            case 0:
                document.querySelector("."+keyPress).style.color="white";
                break;
            case 2:
                document.querySelector("."+keyPress).style.color="blue";
                break;
            case 3:
                document.querySelector("."+keyPress).style.color="yellow";
                break;
            case 4:
                document.querySelector("."+keyPress).style.color="green";
                break;
            default:
                document.querySelector("."+keyPress).style.color="red";
        }
    });