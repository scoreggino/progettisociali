// MAIN
const mainLine = $("#wholeMain path.ln");
const mainCuore = $("#wholeMain path.cuore");
const mainMeet = $("#wholeMain path.meeting");
const mainAbbra = $("#wholeMain path.abbra");
const mainCarrMain = $("#wholeMain path.carrMain");
const mainVecchi = $("#wholeMain path.vecchi");
const mainDomanda = $("#wholeMain path.domanda");
const mainDisc = $("#wholeMain path.disc");
const mainPalla = $("#wholeMain path.palla");
const mainComunita = $("#wholeMain path.comunita");

// FARFALLA
const farfLine = $("#farfalla path.ln");
const farfYellow = $("#farfalla path.st0");
const farfBlue = $("#farfalla path.st1");

// AMBULANZA
const ambuLine = $("#ambulanza path.ln");
const ambuBlue = $("#ambulanza path.st0");
const ambuYellow = $("#ambulanza path.st1");
const ambuRed = $("#ambulanza path.st2");
const ambuGreen = $("#ambulanza path.st3");

// MANI
const maniLine = $("#mani path.ln");
const maniRed = $("#mani path.st0");
const maniYellow = $("#mani path.st1");
const maniGreen = $("#mani path.st2");

// CARROZZELLA
const carrLine = $("#carrozzella path.ln");
const carrRed = $("#carrozzella path.st0");
const carrYellow = $("#carrozzella path.st1");
const carrGreen = $("#carrozzella path.st2");
const carrBlue = $("#carrozzella path.st3");

// PUZZLE
const puzzleLine = $("#puzzle path.ln");
const puzzleRed = $("#puzzle path.st0");
const puzzleGreen = $("#puzzle path.st1");

const carrozzellaMobileLine = $("#carrozzellaMobile path.ln");
const carrozzellaMobileYellow = $("#carrozzellaMobile path.st0");
const carrozzellaMobileBlue = $("#carrozzellaMobile path.st1");
const carrozzellaMobileRed = $("#carrozzellaMobile path.st2");

const anzianiMobileLine = $("#anzianiMobile path.ln");
const anzianiMobileGreen = $("#anzianiMobile path.st0");
const anzianiMobileYellow = $("#anzianiMobile path.st1");
const anzianiMobileBlue = $("#anzianiMobile path.st2");

const coppiaMobileLine = $("#coppiaMobile path.ln");
const coppiaMobileRed = $("#coppiaMobile path.st0");
const coppiaMobileYellow = $("#coppiaMobile path.st1");
const coppiaMobileBlue = $("#coppiaMobile path.st2");

const riunioneMobileLine = $("#riunioneMobile path.ln");
const riunioneMobileGreen = $("#riunioneMobile path.st0");
const riunioneMobileYellow = $("#riunioneMobile path.st1");
const riunioneMobileBlue = $("#riunioneMobile path.st2");
const riunioneMobileRed = $("#riunioneMobile path.st3");

const cuoreMobileLine = $("#cuoreMobile path.ln");
const cuoreMobileRed = $("#cuoreMobile path.st0");
const cuoreMobileYellow = $("#cuoreMobile path.st1");

const domandaMobileLine = $("#domandaMobile path.ln");
const domandaMobileRed = $("#domandaMobile path.st0");

const meetingMobileLine = $("#meetingMobile path.ln");
const meetingMobileRed = $("#meetingMobile path.st0");
const meetingMobileYellow = $("#meetingMobile path.st1");
const meetingMobileBlue = $("#meetingMobile path.st2");

const sassoMobileLine = $("#sassoMobile path.ln");
const sassoMobileBlue = $("#sassoMobile path.st3");
const sassoMobileRed = $("#sassoMobile path.st2");
const sassoMobileYellow = $("#sassoMobile path.st1");
const sassoMobileGreen = $("#sassoMobile path.st0");

const pensioneMobileLine = $("#pensioneMobile path.ln");
const pensioneMobileBlue = $("#pensioneMobile path.st0");
const pensioneMobileGreen = $("#pensioneMobile path.st1");
const pensioneMobileRed = $("#pensioneMobile path.st2");
const pensioneMobileYellow = $("#pensioneMobile path.st3");

const logoLine1 = $("#logo-wrapper .raggio1");
const logoLine2 = $("#logo-wrapper .raggio2");
const logoLine3 = $("#logo-wrapper .raggio3");
const logoLine4 = $("#logo-wrapper .raggio4");

const logoBambino1 = $("#logo-wrapper .bambino1");
const logoBambino2 = $("#logo-wrapper .bambino2");


document.addEventListener("DOMContentLoaded", () => {

  // CONTROLLER PER LIMITI SCROLL
  const controller = new ScrollMagic.Controller();

  function pathPrepare() {
    const lines = document.querySelectorAll('.path');
    console.log(lines);

    lines.forEach((ln) => {
      const lineLength = ln.getTotalLength();
      ln.style.strokeDasharray = lineLength;
      ln.style.strokeDashoffset = lineLength;
    })

  }

  // PREPARE CSS FOR SCROLLMAGIC TO WORK
  pathPrepare();

  const mainCuoreTween = new TimelineMax().add(
    TweenMax.fromTo(mainCuore, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainMeetTween = new TimelineMax().add(
    TweenMax.fromTo(mainMeet, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainAbbraTween = new TimelineMax().add(
    TweenMax.fromTo(mainAbbra, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainCarrMainTween = new TimelineMax().add(
    TweenMax.fromTo(mainCarrMain, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainVecchiTween = new TimelineMax().add(
    TweenMax.fromTo(mainVecchi, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainDomandaTween = new TimelineMax().add(
    TweenMax.fromTo(mainDomanda, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainDiscTween = new TimelineMax().add(
    TweenMax.fromTo(mainDisc, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainPallaTween = new TimelineMax().add(
    TweenMax.fromTo(mainPalla, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainComunitaTween = new TimelineMax().add(
    TweenMax.fromTo(mainComunita, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
  );

  const mainTween = new TimelineMax().add(
    TweenMax.to(mainLine, 1, { strokeDashoffset: 0, ease: Linear.easeNone })
  );

  const farfallaTween = new TimelineMax()
    .add(
      TweenMax.to(farfLine, 0.6, { strokeDashoffset: 0, ease: Linear.easeNone })
    )
    .add(TweenMax.fromTo(farfBlue, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 }))
    .add(
      TweenMax.fromTo(farfYellow, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
    );

  const ambuTween = new TimelineMax()
    .add(
      TweenMax.to(ambuLine, 0.8, { strokeDashoffset: 0, ease: Linear.easeNone })
    )
    .add(TweenMax.fromTo(ambuRed, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 }))
    .add(
      TweenMax.fromTo(ambuGreen, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 })
    )
    .add(TweenMax.fromTo(ambuBlue, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 }))
    .add(
      TweenMax.fromTo(ambuYellow, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 })
    );

  const maniTween = new TimelineMax()
    .add(
      TweenMax.to(maniLine, 0.8, { strokeDashoffset: 0, ease: Linear.easeNone })
    )
    .add(TweenMax.fromTo(maniRed, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 }))
    .add(
      TweenMax.fromTo(maniYellow, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 })
    )
    .add(
      TweenMax.fromTo(maniGreen, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 })
    );

  const carrTween = new TimelineMax()
    .add(
      TweenMax.to(carrLine, 0.8, { strokeDashoffset: 0, ease: Linear.easeNone })
    )
    .add(
      TweenMax.fromTo(carrGreen, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 })
    )
    .add(
      TweenMax.fromTo(carrYellow, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 })
    )
    .add(TweenMax.fromTo(carrRed, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 }))
    .add(
      TweenMax.fromTo(carrBlue, 0.3, { fillOpacity: 0 }, { fillOpacity: 1 })
    );

  const puzzleTween = new TimelineMax()
    .add(
      TweenMax.to(puzzleLine, 0.6, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(puzzleRed, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
    )
    .add(
      TweenMax.fromTo(puzzleGreen, 0.4, { fillOpacity: 0 }, { fillOpacity: 1 })
    );

  const carrozzellaMobileTween = new TimelineMax()
    .add(
      TweenMax.to(carrozzellaMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        carrozzellaMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        carrozzellaMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        carrozzellaMobileBlue,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const anzianiMobileTween = new TimelineMax()
    .add(
      TweenMax.to(anzianiMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        anzianiMobileGreen,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        anzianiMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        anzianiMobileBlue,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const coppiaMobileTween = new TimelineMax()
    .add(
      TweenMax.to(coppiaMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        coppiaMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        coppiaMobileBlue,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        coppiaMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const riunioneMobileTween = new TimelineMax()
    .add(
      TweenMax.to(riunioneMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        riunioneMobileBlue,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        riunioneMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        riunioneMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        riunioneMobileGreen,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const cuoreMobileTween = new TimelineMax()
    .add(
      TweenMax.to(cuoreMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        cuoreMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        cuoreMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const domandaMobileTween = new TimelineMax()
    .add(
      TweenMax.to(domandaMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        domandaMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const meetingMobileTween = new TimelineMax()
    .add(
      TweenMax.to(meetingMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        meetingMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        meetingMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        meetingMobileBlue,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const sassoMobileTween = new TimelineMax()
    .add(
      TweenMax.to(sassoMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        sassoMobileBlue,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        sassoMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        sassoMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        sassoMobileGreen,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const pensioneMobileTween = new TimelineMax()
    .add(
      TweenMax.to(pensioneMobileLine, 0.4, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.fromTo(
        pensioneMobileBlue,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        pensioneMobileGreen,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        pensioneMobileRed,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    )
    .add(
      TweenMax.fromTo(
        pensioneMobileYellow,
        0.3,
        { fillOpacity: 0 },
        { fillOpacity: 1 }
      )
    );

  const logoLine1Tween = new TimelineMax().add(
    TweenMax.fromTo(
      logoLine1,
      3,
      { x: -10, fillOpacity: 0.2 },
      { x: 0, fillOpacity: 1 }
    )
  );

  const logoLine2Tween = new TimelineMax().add(
    TweenMax.fromTo(
      logoLine2,
      3,
      { x: 20, fillOpacity: 0.2 },
      { x: 0, fillOpacity: 1 }
    )
  );

  const logoLine3Tween = new TimelineMax().add(
    TweenMax.fromTo(
      logoLine3,
      3,
      { x: -5, fillOpacity: 0.2 },
      { x: 0, fillOpacity: 1 }
    )
  );

  const logoLine4Tween = new TimelineMax().add(
    TweenMax.fromTo(
      logoLine4,
      3,
      { x: 10, fillOpacity: 0.2 },
      { x: 0, fillOpacity: 1 }
    )
  );

  const bambino1Tween = new TimelineMax().add(
    TweenMax.fromTo(
      logoBambino1,
      3,
      { x: -15, fillOpacity: 0.2 },
      { x: 0, fillOpacity: 1 }
    )
  );

  const bambino2Tween = new TimelineMax().add(
    TweenMax.fromTo(
      logoBambino2,
      3,
      { x: 15, fillOpacity: 0.2 },
      { x: 0, fillOpacity: 1 }
    )
  );

  const sceneCarrozzellaMobile = new ScrollMagic.Scene({
    triggerElement: "#carrozzellaMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(carrozzellaMobileTween)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  const sceneAnzianiMobile = new ScrollMagic.Scene({
    triggerElement: "#anzianiMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(anzianiMobileTween)
    .addTo(controller);

  const sceneCoppiaMobile = new ScrollMagic.Scene({
    triggerElement: "#coppiaMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(coppiaMobileTween)
    .addTo(controller);

  const sceneRiunioneMobileMobile = new ScrollMagic.Scene({
    triggerElement: "#riunioneMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(riunioneMobileTween)
    .addTo(controller);

  const sceneCuoreMobile = new ScrollMagic.Scene({
    triggerElement: "#cuoreMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(cuoreMobileTween)
    .addTo(controller);

  const sceneDomandaMobile = new ScrollMagic.Scene({
    triggerElement: "#domandaMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(domandaMobileTween)
    .addTo(controller);

  const sceneMeetingMobile = new ScrollMagic.Scene({
    triggerElement: "#meetingMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(meetingMobileTween)
    .addTo(controller);

  const sceneSassoMobile = new ScrollMagic.Scene({
    triggerElement: "#sassoMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(sassoMobileTween)
    .addTo(controller);

  const pensioneMobileMobile = new ScrollMagic.Scene({
    triggerElement: "#pensioneMobile > svg",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(pensioneMobileTween)
    .addTo(controller);

  const sceneMain = new ScrollMagic.Scene({
    triggerElement: ".section-1 .text-block",
    duration: 3600,
    tweenChanges: true,
  })
    .setTween(mainTween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  const sceneCuoreMain = new ScrollMagic.Scene({
    triggerElement: ".section-2 .cuoreTrigger",
    duration: 120,
    tweenChanges: true,
  })
    .setTween(mainCuoreTween)
    .addTo(controller);

  const sceneMeetMain = new ScrollMagic.Scene({
    triggerElement: ".section-2 .meetTrigger",
    duration: 250,
    tweenChanges: true,
  })
    .setTween(mainMeetTween)
    .addTo(controller);

  const sceneAbbraMain = new ScrollMagic.Scene({
    triggerElement: ".section-2 .abbraTrigger",
    duration: 200,
    tweenChanges: true,
  })
    .setTween(mainAbbraTween)
    .addTo(controller);

  const sceneVecchiMain = new ScrollMagic.Scene({
    triggerElement: ".section-2 .vecchiTrigger",
    duration: 200,
    tweenChanges: true,
  })
    .setTween(mainVecchiTween)
    .addTo(controller);

  const sceneDomandaMain = new ScrollMagic.Scene({
    triggerElement: ".section-4.domandaTrigger",
    duration: 150,
    tweenChanges: true,
  })
    .setTween(mainDomandaTween)
    .addTo(controller);

  const sceneComunitaMain = new ScrollMagic.Scene({
    triggerElement: ".section-7",
    duration: 350,
    tweenChanges: true,
  })
    .setTween(mainComunitaTween)
    .addTo(controller);

  const scenePallaMain = new ScrollMagic.Scene({
    triggerElement: ".section-6",
    duration: 200,
    tweenChanges: true,
  })
    .setTween(mainPallaTween)
    .addTo(controller);

  const sceneDiscMain = new ScrollMagic.Scene({
    triggerElement: ".section-5",
    duration: 200,
    tweenChanges: true,
  })
    .setTween(mainDiscTween)
    .addTo(controller);

  const sceneMainCarrMain = new ScrollMagic.Scene({
    duration: 200,
    tweenChanges: true,
  })
    .setTween(mainCarrMainTween)
    .addTo(controller);

  const sceneFarfalla = new ScrollMagic.Scene({
    triggerElement: "#farfalla",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(farfallaTween)
    .addTo(controller);

  const sceneAmbulanza = new ScrollMagic.Scene({
    triggerElement: "#ambulanza",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(ambuTween)
    .addTo(controller);

  const sceneMani = new ScrollMagic.Scene({
    triggerElement: "#mani",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(maniTween)
    .addTo(controller);

  const sceneCarr = new ScrollMagic.Scene({
    triggerElement: "#carrozzella",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(carrTween)
    .addTo(controller);

  const scenePuzzle = new ScrollMagic.Scene({
    triggerElement: "#puzzle",
    duration: 80,
    tweenChanges: true,
  })
    .setTween(puzzleTween)
    .addTo(controller);
});