
function bowlRoll(){
    
    let point = 0;
    let countStrik = 0;
    var spare = Boolean;
    let blows= [];

    function newBowl(remain){
        let pinMax =10;
        
        for (let i =0; i<(pinMax-remain); i++){
            blows.push(i);
            blows[i] = true;
            
        }
        return blows;
    }
    let gameround = 10;
    newBowl(0);
    //console.log(blows);
    for (let i = 0; i < gameround; i++){
        var round = 0;
        while(round < 2){
        
            //console.log(blows.length);
            let roll = Math.round(Math.random()*blows.length.valueOf(true));
            console.log("You Knocked " + roll + " Pin");
            var remain = blows.length.valueOf(true) - roll;
            console.log("Pin Left " + remain);
            point = point + roll;
            console.log("POINT = " + point );
            roundPoint = roundPoint+roll;

            if (spare == true){
                point = point+roll;
                //console.log(point+"'''"+roll);
                
            }

            if (remain == 0 && round == 0){
                console.log("round is "+round);
                //point = 30;

                console.log("***STRIKE*** Point = "+ point);
                var strike = true;
                
                //point = 10 + point;
                countStrik++;
                //console.log(countStrik);
                round =2;
            }
            else{
                
                strike = false; 
                
            }


            if (remain == 0 && round == 1){

                console.log("**SPARE*** Point = "+ point);
                spare = true;
                
                
                
                //console.log(countStrik);
                //round =2;
            }
            else{
                
                spare = false; 
                
            }
        
            round++;
        
            for (let i =0; i< roll;i++){
                blows.pop();
            }
            

        
        }
        //console.log("here"+strike);
        if (strike == false && countStrik == 1){
            point = point+roundPoint;
            console.log(roundPoint);
            countStrik=0;
        }
        
        if (strike == false && countStrik == 2){
            point = point+roundPoint+roundPoint+10;
            countStrik=0;
        }
        if (strike == false && countStrik == 3){
            point = point+roundPoint+roundPoint+roundPoint +30;
            countStrik=0;
        }

        
        //console.log(point);
        console.log("########### ROUND " + (i+1) + " Done ##############");
        console.log("total Point is " +point);



        newBowl(remain);
        var roundPoint = 0;
        //point = point+ point; 
    }
}

bowlRoll();