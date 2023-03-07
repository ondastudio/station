//PageLoad
const baf = baffle(".pageload");
/*baf.set({
  characters: "s t a t i 0 n",
  speed: 100
});*/
baf.start();
baf.reveal(1750);

//hovers

const btns = document.querySelectorAll(".hover-anim");

btns.forEach((btn) => {
  const hovered = baffle(btn);
  btn.addEventListener("mouseenter", () => {
    /*hovered.set({
      characters: "s t a t i 0 n"
    });*/
    hovered.start();
    hovered.reveal(500);
  });
});

//intoView1
const view1 = baffle(".view1");

$(".whatis__left-content").on("inview", function (event, isInView) {
  if (isInView) {
    view1.start();
    view1.reveal(750);
    $(".whatis__left-content").off("inview");
  }
});

//intoView2
const view2 = baffle(".view2");

$(".is--simple-heading").on("inview", function (event, isInView) {
  if (isInView) {
    view2.start();
    view2.reveal(750);
    $(".is--simple-heading").off("inview");
  }
});

//intoView3
const view3 = baffle(".view3");

$(".statistics__content-wrap").on("inview", function (event, isInView) {
  if (isInView) {
    view3.start();
    view3.reveal(750);
    $(".statistics__content-wrap").off("inview");
  }
});

//intoView4
const view4 = baffle(".view4");

$(".cards__heading-w").on("inview", function (event, isInView) {
  if (isInView) {
    view4.start();
    view4.reveal(750);
    $(".cards__heading-w").off("inview");
  }
});

//intoView5
const view5 = baffle(".view5");

$(".faqs__heading-w").on("inview", function (event, isInView) {
  if (isInView) {
    view5.start();
    view5.reveal(750);
    $(".faqs__heading-w").off("inview");
  }
});

//intoViewcards
const view6 = baffle(".viewcard");

$(".cards-col-item").on("inview", function (event, isInView) {
  if (isInView) {
    view6.start();
    view6.reveal(1000);
    $(".cards-col-item").off("inview");
  }
});

//intoViewcardsnumber
const viewNumber = baffle(".viewnumber");

$(".simple-card").on("inview", function (event, isInView) {
  if (isInView) {
    viewNumber.start();
    viewNumber.reveal(1500);
    $(".simple-card").off("inview");
  }
});

//intoViewcardsRoadmap
const view7 = baffle(".viewroadmap");

$(".cards-col-item").on("inview", function (event, isInView) {
  if (isInView) {
    view7.start();
    view7.reveal(1500);
    $(".cards-col-item").off("inview");
  }
});
