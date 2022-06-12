
function timeConversion(milliseconds)
{
   
  seconds = Math.floor((milliseconds / 1000) % 60),
  minutes = Math.floor((milliseconds / (1000 * 60)) % 60),
  hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);   

  // console.log(`${hours} hours :  ${minutes} minutes :  ${seconds} seconds  `)
  console.log(`${seconds} seconds`)
  console.log(`${minutes} minutes`)
  console.log(`${hours} hours`)
}

// timeConversion(180000)
export default timeConversion


