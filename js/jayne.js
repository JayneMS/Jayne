$('input:radio[id="optionsRadios2"]').change(function(){  
    if($(this).is(":checked")){
       $(".to-manage").css("display","inline-block");
       $("#recycle").css("display","inline-block");
       $(".to-remove").css("display","block");
    }
});  
      
$('input:radio[id="optionsRadios1"]').change(function(){  
    if($(this).is(":checked")){  
       $(".to-manage").css("display","none");
       $("#recycle").css("display","none");
       $(".to-remove").css("display","none");
       $(".to-center").css({"text-align":"center","width":"100%"});
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
 
$(document).ready(function () {
    $('#datatable').DataTable({
        searching: false ,
        language: {
            "sProcessing": "处理中...",
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        }
    });
});
