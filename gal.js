let next = document.querySelector('#next')
let prev = document.querySelector('#prev')



const btn = document.querySelector('.prev');

console.log(btn); 

next.addEventListener('click', function(){

    
    let items = document.querySelectorAll('.itemgal')
    console.log(items)
    document.querySelector('#slide').appendChild(items[0])
    console.log(items)

    
})  

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.itemgal')
    document.querySelector('#slide').prepend(items[items.length - 1]) // here the length of items = 6
})











$(document).ready(function(){
    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");
    });
    
    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });
    
    
    
    
    $(window).on("load", function(){
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        });
        
        $('.portfolio-nav li').click(function(){
            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            });
            return false;
        });          
                    
    });
    
    $('#portfolio-item').mixItUp();
  
});

 
    
   
    
    
    





