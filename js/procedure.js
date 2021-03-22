$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  

  var procedure1;
document.getElementById("newProcedure").onclick=editProcedure;


function editProcedure(){
  procedure1 = prompt("Edit the procedure: ");
  if(procedure===null){
   console.log(document.getElementById("procedure").innerHTML);
  }
  else{
  updateProcedure();
  }
}

function updateProcedure() {
  document.getElementById("procedure").innerHTML = procedure1;
}
