



const elements = $("#wholeMain path");
elements.each(function () {
  const $el = $(this);
  pathPrepare($el);
  // Create a timeline for each element
  const timeline = new TimelineMax().add(
    TweenMax.to($el, 1, { strokeDashoffset: 0, ease: Linear.easeNone })
  );
  // Add more tweens to the timeline as needed
});

Use CSS classes for common properties: Instead of setting individual CSS properties using .css(), 
you can define CSS classes with the desired properties and apply those classes to the elements. This can make the code more concise and easier to modify. For example:

const elements = $("#wholeMain path");
elements.each(function () {
  const $el = $(this);
  pathPrepare($el);
  $el.addClass("fill-opacity-transition");
  // ...
});


Then define the CSS class fill-opacity-transition with the desired properties in your CSS file:

.fill-opacity-transition {
    transition: fill-opacity 0.4s;
  }
  
  .fill-opacity-transition {
    fill-opacity: 0;
  }
  
  .fill-opacity-transition.show {
    fill-opacity: 1;
  }
  


  Combine similar tweens into a single TimelineMax: If you have multiple tweens with the same duration and easing, 
  you can combine them into a single TimelineMax to simplify the code. For example:

  const mainTween = new TimelineMax();
mainTween
  .add(TweenMax.to(mainLine, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))
  .add(TweenMax.fromTo(mainCuore, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 }))
  .add(TweenMax.fromTo(mainMeet, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 }))
  .add(TweenMax.fromTo(mainAbbra, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 }))
  // Add more tweens to the mainTween as needed
  ;
