const mailto = document.getElementById("mailto");
const wrapper = document.getElementById("wrapper");
const loader = document.getElementById("loader");
const svgs = document.querySelectorAll("svg");

window.addEventListener("load", () => {
  if (window.innerWidth < 700) return;

  gsap.registerPlugin(ScrollTrigger);

  var mobTl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
    },
  });

  mobTl.fromTo(".hero-image-mob", { scale: 1 }, { scale: 3 }, "+=0.8");

  var heroTl = gsap.timeline();
  heroTl
    .from(
      ".hero h2",
      {
        duration: 1.5,
        y: "130%",
        rotation: 6,
        ease: "expo.out",
        stagger: 0.1,
      },
      "+=0.8"
    )
    .from(
      ".ui",
      {
        x: window.innerWidth < 800 ? 0 : 130,
        duration: 1.2,
        ease: "expo.out",
      },
      "-=0.5"
    )
    .from(
      ".ux",
      {
        x: window.innerWidth < 800 ? -30 : -130,
        duration: 1.2,
        ease: "expo.out",
      },
      "-=1.2"
    )
    .from(
      ".hero-image",
      {
        opacity: 0,
        scale: 0.3,
        duration: 1.2,
        ease: "expo.out",
      },
      "-=1"
    )
    .from(
      ".slash",
      {
        duration: 1.2,
        scale: 0,
        ease: "expo.out",
      },
      "-=1"
    )
    .from(".header-nav", { opacity: 0 }, "-=1")
    .to(".social-icons #linkedinIcon", {
      fill: "#0077b5",
      duration: 0.2,
    })
    .to(".social-icons #githubIcon", { fill: "#171515", duration: 0.2 })
    .to(".social-icons #instaIcon", { fill: "#fb3958", duration: 0.2 })
    .to(".social-icons #twitterIcon", { fill: "#1DA1F2", duration: 0.2 });

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
      ".hero h2",
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
    ease: "expo.outOut",
    stagger: 0.1,
  });

  ScrollTrigger.create({
    animation: sectionHeadingTl,
    trigger: ".section-heading span",
    scrub: 0.6,
    start: "top 70%",
    end: "top 40%",
  });

  var containers = gsap.utils.toArray(".project");

  containers.forEach((container) => {
    let projectTl = gsap.timeline();

    projectTl
      .from(container.querySelectorAll("img"), {
        y: 50,
        opacity: 0,
        ease: "expo.outOut",
      })
      .from(
        container.querySelectorAll(".project-desc"),
        {
          opacity: 0,
          y: 60,
          ease: "expo.out",
        },
        "-=0.2"
      );

    ScrollTrigger.create({
      animation: projectTl,
      trigger: container,
      scrub: 0.6,
      start: "top 60%",
      end: "top 10%",
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
      ease: "expo.outOut",
      stagger: 0.1,
    })
    .from(
      ".message",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "expo.out",
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

  var footerTl = gsap.timeline();

  footerTl
    .to(".mid-top #linkedinIcon", { fill: "#0077b5", duration: 0.2 }, "+=0.5")
    .to(".mid-top #instaIcon", { fill: "#fb3958", duration: 0.2 })
    .to(".mid-top #twitterIcon", { fill: "#1DA1F2", duration: 0.2 });

  ScrollTrigger.create({
    animation: footerTl,
    trigger: ".footer",
    toggleActions: "play pause resume reset",
  });

  function open(link) {
    window.open(link, "_blank");
  }

  function setBackground(color) {
    wrapper.style.backgroundColor = color;
  }

  function openMedia(e) {
    const name = e.target.getAttribute("name");

    if (name === "linkedin")
      open("https://www.linkedin.com/in/harsh-kumar-pandey-5ab9071aa/");
    if (name === "instagram")
      open("https://www.instagram.com/harshpandey_002/");
    if (name === "github") open("https://github.com/harshpandey002");
    if (name === "twitter") open("https://twitter.com/harshpandey_002");
  }

  function hoverMedia(e) {
    const name = e.target.getAttribute("name");

    if (name === "linkedin") setBackground("#e1e9ed");
    if (name === "instagram") setBackground("#f5edee");
    if (name === "github") setBackground("#f0f7f1");
    if (name === "twitter") setBackground("#ebeff2");
  }

  svgs.forEach((svg) =>
    svg.addEventListener("mouseout", () => setBackground("#f4f4f4"))
  );
  svgs.forEach((svg) => svg.addEventListener("mouseover", hoverMedia));
  svgs.forEach((svg) => svg.addEventListener("click", openMedia));
  mailto.addEventListener("click", () => {
    window.open("mailto:coding.harshp@gmail.com");
  });
});
