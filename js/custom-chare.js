			
(function($){
    
	 function charewidget_convertUTCDateToLocalDate(date) {
		 var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
			var olddate= new Date(date);
            var newDate = new Date(date);
            newDate.setMinutes(olddate.getMinutes() - olddate.getTimezoneOffset());
			 
			var curr_date = ("0" + newDate.getDate()).slice(-2);
			var curr_month = monthNames[newDate.getMonth()] ;
			var curr_mins = ("0" +newDate.getMinutes()).slice(-2);
			var curr_hours = ("0" +newDate.getHours()).slice(-2);
			
            return curr_date+" "+curr_month + " " +newDate.getFullYear() +" "+curr_hours+":"+ curr_mins; 
        }
	
	jQuery(document).ready(function(){

	jQuery('.chare-dateclass').each(function(){
 var date = $(this).html();
   if (date != null && date != undefined && date != '') {
                       var test = charewidget_convertUTCDateToLocalDate(date);
                       if ($(this) != undefined) {
                           $(this).text(test);
                       }
                   }

});
				setTimeout(function(){ 
				var owlChare = jQuery('.chare-output .owl-carousel');

			owlChare.owlCarouselChare({
				loop:false,
				nav: true,
				margin:12,
				autoWidth: true,
				responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
			loop:false
        }
    }
			});
			}, 100);
			});

})(jQuery);