$(document).ready(function(){
    $("#mask_slash").change(function(){
            var pinili = $(this).prop('selectedIndex');
            $("#mask_ip").prop('selectedIndex', pinili);
            $("#number_of_hosts").prop('selectedIndex', pinili);
        });
});

$(document).ready(function(){
    $("#mask_ip").change(function(){
            var kinuha = $(this).prop('selectedIndex');
            $("#mask_slash").prop('selectedIndex', kinuha);
            $("#number_of_hosts").prop('selectedIndex', kinuha);
        });
});

$(document).ready(function(){
    $("#number_of_hosts").change(function(){
            var eme = $(this).prop('selectedIndex');
            $("#mask_ip").prop('selectedIndex', eme);
            $("#mask_slash").prop('selectedIndex', eme);
        });
});