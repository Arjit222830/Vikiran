$(document).ready(()=>{
    $("#form_admin").submit( (e)=>{
        e.preventDefault();
        $.ajax({
            url: '/society',
            data :{
                society: $('#data1').val(),
                event: $('#data2').val(),
                about: $('#data3').val(),
                r1: " "+$('#data4').val(),
                r2: " "+$('#data5').val(),
                r3: " "+$('#data6').val(),
                r4: " "+$('#data7').val(),
                c1: $('#data8').val(),
                c2: $('#data9').val(),
                venue: $('#data10').val(),
                type:$("#data11:checked").val(),
                date:$("#data12").val(),
                time:$("#data13").val()
            },
            method: "POST",
            success : function(data){
                window.location.replace(data.link);
                alert(JSON.stringify(data.message));
            },
            error:function(err){
                alert(JSON.stringify(err.responseText));
            }
        }); 
    });
});

$(document).ready(()=>{
    $("#form_register").submit( (e)=>{
        e.preventDefault();
        $.ajax({
            url: '/register',
            data :{
                name: $('#data1').val(),
                college_name: $('#data2').val(),
                email: $('#data3').val(),
                contact: $('#data4').val()
            },
            method: "POST",
            success : function(data){
                window.location.replace(data.link);
                alert(JSON.stringify(data.message));
            },
            error:function(err){
                alert(JSON.stringify(err.responseText));
            }
        }); 
    });
});