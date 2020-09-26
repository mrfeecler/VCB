$( document ).ready(function() {
  setTimeout(function(){
    $(".select .dropdown-menu a").click(function(){
      var selText = $(this).text();
      var textdropdown = $(this).parents('.dropdown').find('.dropdown-toggle').text();
      $(this).text(textdropdown);
      $(this).parents('.dropdown').find('.dropdown-toggle').text(selText);
    });

    $('.input-daterange .form-control').datepicker({ dateFormat: 'dd/mm/yy' });
    
    initCountryCode();
    var closes = [
      '#set-withdrawal-modal .btn',
      '#set-deposit-modal .btn',
      '#set-internal-transfer-modal .btn',
      '#set-create-campaign-modal .close',
      '#set-campaign-info-modal .close',
      '#set-campaign-edit-modal .close',
      '#set-balance-modal .close',
      '#set-leverage-modal .close',
      '#set-nickname-modal .close',
      '#set-ac-modal .close',
      '#set-pass-modal .close',
      '#set-trade-modal .close',
      '#create-account-modal .close',
      '#set-start-copying-modal .close',
      '#set-profile-modal .close',
      '#set-password-modal .close',
      '#set-notification-modal .close',
      '#set-verify-email-modal .close',
      '#set-verify-phone-modal .close',
      '#set-verify-document-modal .close',
      '#set-verify-document-submit-modal .close',
    ];
    for (var i = 0; i < closes.length; ++i) {
      var close = closes[i];
      $('body').on('click', close, function(event) {
        var parent = $(this).parents('.modal');
        parent.css('display', 'none');
        parent.removeClass('show');
        hidepopUp();
      }); 
    }

    var open_modals = [
      '.set-leverage',
      '.set-nickname',
      '.set-account',
      '.trade-cta .btn',
      '.set-pass',
      '.btn-confirm-create',
      '#my-campaigns .btn-infomation',
      '#my-campaigns .btn-edit',
      '.cta-account .create-account-bta',
      '.set-balance',
      '.fxtrade24-copying',
      '.funds-management .payment-set .btn-primary',
      '#settings-profile .btn',
      '#setting-password .btn',
      '#setting-notification .btn',
      '.verify-content > .btn'
    ];
    for (var i = 0; i < open_modals.length; ++i) {
      var open = open_modals[i];
      $('body').on('click', open, function(event) {
        var handle_modal = $(this).attr('handle_modal');
        handle_modal = '#' + handle_modal ;
        $(handle_modal).css('display', 'flex');
        $(handle_modal).addClass('show');
        showpopUp();
      }); 
    }
    $('body')
      .on('mousedown touchstart', '.showpass', function() {
        $('#input-sign-in-password').attr('type', 'text');
        if ($(this).parents('.pass')) {
          $('#input-res-pass').attr('type', 'text');
        }
        if ($(this).parents('.balance.new-pass')) {
          $('#newpasswordtrading').attr('type', 'text');
        }
        if ($(this).parents('.password-account-nickname')) {
          $('#password-account-nickname').attr('type', 'text');
        }
        if ($(this).parents('#setting-password')) {
          $('#setting-change-new-password').attr('type', 'text');
        }
      })
      .on('mouseup mouseleave touchend', '.showpass', function() {
        $('#input-sign-in-password').attr('type', 'password');
        if ($(this).parents('.pass')) {
          $('#input-res-pass').attr('type', 'password');  
        }
        if ($(this).parents('.balance.new-pass')) {
          $('#newpasswordtrading').attr('type', 'password');
        }
        if ($(this).parents('.password-account-nickname')) {
          $('#password-account-nickname').attr('type', 'password');
        }
        if ($(this).parents('#setting-password')) {
          $('#setting-change-new-password').attr('type', 'password');
        }
      })
      .on('click', '#settings .modal .close', function(event) {
        var btn_attr = $(this).attr('open_next');
        var btn_tab_line = $(this).attr('tab_line');
        var btn_end = $(this).attr('theend');
        if (btn_attr) {
          btn_attr = '.' + btn_attr;
          $('.verify-content').hide();
          $(btn_attr).show();
        }
        if (btn_tab_line) {
          btn_tab_line = '.' + btn_tab_line;
          $(btn_tab_line).addClass('active');
          $(btn_tab_line).prev('div').addClass('active-line');
        }
        if (btn_end) {
          $('.setting-verify').addClass('done');
          $('.setting-verify .verify-status').hide();
          $('.setting-verify .verify-contents').hide();
          $('.setting-verify .verify-done').show();
        }
      })
      .on('click', '.strategies-content', function(event) {
        $('.strategies').hide();
        $('.strategies-campaign-details').show();
      })
      .on('click', '#funds-tabs-content .method', function(event) {
        $('#funds-tabs-content .method').removeClass('active');
        $(this).addClass('active');
        var parent = $(this).parents('.tab-pane-child');
        parent.find('.payment-detail').show();
      })
      .on('click', '.create-campaign-account', function(event) {
        var parent = $(this).parents('.my-campaigns');
        parent.next('.create-campaigns').show();
        parent.hide();
      })
      .on('click', '.create-account', function(event) {
        $('#my-account').removeClass('show active');
        $('#create-account').addClass('show active');
      })

      .on('click', '.open-real-account', function(event) {
        $('.create-account.step1').hide();
        $('.create-account.step2').show();
      })
      .on('click', '.btn-signin', function(event) {
        if ($('.sign-in #input-sign-in-email').val() == "a@a.a" && $('.sign-in #input-sign-in-password').val() == "a") {
          $('.err-mess').hide();
          $('.sign-in').hide();
          $('.content').show();
        } else {
          $('.err-mess').show();
          setTimeout(function(){ $('.err-mess').hide(); }, 3000);
        }
      })
      //handle btn confirm in Internal Transfer tab of fund session
      .on('click', '.btn-confirm', function(event) {
        var parent = $(this).parents('.tab-pane-child');
        parent.find('.owner-payment').show();
        parent.find('.otpvia').show();
        $(this).text('Get OTP');
        $(this).addClass('btn-get-otp');
        $(this).removeClass('btn-confirm');
      })  
      .on('click', '.btn-get-otp', function(event) {
        var parent = $(this).parents('.tab-pane-child');
        parent.find('.otpfunds').show();
        parent.find('.otpvia').css('margin', '0');
        $(this).text('Confirm');
        $(this).addClass('btn-primary');
        $(this).removeClass('btn-get-otp');
      })
      .on('click', '#set-start-copying-modal .btn-get-otp', function(event) {
        $('#set-start-copying-modal .otpfunds').show();
        $('#set-start-copying-modal .start-copying-content').show();
        $(this).text('Confirm');
        $(this).addClass('close');
        $(this).removeClass('btn-get-otp');
      })

      .on('click', '.btn-register', function(event) {
        if ($('.register #input-res-email').val() == "a@a.a" && $('.register #input-res-pass').val() == "a") {
          $('.err-mess').hide();
          $('.register .step1').hide();
          $('.register .step2').show();
          initCountryCode();
        } else {
          $('.step1 .err-mess').show()
          setTimeout(function(){ $('.step1 .err-mess').hide(); }, 3000);
        }
      })
      .on('click', '.btn-reset', function(event) {
        if ($('.reset #input-reset-email').val() == "a@a.a") {
          $('.reset .step1').hide();
          $('.reset .step2').show();
          initCountryCode();
        } else {
          $('.reset .step1 .err-mess').show()
          setTimeout(function(){ $('.reset .step1 .err-mess').hide(); }, 3000);
        }
      })
      .on('click', '.btn-reset-step2', function(event) {
        if ($('.reset #input-reset-otp').val() == "123456") {
          $('.reset .step2').hide();
          $('.reset .step3').show();
        } else {
          $('.reset .step2 .err-mess').show()
          setTimeout(function(){ $('.reset .step2 .err-mess').hide(); }, 3000);
        }
      })
      .on('click', '.btn-reset-step3', function(event) {
        if ($('.reset #input-reset-confirm-password').val() == $('.reset #input-reset-password').val() && $('.reset #input-reset-confirm-password').val() != '') {
          $('.reset .step3').hide();
          $('.reset .step4').show();
        } else {
          $('.reset .step3 .err-mess').show()
          setTimeout(function(){ $('.reset .step3 .err-mess').hide(); }, 3000);
        }
      })
      .on('click', '.register-link', function(event) {
        $('.sign-in').hide();
        $('.register').show();
      })
      .on('click', '.partnership-affiliate-link .btn', function(event) {
        copyToClipboard('.partnership-affiliate-link input');
      })
      .on('click', '.signin-link', function(event) {
        $('.sign-in').show();
        $('.register').hide();
        $('.reset').hide();
      })
      .on('click', '.btn-getotp', function(event) {
        var parent = $(this).parents('.verify-content');
        $(parent).find('.verify-content-otp').show();
        $(parent).find('.btn-primary').show();
        $(this).addClass('hide_in_mobile');
        parent.addClass('activate');
        // $('.verify-content-otp').show();
        
      })

      .on('click', '.forgot', function(event) {
        $('.sign-in').hide();
        $('.reset').show();
      })
      
      .on('click', '.btn-step2', function(event) {
        var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        if (regex.test($('.step2 .phone-verify').val())) {
          $('.step2').hide();
          $('.step3').show();
        } else {
          $('.step2 .err-mess').show()
          setTimeout(function(){ $('.step2 .err-mess').hide(); }, 3000);
        }
      })
      .on('click', '.menu-mobile', function(event) {
        $('.right-side-bar').toggleClass('position-mobile');
      });
    var title = $('.step3 .selected-flag').attr('title');
    if (title) {
      var handle_title = title.split(' ')[0];
      $('.step3 .selected-dial-code').text(handle_title);
    }
    var title = $('.setting-country .selected-flag').attr('title');
    if (title) {
      var handle_title = title.split(' ')[0];
      $('.setting-country .selected-dial-code').text(handle_title);
    }
    $('.country-list .country').click(function(event) {
      var handle_title = $(this).find('.country-name').text();
      var regex = /\(.*?\)/;
      if (regex.test(handle_title)) {
        handle_title = handle_title.replace(regex, '');
      }
      if ($(this).parents('#settings-profile').length > 0 ) {
        setTimeout(function(){ $('#settings-profile .selected-dial-code').text(handle_title); }, 100);  
      } else {
        setTimeout(function(){ $('.step3 .selected-dial-code').text(handle_title); }, 100);  
      }
      
    });
  }, 200);
});
function copyToClipboard(element) {
  $(element).select();
  document.execCommand("copy");
}
function initCountryCode() {
  $(".phone-verify").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
    initialCountry: 'vn',
    separateDialCode: true,
    geoIpLookup: function(callback) {
      callback('vn');
    }
  });
}
function hidepopUp() {
  $('.modal-backdrop').remove();
  $('body').removeClass('modal-open');
}
function showpopUp() {
  $('body').append('<div class="modal-backdrop fade show"></div>')
  $('body').addClass('modal-open');
}
