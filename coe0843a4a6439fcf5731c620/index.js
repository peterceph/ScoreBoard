var textOne = document.getElementsByTagName("p");
   //for (var i=0; i<textOne.length; i++){
   //var newScore = textOne[i];}
   increm_1 = 0
   function scoreBoard_one(){
   increm_1 +=1
   textOne[0].innerText = increm_1;
   }

   increm_1 = 0
   function scoreBoard_two(){
   increm_1 +=2
   textOne[0].innerText = increm_1;
   }
   increm_1=0
   function scoreBoard_three(){
   increm_1 +=3
   textOne[0].innerText = increm_1;
   }

   increm_2=0
   function scoreBoard_won(){
   increm_2 +=1
   textOne[1].innerText = increm_2;
   }
   increm_2=0
   function scoreBoard_too(){
   increm_2 +=2
   textOne[1].innerText = increm_2;
   }

   increm_2=0;
   function scoreBoard_tree(){
   increm_2 +=3
   textOne[1].innerText = increm_2;
   }

function clearButtonOne(){
   textOne[0].innerText = 0;
   increm_1 = 0
 }
 function clearButtonTwo(){
    textOne[1].innerText = 0;
    increm_2 = 0
}