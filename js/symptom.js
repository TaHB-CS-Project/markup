$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  

var symptom1;
document.getElementById("newSymptom").onclick=editSymptom;


function editSymptom(){
  symptom1 = prompt("Edit the symptom: ");
  if(symptom1===null){
   console.log(document.getElementById("symptom").innerHTML);
  }
  else{
  updateSymptom();
  }
}

function updateSymptom() {
  document.getElementById("symptom").innerHTML = symptom1;
}

