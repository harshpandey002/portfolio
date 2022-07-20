// Scrollbar.init(document.querySelector("#my-scrollbar"));
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  var heroTl = gsap.timeline();
  heroTl
    .from(".hero h1", {
      duration: 1.5,
      y: "130%",
      rotation: 6,
      ease: "power1.easeInOut",
      stagger: 0.1,
    })
    .from(".ui", { x: 130, duration: 1.2, ease: "power1.easeIn" }, "-=0.5")
    .from(".ux", { x: -130, duration: 1.2, ease: "power1.easeIn" }, "-=1.2")
    .from(
      ".hero-image",
      {
        opacity: 0,
        scale: 0.3,
        duration: 1.2,
        ease: "power4.easeIn",
      },
      "-=1"
    );

  var aboutTl = gsap.timeline();

  aboutTl
    .from(".about", {
      ease: "power4.easeInOut",
    })
    .from(".about img", { opacity: 0, x: 150 })
    .from(".about p", { opacity: 0, x: -150 });

  ScrollTrigger.create({
    animation: aboutTl,
    trigger: ".about img",
    start: "top 70%",
    end: "50% 70%",
    scrub: 1,
  });

  var sectionHeadingTl = gsap.timeline();

  sectionHeadingTl.from(".section-heading span h1, .section-heading span h2", {
    duration: 0.8,
    y: "130%",
    rotation: 6,
    ease: "power1.easeInOut",
    stagger: 0.1,
  });

  ScrollTrigger.create({
    animation: sectionHeadingTl,
    trigger: ".section-heading span",
    scrub: 0.6,
    start: "top 100%",
    end: "top 70%",
  });

  var containers = gsap.utils.toArray(".project");

  containers.forEach((container) => {
    let projectTl = gsap.timeline();

    projectTl
      .from(container.querySelectorAll("img"), {
        y: 50,
        opacity: 0,
        ease: "power1.easeInOut",
      })
      .from(
        container.querySelectorAll(".project-desc"),
        {
          opacity: 0,
          y: 30,
          ease: "power4.easeIn",
        },
        "-=0.2"
      );

    ScrollTrigger.create({
      animation: projectTl,
      trigger: container,
      scrub: 0.6,
      end: "top 50%",
    });
  });

  var moreTl = gsap.timeline();

  moreTl
    .from(".more", {
      width: 0,
      ease: "power4.easeInOut",
    })
    .from(".more img", { opacity: 0, x: 150 })
    .from(".more p", { opacity: 0, x: -150 });

  ScrollTrigger.create({
    animation: moreTl,
    trigger: ".more",
    end: "top 50%",
    scrub: 1,
  });

  var contactHeadingTl = gsap.timeline();

  contactHeadingTl
    .from(".contact-heading span h1, .contact-heading span h2", {
      duration: 0.8,
      y: "130%",
      rotation: 6,
      ease: "power1.easeInOut",
      stagger: 0.1,
    })
    .from(
      ".message",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power4.easeIn",
        stagger: 0.1,
      },
      "-=0.2"
    );

  // ScrollTrigger.create({
  //   animation: contactHeadingTl,
  //   trigger: ".contact-heading span",
  //   end: "top 80%",
  //   scrub: 0.6,
  // });
});
