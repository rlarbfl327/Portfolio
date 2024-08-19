$(document).ready(function(){
  
    //480메뉴바
    $('.m_menu_open_btn').on('click', function(){
        $('.m_menu').show().animate({
            top:0
        });
        $('.m_menu_open_btn').hide();
        $('.m_menu_close_btn').show();
    });
    $('.m_menu_close_btn').on('click', function(){
        $('.m_menu').animate({
            top: '-' + 100 + '%'
                    },function(){
            $('.m_menu').hide(); 
        }); 
        $('.m_menu_close_btn').hide(); 
        $('.m_menu_open_btn').show(); 

    });
    //스크롤 시 떠오르는 효과
    AOS.init();    
   
    //그래프
    // Initialize AOS (Animate On Scroll)
    AOS.init();

    function animateProgress() {
        $('.progress li').each(function() {
            var percent = $(this).data('percent');
            var $circle = $(this).find('.progress-circle');
            var radius = $circle.attr('r');
            var circumference = 2 * Math.PI * radius;
            var offset = circumference - (percent / 100) * circumference;

            var animationDuration = $(this).data('animation-duration') || '2s'; // 기본 2초로 설정

            $circle.css({
                strokeDasharray: circumference,
                strokeDashoffset: circumference, // 초기 상태 설정
                transition: 'stroke-dashoffset ' + animationDuration + ' ease-out' // 애니메이션 시간 설정
            });

            // 애니메이션 시작
            setTimeout(function($circle, offset) {
                $circle.css({
                    strokeDashoffset: offset // 이후에 감소
                });
            }.bind(null, $circle, offset), 10); // 거의 바로 애니메이션 시작
        });
    }

    function checkVisibility() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $('.progress li').each(function() {
            var elementTop = $(this).offset().top;
            var elementHeight = $(this).height();

            if (elementTop < scrollTop + windowHeight && elementTop + elementHeight > scrollTop) {
                if (!$(this).hasClass('visible')) {
                    $(this).addClass('visible');
                    animateProgress();
                }
            } else {
                $(this).removeClass('visible');
                var $circle = $(this).find('.progress-circle');
                var radius = $circle.attr('r');
                var circumference = 2 * Math.PI * radius;
                $circle.css({
                    strokeDasharray: circumference,
                    strokeDashoffset: circumference, // 다시 초기 상태로
                    transition: 'none' // 애니메이션 없음
                });
            }
        });
    }

    $(window).on('scroll', function() {
        checkVisibility();
    });

    $(window).on('load', function() {
        checkVisibility();
        animateProgress();
    });

    checkVisibility();
    animateProgress();




    // 스크롤 메뉴
    $(".pc_nav a.hash").click( function(e) {
    
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // Destination
        var scrollOffset = $(this.hash).offset().top;

        // animate
        $('html, body').animate({
        scrollTop: scrollOffset
        }, 700, function(){
        window.location.hash = hash;
        }); 
    });
    //모바일 메뉴
    $(".m_menu a.hash").click( function(e) {
    
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // Destination
        var scrollOffset = $(this.hash).offset().top;

        // animate
        $('html, body').animate({
        scrollTop: scrollOffset
        }, 700, function(){
        window.location.hash = hash;
        }) 
        $('.m_menu').animate({
                    top: '-' + 100 + '%'
                        },function(){
                    $('.m_menu').hide(); 
                }); 
            $('.m_menu_close_btn').hide(); 
            $('.m_menu_open_btn').show(); 
    });
        
        
    //모바일 로고, 탑버튼
    // Show or hide the sticky footer button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('.top_btn').fadeIn(300);
            } else {
                $('.top_btn').fadeOut(300);
            }
        });

        // Animate the scroll to top
        $('.top_btn').click(function(event) {
            event.preventDefault();

            $('html, body').animate({scrollTop: 0}, 500);
        });
        $('.logo').click(function(event) {
            event.preventDefault();

            $('html, body').animate({scrollTop: 0}, 500);
        });
        
        //스크롤 이벤트 오류 = 공부 후 쓰로틀링 사용
        
        
        //skill 차트 효과
    
        //skills 숫자 카운트 효과
        //scroll counting start

//여기가 끝임    
});
