
$('input:radio[id="optionsRadios2"]').change(function(){  
         if($(this).is(":checked")){  
            $("#to-manage").css("display","block");
            $("#recycle").css("display","block");
         }else{  
          }  
      });  
      
$('input:radio[id="optionsRadios1"]').change(function(){  
         if($(this).is(":checked")){  
            $("#to-manage").css("display","none");
            $("#recycle").css("display","none");
         }else{   
          }  
      });  
      

$(function () {
    "use strict";
    
    $('#dialog-form').dialog({
        autoOpen: false,
        modal: true,
        width: 500,
        buttons: {
            Submit: function () {
                $(this).dialog('close');
            },
            Cancel: function () {
                $(this).dialog('close');
            }
        }
    });
    $('#dialog-form-opener').click(function () {
        $('#dialog-form').dialog('open');
    });
 });