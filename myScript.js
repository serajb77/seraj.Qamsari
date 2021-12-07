$(document).ready(function(){
    $(".all").hide();
    $("button").click(function(){
        if ($(this).text() === 'نمایش مطالب') {
            $(this).text('پنهان کردن مطالب');
       }
       else {
           $(this).text('نمایش مطالب');
       }
       $(".all").toggle(1000);

    });
   
    });
