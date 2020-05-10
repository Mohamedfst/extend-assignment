  ;(function ($) {
  'use strict'

  var options = {
  height : "250",
  width : "500",
  title:"Hello there. We can better sculpt our offerings to your business by <br>",
  title2: "<center>leveraging the size of your business.</center> <br>",
  title3: "<bold>What type of business are you?</bold> <br> <br>",
  divider: `<div class="divider"/>`,
  button1: `<button id ="1" onclick="window.location.href = 'http://localhost:3001/#';"><div style = "color: green;">Small Business</div><div style = "color: white;"><200 employees</div></button>`,
  button2: `<button id ="2" onclick="window.location.href = 'http://localhost:3001/#';"><div style = "color: red;">Medium Business</div><div style = "color: white;"><1000 employees</div></button>`,
  button3: `<button id ="3" onclick="window.location.href = 'http://localhost:3001/#';"><div style = "color: Blue;">Large Business</div><div style = "color: white;"><1000+ employees</div></button> <br> <br>`,
  button4: `<button id ="4" onclick="#">Continue</button> <br> <br>`,
  text: '<a class = "one" href="#">I do not want to specify my business size</a>',
  top: "20%",
  left: "30%",
  };

  function add_block_page(){
  var block_page = $('<div class="block_page"></div>');
  $(block_page).appendTo('body');
  }

  function add_popup_box(){
  var pop_up = $('<div class="modal_box"><a href="#" class="modal_close"></a><div class="inner_modal_box"><p4>' + options.title + '</p4><p4>' + options.title2 + '</p4><h4>' + options.title3 + '</h4>' + options.button1 + ''+ options.divider +''+ options.button2 + ''+ options.divider +''+ options.button3 + ' '+ options.button4 +' '+ options.text +'</div></div>');
  $(pop_up).appendTo('.block_page');

  $('#1').click(function(){
    $(this).parent().fadeOut().remove();
    $('.block_page').fadeOut().remove();                 
  });
  $('#2').click(function(){
    $(this).parent().fadeOut().remove();
    $('.block_page').fadeOut().remove();                 
  });
  $('#3').click(function(){
    $(this).parent().fadeOut().remove();
    $('.block_page').fadeOut().remove();                 
  });
  $('.one').click(function(){
    $(this).parent().fadeOut().remove();
    $('.block_page').fadeOut().remove();                 
  });
  }

  function add_styles(){         
  $('.modal_box').css({ 
  'display': 'none', 
  'position': 'fixed',
  'text-align': 'center', 
  'align-self': 'center',
  'z-index': '1', 
  'left': '0',
  'top': '0',
  'width': '60%', 
  'height': '2000%', 
  'overflow': 'auto', 
  'background-color': 'rgb(0,0,0)', 
  'background-color': 'rgba(0,0,0,0.4)',
  });

  $('.modal_close').css({
   'position':'relative',
    'top':'25px',
    'left':'30px',
    'float':'right',
    'display':'block',
    'height':'100px',
    'width':'100px',
    
  });
            /*Block page overlay*/
  var pageHeight = $(document).height();
  var pageWidth = $(window).width();

  $('.block_page').css({
    'position':'absolute',
    'top':'0',
    'left':'0',
    'background-color':'rgba(0,0,0,0.6)',
    'height':pageHeight,
    'width':pageWidth,
    'z-index':'10'
  });
  
  // buttons inside modals CSS
  $('#1').css({
  'background-color': 'blue',
  'border': 'none',
  'padding': '15px 32px',
  'text-align': 'center',
  'text-decoration': 'none',
  'display': 'inline-block',
  'font-size': '16px',
  });
  $('#2').css({
  'background-color': 'grey',
  'border': 'none',
  'padding': '15px 32px',
  'text-align': 'center',
  'text-decoration': 'none',
  'display': 'inline-block',
  'font-size': '16px',
  });
  $('#3').css({
  'background-color': 'grey',
  'border': 'none',
  'padding': '15px 32px',
  'text-align': 'center',
  'text-decoration': 'none',
  'display': 'inline-block',
  'font-size': '16px',
  });
  $('#4').css({
  'background-color': 'green',
  'border': 'none',
  'color': 'white',
  'padding': '15px 32px',
  'text-align': 'center',
  'text-decoration': 'none',
  'display': 'inline-block',
  'font-size': '16px',
  'width': '40%',
  });
  $('.one').css({
  'color': 'blue',
  });
  $('.inner_modal_box').css({
    'background-color': '#fefefe',
    'margin': '15% auto', /* 15% from the top and centered */
    'padding': '20px',
    'border': '1px solid #888',
    'width': '80%', /* Could be more or less, depending on screen size */
    'height': '2.2%',
    'align-self': 'center',
  });
  }

  // add an id to the send inquiry
  $(':submit').eq(1).attr('id', 'inquiry');

  //When forms are being submitted call the functions below
  $("form").submit(function( event ){
  event.preventDefault();
  add_block_page();
  add_popup_box();
  add_styles();
  $('.modal_box').fadeIn();
 });

  var navcoll = function () {
  if ($('#mainNav').offset().top > 100) {
  $('#mainNav').addClass('navbar-shrink')
  } else {
  $('#mainNav').removeClass('navbar-shrink')
  }
  }

  // collapse nav
  navcoll()
  // Collapse nav scroll
  $(window).scroll(navcoll)

  $('#customSolutions').click(function () {
  $('#sidebar-overlay').show()
  $('#sidebar').show()
  })

  $('#closeSidebar').click(function () {
  $('#sidebar-overlay').hide()
  $('#sidebar').hide()
  })

  function s(event) {
  event.preventDefault()
  var name = $('#name').val()
  var email = $('#email').val()
  var phone = $('#phone').val()
  var businessName = $('#business').val()
  subForm(name, email, phone, businessName)
  }

  /*document.querySelector('#sidebar-form').addEventListener(
  'submit',
  function () {
  subForm(null, document.querySelector('#e2').value, null, 'have a good day')
  },
  true,
  )*/
  // document.querySelector('#contactForm').addEventListener(
  // 'submit',
  // function () {
  // subForm(null, document.querySelector('#success').value, null, 'have a good day')
  // },
  // true,
  // )

  window.s = s
  })(jQuery)


