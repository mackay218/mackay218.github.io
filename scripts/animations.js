
/**HERO logo movement**/
$(document).ready(function() {

	let request = null;
	let mouse = { x: 0, y: 0 };
	let cx = window.innerWidth / 3;
	let cy = window.innerHeight / 3;

	$("#hero").mousemove(function(event) {

		mouse.x = event.pageX;
		mouse.y = event.pageY;

		cancelAnimationFrame(request);
		request = requestAnimationFrame(update);
	});

	function update() {

		dx = mouse.x - cx;
		dy = mouse.y - cy;

		tiltx = (dy / cy) ;
		tilty = - (dx / cx);


		radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
		degree = (radius * 10);

		TweenLite.to(".heroLogo", 0.1, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});

  }

	$(window).resize(function() {
		cx = window.innerWidth / 3;
		cy = window.innerHeight / 3;
	});
});

/*************************************/

/***MENU button color change***/

/*animations on scroll*/

$(function () {
    //init controller
    const controller = new ScrollMagic.Controller();

    /*change menu button color*/
    let hero = new ScrollMagic.Scene({ triggerElement: "#hero", duration: "100%"})
        .triggerHook("0")
        .setClassToggle(".bar", "hero-color")
        .addTo(controller);


    let person = new ScrollMagic.Scene({ triggerElement: "#person", duration: "108%" })
        .triggerHook("0")
        .setClassToggle(".bar", "person-color")
        .addTo(controller);


    let projects = new ScrollMagic.Scene({ triggerElement: "#projects", duration: "125%" })
        .triggerHook("onLeave")
        .setClassToggle(".bar", "projects-color")
        .addTo(controller);

    let contactBtn = new ScrollMagic.Scene({ triggerElement: "#contact", duration: "100%"})
        .triggerHook("0")
        .setClassToggle(".bar", "contact-color")
        .addTo(controller);

    let contactTitle = document.getElementById("contactTitle");
    let MNcontact = document.getElementById("MNcontact");
    let contactForm = document.getElementById("contactForm");
    let contactTl = new TimelineLite();
    contactTl.add(TweenLite.from(contactTitle, 0.5, { opacity: 0 }));
    contactTl.add(TweenLite.from(MNcontact, 0.5, { left: "-100vw" }), "-=0.4");
    contactTl.add(TweenLite.from(contactForm, 0.5, { left: "100vw" }));

    let contact = new ScrollMagic.Scene({ triggerElement: "#contact" })
        .triggerHook("1")
        .setTween(contactTl)
        .addTo(controller);

});
