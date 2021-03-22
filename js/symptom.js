$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  
/*Functions for editing the HTML*/
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

/*Functions for editing the HTML ends*/




$(document).ready(function() { 
  $("#searchData").on("keyup", function() { 
      var value = $(this).val().toLowerCase(); 
      $("#symptomData tr").filter(function() { 
          $(this).toggle($(this).text() 
          .toLowerCase().indexOf(value) > -1) 
      }); 
  }); 
}); 