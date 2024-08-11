import React from 'react'

const Script = () => {
  return (
    <div>
  {
    document.querySelector('form').addEventListener('submit', function(e){

      e.preventDefault();
  
      let bmi=0;
      const height=parseInt(document.querySelector('#height').value);
  
      const weight=parseInt(document.querySelector('#weight').value);
  
  if(height==='' || height<0 || isNaN(height)){
      document.querySelector('#results').innerHTML=`please enter a valid height, ${height}`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
      document.querySelector('#results').innerHTML=`please enter a valid weight, ${weight}`;
  }
  else{
       bmi=(weight/((height*height)/10000)).toFixed(2);
       console.log(bmi);
      }
      document.querySelector('#results').innerHTML=`${bmi}`;
  
  });
  }
    </div>
  )
}

export default Script
