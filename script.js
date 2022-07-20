const wrapper = document.getElementById("wrapper");

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
    .from(
      ".ui",
      {
        x: window.innerWidth < 800 ? 0 : 130,
        duration: 1.2,
        ease: "power1.easeIn",
      },
      "-=0.5"
    )
    .from(
      ".ux",
      {
        x: window.innerWidth < 800 ? -30 : -130,
        duration: 1.2,
        ease: "power1.easeIn",
      },
      "-=1.2"
    )
    .from(
      ".hero-image",
      {
        opacity: 0,
        scale: 0.3,
        duration: 1.2,
        ease: "power4.easeIn",
      },
      "-=1"
    )
    .from(
      ".slash",
      {
        duration: 1.2,
        scale: 0,
        ease: "power4.easeIn",
      },
      "-=1"
    );

  var imageTl = gsap.timeline();

  imageTl
    .fromTo(
      ".hero-image",
      {
        scale: 1,
      },
      { scale: 4, duration: 1 }
    )
    .fromTo(
      ".hero h1",
      { scale: 1 },
      { scale: window.innerWidth < 800 ? 1 : 0.3, duration: 1 },
      "-=1"
    );

  ScrollTrigger.create({
    animation: imageTl,
    scrub: true,
  });

  var aboutTl = gsap.timeline();

  aboutTl
    .from(".about img", { opacity: 0, x: 150 })
    .from(".about p", { opacity: 0, x: -150 });

  ScrollTrigger.create({
    animation: aboutTl,
    trigger: ".about img",
    start: "top 70%",
    end: "top 40%",
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
    start: "top 70%",
    end: "top 40%",
    // onLeave: () => {
    //   wrapper.style.background = "#f0f0f0";
    // },
    // onEnterBack: () => {
    //   wrapper.style.background = "#f4f4f4";
    // },
    // onLeaveBack: () => {
    //   wrapper.style.background = "#f4f4f4";
    // },
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
      start: "top 60%",
      end: "top 40%",
    });
  });

  var moreTl = gsap.timeline();

  moreTl
    .from(".more img", { opacity: 0, x: 150 })
    .from(".more p", { opacity: 0, x: -150 });

  ScrollTrigger.create({
    animation: moreTl,
    trigger: ".more",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
    // onEnter: () => {
    //   wrapper.style.background = "#f4f4f4";
    // },

    // onLeaveBack: () => {
    //   wrapper.style.background = "#f0f0f0";
    // },
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

  ScrollTrigger.create({
    animation: contactHeadingTl,
    trigger: ".contact-heading span",
    start: "top 70%",
    end: "top 40%",
    scrub: 0.6,
  });
});
