var input = document.getElementById("input");
var display = document.getElementById("display");
var theObj = {};


function getAllPermutations(string) {
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
     
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
          if(results.includes(firstChar + innerPermutations[j]) === false){ //prevents duplicate values
            results.push(firstChar + innerPermutations[j]);
          }
       
      }
    }

    return results;
  }

  
$("#button").on('click', function(){
    display.innerHTML = "";
    if(input.value.length > 3 && input.value.length < 5){
        theObj.values = getAllPermutations(input.value);
        console.log(theObj);
        theObj.show;
       
        
    }else{
        alert("enter 4 nums only");
    }
  
})


Object.defineProperty(theObj,"show",{
    
get(){
    var a = this.values;
    for(i=0;i<a.length;i++){
        var hr = a[i].slice(0,2);
        var min = a[i].slice(2,4);
        if(hr < 24){
            if(min < 60){
                var timeDis = document.createElement("p");
                timeDis.innerText = hr +':'+ min;
                display.appendChild(timeDis);
                // console.log(hr +':'+ min);
            }
            
        }
        

    }
        
   }
    
})


