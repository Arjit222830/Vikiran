$(document).ready(()=>{
    $("#form").submit( (e)=>{
        e.preventDefault();
        $.ajax({
            url: '/admin',
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