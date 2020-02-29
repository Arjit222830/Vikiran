
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

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
                date:$("#data11").val(),
                time:$("#data12").val()
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
            url: '/register/'+event,
            data :{
                team_name: $('#data1').val(),
                team_leader: $('#data2').val(),
                total_members: total,
                college_name: $('#data3').val(),
                email: $('#data4').val(),
                contact: $('#data5').val(),
                member1: $('#data6').val(),
                member2: $('#data7').val(),
                member3: $('#data8').val(),
                member4:  $('#data9').val(),
                transaction: $('#data10').val()
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
    $("#form_members").submit( (e)=>{
        e.preventDefault();
        console.log("h");
        $.ajax({
            url: '/register/'+ev+"-"+$('#numbers').val(),
            method: "POST",
            success : function(data){
                window.location.replace(data.link);
            },
            error:function(err){
                alert(JSON.stringify(err.responseText));
            }
        }); 
    });
});