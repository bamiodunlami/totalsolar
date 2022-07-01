$(document).ready(function(){
    
        //Inverter Size calculation
        Formulars:
        // Energy required (Load size)= Quantity x Watt
        // T0tal enrgy perday = Energy required x hr


        $("#btn-calculate").click(function(){
            inputs=$('.hour').length;
            console.log("Numbers of Input is" + inputs);
            var wattage=$('.watt');
            var quantity=$('.qty');
            var time=$('.hour')

              var result=[];// store total watt
              var result2=[];// store total watt hour

            for (var i=0; i<inputs; i++){
                console.log('Qty inputs '+i+ " is " + $(quantity[i]).val());
                console.log('Watt Inputs '+i+ ' is '+$(wattage[i]).val());
                console.log('TIme value ' +i+ ' is ' +$(time[i]).val());
               
                // Energy required (Load size)
                totalQwatt=parseInt($(quantity[i]).val()) * parseInt($(wattage[i]).val());
                
                // T0tal enrgy perday = Energy required x hr
                totalWattHour=parseInt($(quantity[i]).val()) * parseInt($(wattage[i]).val())*parseInt($(time[i]).val());
                
                // store all values in array
                result.push(totalQwatt);
                result2.push(totalWattHour);
                console.log('total watt is [ '+ result + ']');
                console.log("total wat hr is [ " + result2+ ']' );
            }
            //Add all the element of the arrays
        power=0;
        hour=0; //total watt hour
        for (var i=0; i<result.length; i++){
            power+=result[i];//Add total wat required in Watt
            hour+=result2[i];//Add Total Watt Hour required in WattHr
        }
        console.log('total power ' + power);
        console.log('total watt hour ' + hour);
        //Power in VA
        vapower=power/0.8;
        console.log('Power in VA ' + vapower);

          //Redundance and Roundup
         redPower=Math.round((0.2*vapower)+ vapower);
         console.log('Redundant Power in VA ' + redPower);
            
        
        // print the value
        $('#sec-3-heading-text').text(redPower + " VA Inverter");


        //Batery Cawlculation
        voltage=12;
        batterySize=Math.round(hour/voltage)
        console.log('Battery size in AH is '+batterySize)

        //conditions
        if(batterySize<=100){
            batterySize=100;
        }
        $('#sec-3-heading-text-two').text(batterySize + " AH Battery");
        

    });


});


