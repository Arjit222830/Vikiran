$(document).ready(()=>{
    $("#form_admin").submit( (e)=>{
        e.preventDefault();
        $.ajax({
            url: '/society',
            data :{
                name: $('#data1').val(),
                president: $('#data2').val(),
                data3: $('#data3').val(),
                data4: $('#data4').val(),
                data5: $('#data5').val(),
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