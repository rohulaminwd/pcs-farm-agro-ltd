

$(document).ready(function(){

    // ABOUT US SLIDER
    $('.team-slider').slick({
        arrows : false,
        slidesToShow : 3,
        dots : false,
        autoplay : true,
        responsive: [
            {
                breakpoint: 876,
                settings: {
                    slidesToShow : 1,
                    dots : false,
                    arrows: false,
                    slidesToscroll : 1,
                },
            },
        ],
    });


    // BACK TO TOP BUTTON ADDED
    var backtoTop = $('.scrollbtn');
    var nav = $('#nav-color');

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 90){
            backtoTop.slideDown();
        }
        else{
           backtoTop.slideUp();
        }

        if(scrolling > 90){
            nav.addClass('fixed-top');
        }
        else{
            nav.removeClass('fixed-top')
        }
    });

    backtoTop.on('click',function(){
        $('html,body').animate({
            scrollTop: 0,
        },100);
    });

});


// new WOW().init();

// new  AOS.init();


// form control js code
const login = document.getElementById('login');
const signup = document.getElementById('signup');

const loginBtn1 = () => {
    login.style.marginLeft = '-50%';
    signup.style.marginLeft = '0';
    login.style.opacity = '0';
    signup.style.opacity = '1';
}

const signupbtn2 = () => {
    login.style.marginLeft = '0%';
    login.style.opacity = '1';
    signup.style.opacity = '0';
    signup.style.marginLeft = '-50%';
}


// ========Form validation======
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



// send email form contact page

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.innerHTML = ''
      status.classList.add("success");
      status.innerHTML = "Thanks! successful send your massage";
    }
  
    function error() {
        status.innerHTML = ''
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  