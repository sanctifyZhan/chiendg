var headFactors = document.querySelector("head");
headFactors.insertAdjacentHTML("beforeend", '<link href="https://fonts.googleapis.com/css?family=Mina" rel="stylesheet">');
var rootJs = document.querySelector(".jsRootPrefix"),
    theTime = anime.timeline();

function maskCreator(e) {
    e.classList.add("boxMask"), e.innerHTML = '<div class="text" style="opacity: 0;">' + e.innerHTML + "</div>", e.insertAdjacentHTML("beforeend", '<div class="mask"> <div class="mask1"></div> <svg id="Layer_1" class="mask2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.26 204"><defs><style>.cls-1{fill:#4285f4;}</style></defs><path class="cls-1" d="M2.12,18.93V188.05a17.44,17.44,0,0,0,17.44,17.44H300.19c16.61,0,23.82-21,10.69-31.22h0a17.44,17.44,0,0,1,0-27.56l22.75-17.65a17.45,17.45,0,0,0,.2-27.4L308.14,81.11a17.44,17.44,0,0,1-4-22.74L315.38,40.1a17.44,17.44,0,0,0-3.44-22.3L298,5.75a17.41,17.41,0,0,0-11.42-4.26h-267A17.44,17.44,0,0,0,2.12,18.93Z" transform="translate(-2.12 -1.49)"/></svg> </div>');
    var t = e.querySelector(".mask");
    t.style.transformOrigin = "100% 50%", t.style.transform = "scaleX(0)";
    var a = e.querySelector(".text");
    a.style.opacity = "0", theTime.add({
        targets: t,
        scaleX: 1,
        easing: "easeInOutQuint",
        duration: 600,
        complete: function() {
            a.style.opacity = "1", anime({
                targets: t,
                delay: 150,
                translateX: "-155%",
                easing: "easeOutQuint",
                duration: 750
            })
        }
    })
}
maskCreator(document.querySelector(".abm")), maskCreator(document.querySelector(".update"));
var icon = document.querySelector(".ion-ionic");
icon.style.fontSize = "15pt";
var jumbotron = document.querySelector(".jumbotron");
theTime.add({
    targets: jumbotron,
    opacity: [0, 1],
    duration: 400,
    easing: "easeOutSine"
});
var getAvatar = document.querySelector("circle"),
    getAvatarImg = document.querySelector(".avatar img");
getAvatarImg.style.opacity = "0", getAvatar.style.transformOrigin = "50% 50%", theTime.add({
    targets: getAvatar,
    rotate: 340,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1010,
    complete: function() {
        anime({
            delay: 120,
            targets: getAvatarImg,
            opacity: 1,
            duration: 600,
            easing: "easeOutSine"
        }), anime({
            delay: 450,
            targets: getAvatar,
            opacity: [1, 0],
            duration: 400,
            easing: "easeOutSine"
        })
    }
});
var getVerifyDiv = document.querySelector(".verify");
getVerifyDiv.style.transformOrigin = "50% 0%", getVerifyDiv.style.transform = "scaleY(0)", theTime.add({
    targets: getVerifyDiv,
    delay: 600,
    easing: "easeOutSine",
    opacity: [0, 1],
    scaleY: 1,
    duration: 200
});
var getFullName = document.querySelector(".name");

function des(e) {
    e.style.transformOrigin = "50% 100%", e.style.transform = "scaleY(0)", theTime.add({
        targets: e,
        easing: "easeInOutQuad",
        opacity: [0, 1],
        scaleY: 1,
        duration: 350,
        complete: function() {
            anime({
                targets: e,
                color: ["#20c997", "#4285f4"],
                easing: "easeOutSine",
                duration: 3e3
            })
        }
    })
}
charming(getFullName), getFullName.style.transformOrigin = "50% 50%", theTime.add({
    targets: ".name span",
    scaleY: [0, 1],
    translateY: [10, 0],
    translateX: [-30, 0],
    rotate: [12, 0],
    easing: "easeOutSine",
    delay: function(e, t) {
        return 15 * t
    },
    duration: 260
});
var getDescription = document.querySelector(".crush");

function fw400(e) {
    e.style.fontWeight = "400"
}
des(getDescription);
var getJobh4 = document.querySelector(".jobh4"),
    getContacth4 = document.querySelector(".contacth4");

function maskCreatorVer2(e) {
    e.classList.add("boxMask"), e.innerHTML = '<div class="text">' + e.innerHTML + "</div>", e.insertAdjacentHTML("beforeend", '<div class="mask"> <div class="mask1"></div> <svg id="Layer_1" class="mask2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.26 204"><defs><style>.cls-1{fill:#4285f4;}</style></defs><path class="cls-1" d="M2.12,18.93V188.05a17.44,17.44,0,0,0,17.44,17.44H300.19c16.61,0,23.82-21,10.69-31.22h0a17.44,17.44,0,0,1,0-27.56l22.75-17.65a17.45,17.45,0,0,0,.2-27.4L308.14,81.11a17.44,17.44,0,0,1-4-22.74L315.38,40.1a17.44,17.44,0,0,0-3.44-22.3L298,5.75a17.41,17.41,0,0,0-11.42-4.26h-267A17.44,17.44,0,0,0,2.12,18.93Z" transform="translate(-2.12 -1.49)"/></svg> </div>');
    var t = e.querySelector(".mask");
    t.style.transformOrigin = "100% 50%", t.style.transform = "scaleX(0)";
    var a = e.querySelector(".text");
    a.style.opacity = "0", theTime.add({
        targets: t,
        delay: 150,
        scaleX: 1,
        easing: "easeInOutQuint",
        duration: 600,
        complete: function() {
            a.style.opacity = "1", anime({
                targets: t,
                delay: 150,
                translateX: "-155%",
                easing: "easeOutQuint",
                duration: 750
            })
        }
    })
}

function scaleContent(e) {
    e.style.transformOrigin = "100% 50%", theTime.add({
        targets: e,
        easing: "easeInOutQuint",
        scaleX: [0, 1],
        delay: 10,
        duration: 300
    })
}

function monitor(e) {
    var t = scrollMonitor.create(e);
    t.enterViewport(function() {
        e.style.transformOrigin = "50% 0%", e.style.transform = "scaleY(0)", e.style.opacity = "0", anime({
            targets: e,
            easing: "easeInOutQuint",
            scaleY: 1,
            opacity: 1,
            delay: 100,
            duration: 450
        }), t.destroy()
    })
}
fw400(getJobh4), des(getJobh4), fw400(getContacth4), des(getContacth4), scaleContent(document.querySelector("hr")), scaleContent(document.querySelector(".job_content")), scaleContent(document.querySelector(".contact_content")), monitor(document.querySelector(".ctcme")), monitor(document.querySelector(".ms")), monitor(document.querySelector(".planet"));
var vichy = document.querySelector(".motivation");

function maskImgMonitor(e) {
    e.innerHTML = '<div class="content">' + e.innerHTML + "</div>", e.classList.add("boxMask"), e.insertAdjacentHTML("beforeend", '<div class="mask"><div class="maskImage"></div></div>');
    var t = e.querySelector(".mask");
    t.style.transformOrigin = "100% 50%", t.style.transform = "scaleX(0)";
    var a = e.querySelector("img");
    a.style.opacity = "0";
    var n = scrollMonitor.create(e);
    n.enterViewport(function() {
        anime({
            targets: t,
            delay: 210,
            scaleX: 1,
            easing: "easeInOutQuint",
            duration: 400,
            complete: function() {
                a.style.opacity = "1", anime({
                    targets: t,
                    delay: 50,
                    translateX: "-155%",
                    easing: "easeInOutQuint",
                    duration: 450
                }), n.destroy()
            }
        })
    })
}
vichy.innerHTML = "Motivation-" + vichy.innerHTML, maskImgMonitor(document.querySelector(".img1")), maskImgMonitor(document.querySelector(".img2"));
var planet = document.querySelector(".planet");
planet.addEventListener("mouseenter", function() {
    anime({
        targets: planet,
        rotate: [0, 30, -30, 0],
        duration: 800,
        color: ["#232323", "#fbbc05"],
        easing: "easeInOutSine"
    })
}), planet.addEventListener("mouseleave", function() {
    anime({
        targets: planet,
        rotate: [0, 10, -10, 0],
        duration: 810,
        color: ["#fbbc05", "#232323"],
        easing: "easeInOutSine"
    })
}), monitor(document.querySelector(".ulong")), monitor(document.querySelector(".ulang"));