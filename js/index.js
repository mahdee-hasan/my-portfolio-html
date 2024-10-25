//dark-bright mode changer start
var body = document.querySelector("body");
var bgc = document.getElementById("bgc");
var who = document.getElementById("who");
var sumP = document.getElementById("sum-P");
var images = document.querySelectorAll("#resume-contact>a>img");
var skPic = document.querySelectorAll(".skPic");
var contactPic = document.querySelectorAll("contact-main>div>img");
var navbarPic = document.querySelectorAll(".additionalImage");
let bgCount = 1;
bgc.addEventListener("click", () => {
  if (bgCount === 1) {
    body.style.backgroundColor = "#000";
    bgc.src = "./img/logo/sun1.svg";
    body.style.color = "#fff";
    sumP.style.color = "#fff";
    images.forEach(function (img) {
      img.style.filter = "brightness(2)";
    });
    skPic.forEach(function (img) {
      img.style.filter = "brightness(2)";
    });
    contactPic.forEach(function (img) {
      img.style.filter = "brightness(2)";
    });
    navbarPic.forEach(function (img) {
      img.style.filter = "brightness(2)";
    });
    navi.forEach(function (pt) {
      pt.style.color = "#fff";
    });
    who.style.color = "#fff";
    bgCount = 0;
  } else {
    body.style.backgroundColor = "#fff";
    bgc.src = "./img/logo/moon.png";
    sumP.style.color = "#000";
    images.forEach(function (img) {
      img.style.filter = "brightness(1)";
    });
    skPic.forEach(function (img) {
      img.style.filter = "brightness(1)";
    });
    navbarPic.forEach(function (img) {
      img.style.filter = "brightness(1)";
    });
    body.style.color = "#000";
    navi.forEach(function (pt) {
      pt.style.color = "#000";
      console.log(pt);
    });
    contactPic.forEach(function (img) {
      img.style.filter = "brightness(1)";
    });
    who.style.color = "#000";
    bgCount++;
  }
});
//dark-bright mode changer end

// comment-box start
var commentator = document.getElementById("nameOf");
var comment = document.getElementById("comment-box");
var submit = document.getElementById("submit");

submit.addEventListener("mouseover", () => {
  if (commentator.value === "" || comment.value === "") {
    var randomX = Math.random() * 100;
    var randomY = Math.random() * -50;

    submit.style.transform = `translate(${randomX}px, ${randomY}px)`;

    setTimeout(() => {
      submit.style.transform = "translate(0px, 0px)";
    }, 500);
  } else {
    submit.style.transform = "translate(0px, 0px)";
  }
});
//comment-box end

//navbar start
//navbar bg and port display start

var nav = document.getElementById("menu");
var navmain = document.getElementById("navbar-li");
var port = document.querySelectorAll("#port-body>div");
var hr = document.querySelectorAll(".lastline");

const navbar = document.querySelectorAll("li");
function load1(
  number,
  default1,
  default2,
  default3,
  default4,
  default5,
  default6
) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  port[number].style.display = "flex";
  port[default1].style.display = "none";
  port[default2].style.display = "none";
  port[default3].style.display = "none";
  port[default4].style.display = "none";
  port[default5].style.display = "none";
  port[default6].style.display = "none";

  hr[number].style.display = "block";
  hr[default1].style.display = "none";
  hr[default2].style.display = "none";
  hr[default3].style.display = "none";
  hr[default4].style.display = "none";
  hr[default5].style.display = "none";
  hr[default6].style.display = "none";

  navbar[number].style.backgroundColor = "#059669";
  navbar[number].style.color = "#fff";
  navbar[default1].style.color = "black";
  navbar[default2].style.color = "black";
  navbar[default3].style.color = "black";
  navbar[default4].style.color = "black";
  navbar[default5].style.color = "black";
  navbar[default6].style.color = "black";
  navbar[default1].style.backgroundColor = "";
  navbar[default2].style.backgroundColor = "";
  navbar[default3].style.backgroundColor = "";
  navbar[default4].style.backgroundColor = "";
  navbar[default5].style.backgroundColor = "";
  navbar[default6].style.backgroundColor = "";
}

//navbar bg and port display end
//about button all display start
function load2(
  number,
  default1,
  default2,
  default3,
  default4,
  default5,
  default6
) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  port[number].style.display = "flex";
  port[default1].style.display = "flex";
  port[default2].style.display = "flex";
  port[default3].style.display = "flex";
  port[default4].style.display = "flex";
  port[default5].style.display = "flex";
  port[default6].style.display = "flex";

  hr[number].style.display = "block";
  hr[default1].style.display = "block";
  hr[default2].style.display = "block";
  hr[default3].style.display = "block";
  hr[default4].style.display = "block";
  hr[default5].style.display = "block";
  hr[default6].style.display = "block";

  navbar[number].style.backgroundColor = "#059669";
  navbar[number].style.color = "#fff";
  navbar[default1].style.color = "black";
  navbar[default2].style.color = "black";
  navbar[default3].style.color = "black";
  navbar[default4].style.color = "black";
  navbar[default5].style.color = "black";
  navbar[default6].style.color = "black";
  navbar[default1].style.backgroundColor = "";
  navbar[default2].style.backgroundColor = "";
  navbar[default3].style.backgroundColor = "";
  navbar[default4].style.backgroundColor = "";
  navbar[default5].style.backgroundColor = "";
  navbar[default6].style.backgroundColor = "";
}
//about button all display end

//navigation pic and navigation text for big screen start
function naviPic() {
  var width = window.innerWidth;

  var existingPic = document.getElementById("navigationPic");
  var existingAnotherPic = document.getElementById("anotherPic");
  var existingh1 = document.getElementById("navigationh1");
  var existingP = document.getElementById("navigationP");
  var existingImages = document.querySelectorAll(".additionalImage");
  var existingHr = document.getElementById("navigationHr");

  if (width > 1150) {
    if (
      !existingPic &&
      !existingAnotherPic &&
      !existingh1 &&
      !existingP &&
      existingImages.length === 0
    ) {
      var navigationPic = document.createElement("img");
      navigationPic.src = "./img/football/mahdee.jpg";
      navigationPic.id = "navigationPic";
      navigationPic.style.height = "60px";
      navigationPic.style.width = "60px";
      nav.insertBefore(navigationPic, nav.firstChild);

      var anotherPic = document.createElement("img");
      anotherPic.src = "./img/logo/mess.png";
      anotherPic.id = "anotherPic";
      anotherPic.style.height = "20px";
      anotherPic.style.width = "20px";
      nav.insertBefore(anotherPic, navmain);

      var navigationh1 = document.createElement("h1");
      navigationh1.innerHTML = "Mahdee Hasan";
      navigationh1.style.fontSize = "20px";
      navigationh1.id = "navigationh1";
      nav.insertBefore(navigationh1, navmain);

      var navigationP = document.createElement("p");
      navigationP.innerHTML = "Beginner at developing";
      navigationP.style.fontSize = "14px";
      navigationP.id = "navigationP";
      nav.insertBefore(navigationP, navmain);

      var imageSources = [
        { src: "./img/logo/whatsapp1.png", alt: "whatsapp" },
        { src: "./img/logo/call.png", alt: "Twitter" },
        { src: "./img/logo/mail.png", alt: "Google" },
        { src: "./img/logo/facebook.svg", alt: "Facebook" },
      ];

      imageSources.forEach((image) => {
        var additionalImage = document.createElement("img");
        additionalImage.src = image.src;
        additionalImage.alt = image.alt;
        additionalImage.className = "additionalImage";
        additionalImage.style.height = "70px";
        additionalImage.style.width = "70px";
        nav.insertBefore(additionalImage, navmain);
      });
    }
  } else {
    if (
      existingPic &&
      existingAnotherPic &&
      existingh1 &&
      existingP &&
      existingImages.length > 0
    ) {
      existingPic.remove();
      existingAnotherPic.remove();
      existingh1.remove();
      existingP.remove();
      existingImages.forEach((image) => image.remove());
    }
  }
}

window.addEventListener("resize", naviPic);
naviPic();

//for mobile nav text edit start
var navImg = document.querySelectorAll(".navImg");
var navi = document.querySelectorAll(".pt");
function res() {
  var width = window.innerWidth;

  if (width < 970) {
    navi[0].innerHTML = "";
    navi[1].innerHTML = "";
    navi[2].innerHTML = "";
    navi[4].innerHTML = "";
    navi[5].innerHTML = "";
    navi[3].innerHTML = "";
    navi[6].innerHTML = "";
    navImg[0].style.transform = "translateX(1px)";
    navImg[1].style.transform = "translateX(1px)";
    navImg[2].style.transform = "translateX(1px)";
    navImg[3].style.transform = "translateX(1px)";
    navImg[4].style.transform = "translateX(1px)";
    navImg[5].style.transform = "translateX(1px)";
    navImg[6].style.transform = "translateX(1px)";
  } else {
    navi[0].innerHTML = "about";
    navi[3].innerHTML = "product";
    navi[5].innerHTML = "blog";
    navi[6].innerHTML = "contact";
    navi[2].innerHTML = "resume";
    navi[1].innerHTML = "portfolio";
    navi[4].innerHTML = "service";
  }
}

window.addEventListener("resize", res);

res();
//for mobile nav text edit end
//nav icon up down start
function navUp(i, a, b, c, d, e, f) {
  navbar[i].style.transform = "translateY(-20px)";
  navbar[a].style.transform = "translateY(0px)";
  navbar[b].style.transform = "translateY(0px)";
  navbar[c].style.transform = "translateY(0px)";
  navbar[d].style.transform = "translateY(0px)";
  navbar[e].style.transform = "translateY(0px)";
  navbar[f].style.transform = "translateY(0px)";
}

function handleNavClick(i, a, b, c, d, e, f) {
  var width = window.innerWidth;

  if (width < 1150) {
    navUp(i, a, b, c, d, e, f);
  }
}
navbar[0].addEventListener("click", function () {
  handleNavClick(0, 1, 2, 3, 4, 5, 6);
});

navbar[1].addEventListener("click", function () {
  handleNavClick(1, 0, 2, 3, 4, 5, 6);
});

navbar[2].addEventListener("click", function () {
  handleNavClick(2, 1, 0, 3, 4, 5, 6);
});

navbar[3].addEventListener("click", function () {
  handleNavClick(3, 1, 2, 0, 4, 5, 6);
});

navbar[4].addEventListener("click", function () {
  handleNavClick(4, 1, 2, 3, 0, 5, 6);
});

navbar[5].addEventListener("click", function () {
  handleNavClick(5, 1, 2, 3, 4, 0, 6);
});

navbar[6].addEventListener("click", function () {
  handleNavClick(6, 1, 2, 3, 4, 5, 0);
});

window.addEventListener("resize", () => {
  let width = window.innerWidth;
  if (width > 1150) {
    navbar[0].style.transform = "translateY(0px)";
    navbar[1].style.transform = "translateY(0px)";
    navbar[2].style.transform = "translateY(0px)";
    navbar[3].style.transform = "translateY(0px)";
    navbar[4].style.transform = "translateY(0px)";
    navbar[5].style.transform = "translateY(0px)";
    navbar[6].style.transform = "translateY(0px)";
  }
});
//nav icon up down end
//typing animation start

const texts = ["DEVELOPER", "WEB DESIGNER"];
let currentTextIndex = 0;
let index = 0;
let isTyping = true;
function type() {
  const currentText = texts[currentTextIndex];

  if (isTyping) {
    if (index < currentText.length) {
      document.getElementById("text").innerHTML += currentText.charAt(index);
      index++;
    } else {
      isTyping = false;
      setTimeout(type, 500);
      return;
    }
  } else {
    if (index > 0) {
      document.getElementById("text").innerHTML = currentText.slice(
        0,
        index - 1
      );
      index--;
    } else {
      isTyping = true;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(type, 500);
      return;
    }
  }
  setTimeout(type, 200);
}

type();
//typing animation end

// counting animation start
// work counting animation start

let count1 = 0;
let maxCount1 = 2;

let interval1 = setInterval(() => {
  count1++;
  document.getElementById("workC").innerText = count1;

  if (count1 === maxCount1) {
    clearInterval(interval1);
  }
}, 1000);

// work counting animation end

// project counting start
let count2 = 0;
let maxCount2 = 15;

let interval2 = setInterval(() => {
  count2++;
  document.getElementById("projectC").innerText = count2;

  if (count2 === maxCount2) {
    clearInterval(interval2);
  }
}, 200);
// project counting end

// client counting start
let count3 = 0;
let maxCount3 = 5;

let interval3 = setInterval(() => {
  count3++;
  document.getElementById("clientC").innerText = count3;

  if (count3 === maxCount3) {
    clearInterval(interval3);
  }
}, 500);
// client counting end

// counting animation end
var fNav = document.querySelectorAll("#folio-li>li");
var fPort = document.querySelectorAll("#folio-body>div");

function load3(num, d1, d2, d3, d4) {
  if (num === 0) {
    fPort.forEach(function (port) {
      port.style.display = "flex";
    });
  } else {
    fPort[num].style.display = "flex";
    fPort[d1].style.display = "none";
    fPort[d2].style.display = "none";
    fPort[d3].style.display = "none";
    fPort[d4].style.display = "none";
  }

  fNav[num].style.borderBottom = "2px solid #059669";
  fNav[d1].style.borderBottom = "none";
  fNav[d2].style.borderBottom = "none";
  fNav[d3].style.borderBottom = "none";
  fNav[d4].style.borderBottom = "none";
}

//blog start
var Bnav = document.querySelectorAll("#blog-main>ul>li");
var Bport = document.querySelectorAll("#blog-main>div");

function load4(num, d1, d2) {
  if (num === 0) {
    Bport.forEach(function (port) {
      port.style.display = "flex";
    });
  } else {
    Bport[num].style.display = "flex";
    Bport[d1].style.display = "none";
    Bport[d2].style.display = "none";
  }

  Bnav[num].style.borderBottom = "2px solid #059669";
  Bnav[d1].style.borderBottom = "none";
  Bnav[d2].style.borderBottom = "none";
}
// blog end

// product start
var pnav = document.querySelectorAll("#product-main>ul>li");
var Pport = document.querySelectorAll(".part");

function load5(num, d1, d2) {
  if (num === 0) {
    Pport.forEach(function (port) {
      port.style.display = "flex";
    });
  } else {
    Pport[num].style.display = "flex";
    Pport[d1].style.display = "none";
    Pport[d2].style.display = "none";
  }

  pnav[num].style.borderBottom = "2px solid #059669";
  pnav[d1].style.borderBottom = "none";
  pnav[d2].style.borderBottom = "none";
}
// set somethings to auto

window.addEventListener("load", () => {
  load2(0, 1, 2, 3, 4, 5, 6);
  load3(0, 1, 2, 3, 4);
  load4(0, 1, 2);
  load5(0, 1, 2);
});

const langCardData = [
  {
    id: 1,
    name: "HTML",
    img: "html.png",
    description:
      "HTML (HyperText Markup Language) is the core language for creating web pages. It defines the structure of a webpage using tags like h1, img, and a. HTML organizes content, enabling browsers to display text, images, and links. It's essential for web development, paired with CSS and JavaScript for design and interactivity.",
  },
  {
    id: 2,
    name: "CSS",
    img: "css.svg",
    description:
      "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall design of a webpage.",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "js.svg",
    description:
      "JavaScript is a programming language that allows you to implement complex things on web pages, like interactive forms, animations, and more. It works in tandem with HTML and CSS.",
  },
  {
    id: 4,
    name: "REACT",
    img: "react.svg",
    description:
      "HTML (HyperText Markup Language) is the core language for creating web pages. It defines the structure of a webpage using tags like h1, img, and a. HTML organizes content, enabling browsers to display text, images, and links. It's essential for web development, paired with CSS and JavaScript for design and interactivity.",
  },
  {
    id: 5,
    name: "BOOTSTRAP",
    img: "bootstrap.png",
    description:
      "HTML (HyperText Markup Language) is the core language for creating web pages. It defines the structure of a webpage using tags like h1, img, and a. HTML organizes content, enabling browsers to display text, images, and links. It's essential for web development, paired with CSS and JavaScript for design and interactivity.",
  },
  {
    id: 6,
    name: "C++",
    img: "c++.svg",
    description:
      "HTML (HyperText Markup Language) is the core language for creating web pages. It defines the structure of a webpage using tags like h1, img, and a. HTML organizes content, enabling browsers to display text, images, and links. It's essential for web development, paired with CSS and JavaScript for design and interactivity.",
  },
];

const cardContainer = document.getElementById("card-container");

langCardData.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  cardDiv.innerHTML = `
      <img src="./img/logo/${card.img}" alt="${card.name}" />
      <h4>${card.name}</h4>
      <p>${card.description}</p>
    `;

  cardContainer.appendChild(cardDiv);
});
