function getNumber(num){
    console.log(num)
    var result = document.getElementById('result')
    result.value += num


}
function getResult(){
    var result = document.getElementById('result')
    result.value = eval(result.value)


}

function clearr(){
    var result = document.getElementById('result')
    result.value = ""
}


function delette(){
    var result = document.getElementById('result')
    result.value = result.value.slice(0,result.value.length-1)
}





function square(){
    var result = document.getElementById('result')
    result.value = Math.pow(result.value,2)
  
  }



  function cube(){
    var result = document.getElementById('result')
    result.value = Math.pow(result.value,3)
  }



  function sqrt(){
    var result = document.getElementById('result')
    result.value = Math.pow(result.value,1/2)
  }











  function sin() {
    var result = document.getElementById('result')
    result.value = Math.sin(result.value)
  }


  function cos() {
    var result = document.getElementById('result')
    result.value = Math.cos(result.value)


  }


  function tan() {
    var result = document.getElementById('result')
    result.value = Math.tan(result.value)


  }