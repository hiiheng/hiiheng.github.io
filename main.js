$(document).ready(function() {
  var social, projects, row;
  social = {'fa fa-github':'https://github.com/hiiheng', 'fa fa-codepen':'https://codepen.io/hiiheng', 'fa fa-linkedin':'https://www.linkedin.com/in/heng-lam-8b245873/', 'fa fa-free-code-camp':'https://www.freecodecamp.com/hiiheng'};
  
  $.each(social, function(idx, val) {
    $('.social').append("<a class='social-button hvr-fade' href='"+val+"' target='_blank'><i class='"+idx+"'></i></a>");
  });
  
  $('#read-more').text('Read more >>');
  $('#read-more').click(function(e) {
      e.preventDefault();
      $("html, body").animate({
          scrollTop: $('#about').offset().top
        }, 800);
  });
  $('.welcome-info').text('Front end developer whose passion is to help businesses succeed through web technologies.');

  $("li").on("click", function(e) {
    $(this).addClass("custom-active");
  });
  
  //page scrolling
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
    $("li").removeClass("custom-active");
  });
  
  projects = {1:['Tic-Tac-Toe','https://s3-us-west-2.amazonaws.com/i.cdpn.io/1188642.owgyPX.small.8b936279-bddf-4d79-93a9-c868f2344bdc.png', 'https://codepen.io/hiiheng/full/owgyPX'], 5:['Random Quote Machine','https://s3-us-west-2.amazonaws.com/i.cdpn.io/1188642.ZKyJem.small.1f168f70-c464-4eb2-adf2-0bd4dc3c60ef.png','https://codepen.io/hiiheng/full/ZKyJem'],6:['Local Weather','https://s3-us-west-2.amazonaws.com/i.cdpn.io/1188642.GmxOwM.small.84e199a2-2e3b-4540-8298-10283daa9dcb.png','https://codepen.io/hiiheng/full/GmxOwM'], 2 :['Pomodoro Clock','https://s3-us-west-2.amazonaws.com/i.cdpn.io/1188642.EXxeQR.small.93ef957c-7bd8-4d8c-9aa5-98edf08ff859.png', 'https://codepen.io/hiiheng/full/EXxeQR'], 3 :['JS Calculator', 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1188642.BRXywd.small.c3120bd1-3db5-40a6-b950-81ce7409d8b8.png', 'https://codepen.io/hiiheng/full/BRXywd'], 4 :['Wikipedia Viewer', 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1188642.XROWaJ.small.46335389-2af7-444c-aedf-f24c831b5f7e.png','https://codepen.io/hiiheng/full/XROWaJ'], 0:['Simon Game', 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1188642.rwVrNR.small.85656201-cbe7-4973-b32b-464fc5254a10.png','https://codepen.io/hiiheng/full/rwVrNR']};
  row;
  $.each(projects, function(key, val) {
    if(key % 3===0) {
      row = key;
      $('#projects').append("<div class='project-list' id='p-list-"+key+"'></div>");
    }
    $('#p-list-'+row).append("<div class='project hvr-float' id='proj"+key+"'><p class='text-center'>"+val[0]+"</p><div style='display:flex;'><img class='center-block thumb' src='"+val[1]+"' alt='project"+key+"'></div></div>");
    $('#proj'+key).click(function() {
      window.open(val[2]);
    })
  });
  $('.about-edu').append("<p><strong>Bachelor of Science and Arts, Computer Science</strong>&nbsp;&nbsp;May 2016</p><p>University of Texas - Austin</p><p><strong>Front End Developer Program Certification</strong>&nbsp;June 2017</p><p>Freecodecamp</p>");
  $('.about-oth').append('<p>Interested in technology from childhood.</p><p>Learned about programming during my junior year of college and knew it was what I wanted to do as a career!</p>');
  
  document.body.onscroll = function (e) {
    if (document.body.scrollTop > 350){
      $('#navbar').addClass('navbar-scroll');
    } else {
      $('#navbar').removeClass('navbar-scroll');
    }
  }
  document.documentElement.onscroll = function (e) { 
    if (document.documentElement.scrollTop > 350){
      $('#navbar').addClass('navbar-scroll');
    } else {
      $('#navbar').removeClass('navbar-scroll');
    }
  }
  window.onscroll = function (e) {
    if (window.pageYOffset > 350) {
      $('#navbar').addClass('navbar-scroll');
    } else {
      $('#navbar').removeClass('navbar-scroll');
    }
  }
});