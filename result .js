                  
                  /// CALCULATOR JS///
    
    
        //0--9 number BUTTON
         function setinput(x){
         let i =document.getElementById('input');
         i.value += x;
         
             }
            //(+,-,*,/,%) Oparation
    

         function setop(y){
         let i=document.getElementById('input');
         i.value += y;
        }
            //AC BUTTON
        function cl(){
        let x ='';
        document.getElementById('input').value = x;
         }
            //= BUTTON
        function calculation(){
        let i = document.getElementById('input');
        let r = eval(i.value);
        document.getElementById('input').value = r;

        }


            /////RESULT SHEET JS//////

        function result(){
          let a=parseInt(document.getElementById('bookone').value);
          let b=parseInt(document.getElementById('booktwo').value);
          let c=parseInt(document.getElementById('bookthree').value);
          let d=parseInt(document.getElementById('bookfour').value);
          let e=parseInt(document.getElementById('bookfive').value);
        
          if(a>100 ||  b>100 || c>100 || d>100 || e>100 ){
            alert("parse enter correct value");              
            }

            //Percentage JS//

         else{
            let obtain=a+b+c+d+e;
            document.getElementById('obmark').innerHTML=obtain;
            let per=obtain/500*100;
            document.getElementById('per').innerHTML=per +'%';
           
                //PASS FAIL JS// 
            if(a>33 &&  b>33 && c>33 && e>33)   
            {
              document.getElementById('remarks').innerHTML="<p style= 'color:green'>Pass</p>";
            }
           else
            {
                document.getElementById('remarks').innerHTML= "<p style= 'color:red'>Fail</p>"; 
            }

                 //  Grade JS //
           
          if( obtain>=80)
                {
                    document.getElementById('grade').textContent="+A";  
                }
         else if(obtain>=70)
                {
                    document.getElementById('grade').textContent="A";  
                }
          else if(obtain>=60)
                {
                    document.getElementById('grade').textContent="A-";  
                }
          else if(obtain>=50)
                {
                    document.getElementById('grade').textContent="B";  
                }
          else if(obtain>=40)
                {
                    document.getElementById('grade').textContent="C";  
                }
          else if(obtain>=33)
                {
                    document.getElementById('grade').textContent="D";  
                }
          else      
                {
                    document.getElementById('grade').innerHTML="F";  
                }  
         }
           return false;
}