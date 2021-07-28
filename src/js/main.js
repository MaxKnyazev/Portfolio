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
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': ['section1', 'section2', 'section3', 'section4']
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
