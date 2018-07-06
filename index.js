// === NOT INCLUDE === ///
import './css/main.css';
import 'https://unpkg.com/@textback/notification-widget@2.0.0-7413/build/sdk.js'
import $ from 'jquery'
import './phonecode/css/intlTelInput.css'
import './phonecode/js/intlTelInput.js'
// === NOT INCLUDE === ///

// \/\/\/\/\/\/\/\/\/      COPY THIS in js-file       \/\/\/\/\/\/\/\/\/\/\/  //

// +------------------------------------------------------------------------+ //
// |                   Notification widget processing                       | //
// +------------------------------------------------------------------------+ //

// const widgetId = '!!! Your widget id !!!';
const widgetId = '0016acdf-71a1-f84f-112c-01645b288251';
let widgetTrigFlag = false;
let widgetDestroyFlag = false;
let number = '';

// ============================ Init buttons ================================ //
//                                 Viber                                      //
$('.subscribe-button#subscribe-viber').append(`<span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 54.2 54.3" enable-background="new 0 0 54.2 54.3" xml:space="preserve"><g><g><defs><rect id="SVGID_1_" x="0" y="0" width="53.8" height="53.8"></rect></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clipPath></g><g><defs><rect id="SVGID_3_" x="0" y="0" width="53.8" height="53.8"></rect></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"></use></clipPath><path clip-path="url(#SVGID_4_)" fill="#ffffff" d="M41.8,20L41.8,20c-0.7-3-4.1-6.2-7.1-6.9l0,0c-4.9-0.9-9.9-0.9-14.9,0l0,0 c-3,0.7-6.4,3.9-7.1,6.8l0,0c-0.9,4.2-0.9,8.4,0,12.5l0,0c0.7,2.8,3.8,5.9,6.7,6.7v3.3c0,1.2,1.5,1.8,2.3,0.9L25,40 c0.7,0,1.5,0.1,2.2,0.1c2.5,0,5-0.2,7.4-0.7l0,0c3-0.7,6.4-3.9,7.1-6.8l0,0C42.7,28.3,42.7,24.1,41.8,20 M39.2,31.9 c-0.5,1.9-3,4.4-5,4.8c-2.6,0.5-5.3,0.7-7.9,0.6c-0.1,0-0.1,0-0.1,0.1c-0.4,0.4-2.5,2.5-2.5,2.5L21,42.6c-0.2,0.2-0.5,0.1-0.5-0.2 v-5.5c0-0.1-0.1-0.2-0.2-0.2h0c-2-0.4-4.5-2.9-5-4.8c-0.8-3.8-0.8-7.6,0-11.3c0.5-1.9,3-4.4,5-4.8c4.6-0.9,9.2-0.9,13.8,0 c2,0.4,4.5,2.9,5,4.8C40,24.3,40,28.1,39.2,31.9"></path></g><g><defs><rect id="SVGID_5_" x="0" y="0" width="53.8" height="53.8"></rect></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"></use></clipPath><path clip-path="url(#SVGID_6_)" fill="#ffffff" d="M31.6,34.4c-0.3-0.1-0.6-0.2-0.9-0.3c-2.8-1.2-5.4-2.7-7.5-5 c-1.2-1.3-2.1-2.8-2.9-4.4c-0.4-0.7-0.7-1.5-1-2.3c-0.3-0.7,0.1-1.4,0.6-2c0.4-0.5,1-0.9,1.5-1.2c0.5-0.2,0.9-0.1,1.2,0.3 c0.7,0.8,1.4,1.7,1.9,2.7c0.3,0.6,0.2,1.3-0.4,1.7c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.2-0.2,0.5-0.1,0.8 c0.7,2,2,3.6,4,4.4c0.3,0.1,0.7,0.3,1,0.2c0.6-0.1,0.8-0.8,1.3-1.1c0.4-0.4,1-0.4,1.4-0.1c0.5,0.3,0.9,0.6,1.4,0.9 c0.4,0.3,0.9,0.6,1.3,1c0.4,0.3,0.5,0.8,0.3,1.3c-0.4,0.9-1,1.6-1.8,2C32.1,34.3,31.9,34.4,31.6,34.4 C31.3,34.3,31.9,34.4,31.6,34.4"></path></g><g><defs><rect id="SVGID_7_" x="0" y="0" width="53.8" height="53.8"></rect></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"></use></clipPath><path clip-path="url(#SVGID_8_)" fill="#ffffff" d="M27.2,18.4c3.7,0.1,6.7,2.6,7.4,6.2c0.1,0.6,0.2,1.3,0.2,1.9 c0,0.3-0.1,0.5-0.4,0.5c-0.3,0-0.4-0.2-0.4-0.5c0-0.5-0.1-1.1-0.1-1.6c-0.4-2.8-2.6-5-5.3-5.5c-0.4-0.1-0.8-0.1-1.3-0.1 c-0.3,0-0.6,0-0.7-0.4c0-0.3,0.2-0.5,0.4-0.5C27.1,18.4,27.2,18.4,27.2,18.4C30.9,18.5,27.2,18.4,27.2,18.4"></path></g><g><defs><rect id="SVGID_9_" x="0" y="0" width="53.8" height="53.8"></rect></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"></use></clipPath><path clip-path="url(#SVGID_10_)" fill="#ffffff" d="M32.9,25.7c0,0,0,0.2,0,0.3c-0.1,0.4-0.7,0.4-0.8,0c0-0.1,0-0.2,0-0.4 c0-0.8-0.2-1.6-0.6-2.2c-0.4-0.7-1-1.3-1.8-1.6c-0.4-0.2-0.9-0.3-1.4-0.4c-0.2,0-0.4-0.1-0.6-0.1c-0.3,0-0.4-0.2-0.4-0.5 c0-0.2,0.2-0.4,0.4-0.4c0.8,0,1.7,0.2,2.4,0.6c1.5,0.8,2.4,2.1,2.7,3.8c0,0.1,0,0.2,0,0.2C32.8,25.2,32.8,25.4,32.9,25.7 C32.9,25.7,32.8,25.4,32.9,25.7"></path></g><g><defs><rect id="SVGID_11_" x="0" y="0" width="53.8" height="53.8"></rect></defs><clipPath id="SVGID_12_"><use xlink:href="#SVGID_11_" overflow="visible"></use></clipPath><path clip-path="url(#SVGID_12_)" fill="#ffffff" d="M30.6,25.6c-0.3,0-0.5-0.2-0.5-0.4c0-0.2,0-0.4-0.1-0.6 c-0.1-0.4-0.3-0.7-0.6-1c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2-0.1-0.5,0-0.7-0.1c-0.2-0.1-0.4-0.3-0.3-0.5c0-0.2,0.2-0.4,0.5-0.4 c1.4,0.1,2.5,0.8,2.6,2.5c0,0.1,0,0.2,0,0.4C30.8,25.5,30.7,25.6,30.6,25.6C30.3,25.6,30.7,25.6,30.6,25.6"></path></g></g></svg>Viber</span>`);
$('.subscribe-button#subscribe-viber').attr('style', 'background-color: #59267c');
//                                   Vk                                      //
$('.subscribe-button#subscribe-vk').append(`<span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.5 53.5" enable-background="new 0 0 53.5 53.5" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M25.2,37.5h2.1c0,0,0.6-0.1,1-0.4c0.3-0.3,0.3-0.9,0.3-0.9 s0-2.8,1.3-3.2c1.3-0.4,2.9,2.7,4.7,3.9c1.3,0.9,2.3,0.7,2.3,0.7l4.7-0.1c0,0,2.5-0.2,1.3-2.1c-0.1-0.2-0.7-1.4-3.5-4 c-2.9-2.7-2.5-2.3,1-7c2.2-2.9,3-4.6,2.7-5.4c-0.3-0.7-1.8-0.5-1.8-0.5l-5.3,0c0,0-0.4-0.1-0.7,0.1c-0.3,0.2-0.5,0.6-0.5,0.6 s-0.8,2.2-1.9,4.1c-2.3,4-3.3,4.2-3.7,4c-0.9-0.6-0.7-2.3-0.7-3.6c0-3.9,0.6-5.5-1.1-5.9c-0.6-0.1-1-0.2-2.5-0.2 c-1.9,0-3.5,0-4.4,0.4c-0.6,0.3-1.1,0.9-0.8,1c0.3,0,1.1,0.2,1.6,0.8c0.5,0.7,0.5,2.4,0.5,2.4s0.3,4.6-0.7,5.1 c-0.7,0.4-1.7-0.4-3.8-4c-1.1-1.9-1.9-3.9-1.9-3.9S15.3,19,15,18.8c-0.3-0.2-0.8-0.3-0.8-0.3l-5,0c0,0-0.8,0-1,0.3 c-0.2,0.3,0,0.9,0,0.9s3.9,9.2,8.4,13.8C20.6,37.8,25.2,37.5,25.2,37.5L25.2,37.5z M25.2,37.5"></path></g></svg>VKontakte</span>`);
$('.subscribe-button#subscribe-vk').attr('style', 'background-color: #4c75a3');
//                                   Fb                                      //
$('.subscribe-button#subscribe-fb').append(`<span><svg xmlns="http://www.w3.org/2000/svg" height="20px" width="22px" version="1.1" viewBox="0 0 224 226"><defs><linearGradient id="a" y1="6.76%" x2="50%" x1="50%" y2="95.6%"><stop stop-color="#00C6FF" offset="0"/><stop stop-color="#0068FF" offset="1"/></linearGradient></defs><path fill="#fff" d="m41.255 185.52v40.2l37.589-21.37c10.478 3.02 21.616 4.65 33.156 4.65 61.86 0 112-46.79 112-104.5 0-57.714-50.14-104.5-112-104.5-61.856 0-112 46.786-112 104.5 0 32.68 16.078 61.86 41.255 81.02z"/><path fill="#0084ff" d="m100.04 75.878l-60.401 63.952 54.97-30.16 28.721 30.16 60.06-63.952-54.36 29.632-28.99-29.632z"/></svg> Facebook</span>`);
$('.subscribe-button#subscribe-fb').attr('style', 'background-color: #0084ff');

$('#widget-mobile').intlTelInput();

$('#subscribe-viber').mouseenter(() => {
  // deactivate a repeated call of _mouseenter_
  if ($(this).data("executing")) return;
  $(this).data("executing", true);
  widgetDestroyFlag = false;

  number = $('#widget-mobile').val();
  console.log(number);

  const config = {
    widgetId: widgetId,
    insecureContext: {
      phone_number: number
    }
  }
  
  TextBack.SDK.initWidget(config).then(widget => {
    $('#subscribe-viber').mouseleave(() => {
      if (!widgetDestroyFlag) {
        $(this).removeData("executing");
        delete this.widget;
        widgetTrigFlag = false;
        widgetDestroyFlag = true;
      }
    });

    $('#subscribe-viber').click(event => {  
      if (!widgetTrigFlag) {
        event.preventDefault();
        if (checkNumber(number)) {
          widget.subscribe('viber');
        }
        widgetTrigFlag = true;
      }
    });
  });
});

$('#subscribe-vk').mouseenter(() => {
  if ($(this).data("executing")) return;
  $(this).data("executing", true);
  widgetDestroyFlag = false;

  number = $('#widget-mobile').val();

  const config = {
    widgetId: widgetId,
    insecureContext: {
      phone_number: number
    }
  }
  
  TextBack.SDK.initWidget(config).then(widget => {
    $('#subscribe-viber').mouseleave(() => {
      if (!widgetDestroyFlag) {
        $(this).removeData("executing");
        delete this.widget;
        widgetTrigFlag = false;
        widgetDestroyFlag = true;
      }
    });

    $('#subscribe-viber').click(event => {  
      if (!widgetTrigFlag) {
        event.preventDefault();
        if (checkNumber(number)) {
          widget.subscribe('vk');
        }
        widgetTrigFlag = true;
      }
    });
  });
});

$('#subscribe-fb').mouseenter(() => {
  if ($(this).data("executing")) return;
  $(this).data("executing", true);
  widgetDestroyFlag = false;

  number = $('#widget-mobile').val();

  const config = {
    widgetId: widgetId,
    insecureContext: {
      phone_number: number
    }
  }
  
  TextBack.SDK.initWidget(config).then(widget => {
    $('#subscribe-viber').mouseleave(() => {
      if (!widgetDestroyFlag) {
        $(this).removeData("executing");
        delete this.widget;
        widgetTrigFlag = false;
        widgetDestroyFlag = true;
      }
    });

    $('#subscribe-viber').click(event => {  
      if (!widgetTrigFlag) {
        event.preventDefault();
        if (checkNumber(number)) {
          widget.subscribe('fb');
        }
        widgetTrigFlag = true;
      }
    });
  });
});

let checkNumber = number => {
  let validFlag = true;
  console.log(number);
  number.split('').forEach(item => {
    if (/[0-9]/.test(item) == false) {
      validFlag = false;
    }
  });
  if (validFlag == false ) alert('Номер телефона может содержать только цифры');
  if (number.length < 7) {
    alert('Номер телефона не может содержать меньше 7 символов');
    validFlag = false;
  }
  if (number.length > 13) {
    alert('Номер телефона не может содержать больше 9 символов');
    validFlag = false;
  }

  if (!validFlag) {
    $('.valid-box').hide();
    $('.invalid-box').show();
  } else {
    $('.invalid-box').hide();
    $('.valid-box').show();
  }

  return validFlag;
}