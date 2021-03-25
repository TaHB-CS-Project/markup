$(document).ready(function(){
    var maxField = 10; 
    var add_symptom_button = $('.add_symptom_button'); 
    var symptom_wrapper = $('.symptom_wrapper'); 
    var symptomHTML = '<div style="display:flex;"><input type="text" class= "form-control" name="symptom[]" id="Symptom" placeholder="Symptom"><a href="javascript:void(0);" class="remove_symptom_button" title="Remove field"><i class="fas fa-2x fa-minus-circle"></i></a></div>'; 
    var x = 1; //Initial field counter is 1
    

    $(add_symptom_button).click(function(){
        if(x < maxField){ 
            x++; 
            $(symptom_wrapper).append(symptomHTML);
        }
    });
    

    $(symptom_wrapper).on('click', '.remove_symptom_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); 
        x--; 
    });
});

$(document).ready(function(){
    var maxField = 10;
    var add_procedure_button = $('.add_procedure_button');
    var procedure_wrapper = $('.procedure_wrapper'); 
    var procedureHTML = '<div style="display:flex;"><input type="text" class= "form-control" name="procedure[]" id="Procedure" placeholder="Procedure"><a href="javascript:void(0);" class="remove_procedure_button" title="Remove field"><i class="fas fa-2x fa-minus-circle"></i></a></div>';
    var y = 1; 
    

    $(add_procedure_button).click(function(){
        if(y < maxField){ 
            y++; 
            $(procedure_wrapper).append(procedureHTML); 
        }
    });
    

    $(procedure_wrapper).on('click', '.remove_procedure_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); 
        y--; 
    });
});
