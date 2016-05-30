$(function() {
//      debugger;
  var slider = $(".slider-list"),             
      sliderContent = slider.html(),                                        // содержание слайдера 
      slideWidth = $(".menu-top-slider").outerWidth(),                      // ширина слайдера
      slideCount = $(".slider-list li").length,                             // количество слайдов
      back = $(".slider-btn_back"),                                         // кнопка назад
      forward = $(".slider-btn_forward"),                                   // кнопка вперед
      sliderInterval = 5000,                                                // интервал смены слайдов
      animateTime = 1000,                                                   // время смены слайдов
      course = 1,                                                           // направление движения слайдера     
      margin = - slideWidth;                                                // первоначальное смещение слайдов
  
      $(".slider-list li:last").clone().prependTo(".slider-list");          // копия последнего слайда помещается в начало
      $(".slider-list li").eq(1).clone().appendTo(".slider-list");          // копия первого слайда помещается в конец
      $(".slider-list").css("margin-left", -slideWidth);                    // контейнер .slider-list сдвигается влево на ширину одного слайда
  
  
  
 function nextSlide(){                                                     // Запускается функция animation(), выполняющая смену слайдов.
    interval = window.setInterval(animate, sliderInterval);
  }
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){                       // Если слайдер дошел до конца
      slider.css({'marginLeft':-slideWidth});                             // то блок .slider-list возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                                    // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({'marginLeft':-slideWidth*slideCount});                  // то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                                                // Если условия выше не сработали,
    margin = margin - slideWidth*(course);                                // значение margin устанавливается для показа следующего слайда
    }
    slider.animate({'marginLeft':margin},animateTime);                    // Блок .slider смещается влево на 1 слайд.
  }
 
  function sliderStop(){                                                  // Функция преостанавливающая работу слайдера      
    window.clearInterval(interval);
  }
 
  back.click(function() {                                                 // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }                         // Если не происходит анимация
    var course2 = course;                                                 // Временная переменная для хранения значения course
    course = -1;                                                          // Устанавливается направление слайдера справа налево
    animate();                                                            // Вызов функции animate()
    course = course2 ;                                                    // Переменная course принимает первоначальное значение
  });
  forward.click(function() {                                              // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }                         // Если не происходит анимация
    var course2 = course;                                                 // Временная переменная для хранения значения course
    course = 1;                                                           // Устанавливается направление слайдера справа налево
    animate();                                                            // Вызов функции animate()
    course = course2 ;                                                    // Переменная course принимает первоначальное значение
  });
 
  slider.add(forward).add(back).hover(function() {                        // Если курсор мыши в пределах слайдера
    sliderStop();                                                         // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide);                                                          // Когда курсор уходит со слайдера, анимация возобновляется.
 
  nextSlide();                                                            // Вызов функции nextSlide()
});
 