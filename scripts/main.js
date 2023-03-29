// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function getMyAge(){
  var dob = new Date("09/08/1987");  
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 
  let myAge = Math.abs(age_dt.getUTCFullYear() - 1970);

  document.getElementById("myAge").innerHTML = myAge;
}

window.onload = getMyAge()
 