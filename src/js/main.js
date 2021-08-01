window.onload = function() {

  console.log('Страница загружена');

  $(document).ready(function() {
    console.log('jQuery!!!');

    $('#pagepiling').pagepiling({
      menu: null,
      direction: 'vertical',
      verticalCentered: false,
      // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
      anchors: [],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
          'textColor': 'white',
          'bulletsColor': '#00d8ff',
          'position': 'right',
          'tooltips': ['Header', 'About me', 'My skills', 'Get in touch']
      },
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},

    });

    console.log('pagepiling!!!')
  });

};
