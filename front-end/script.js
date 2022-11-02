let isX = false;
const buttons = document.getElementsByClassName("buttons");
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        
        if(buttons[i].innerText != ""){
            return
        }
        if(isX){
            buttons[i].innerText = "O";
            } 
        else{
            buttons[i].innerText = "X";
        }
        for(let i = 0; i < 3; i++){
            let sign = buttons[i*3].innerText;
            let sign1 = buttons[i*3].innerText;

            let isVertical = true, isHorizontal = true, isDiag = true;
            
            for(let j = 0; j < 3; j++){
                console.log(j*3+i);
                if(buttons[i*3+j].innerText != sign)
                    isHorizontal = false;
                if(buttons[j*3+i].innerText != sign1)
                    isVertical = false;
                if(buttons[j*3+i] != buttons[i*3+j] || buttons[j*3+i].innerText == "")
                    isDiag = false;
                
            }
            if((isHorizontal && buttons[i*3].innerText != "") || (isVertical && buttons[i].innerText != "") || isDiag)
                alert("nice mate");
        }
        isX = !isX
    })
}