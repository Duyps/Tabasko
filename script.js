gsap.registerPlugin(ScrollTrigger);

gsap.from(".context", {
    opacity: 0,
    duration: 7
});

gsap.from(" span", {
    duration: 1.5,
    y: 50, // Thời gian mỗi chữ cái thực hiện hoạt ảnh
    opacity: 0, // Bắt đầu với độ mờ
    rotateY: 90, // Xoay từ 90 độ (ngang)
    rotateX: -30,
    stagger: 0.1, // Mỗi chữ cái xuất hiện cách nhau 0.2s
    ease: "power2.out", // Độ mượt của hoạt ảnh
});
gsap.to('.one', {
    y: -500,
    scrollTrigger: {
        trigger: '.one',
        scrub: true,
        start : "top 80%",
        end: "top 0"
    }
});
gsap.to('.two', {
    y: -400,
    scrollTrigger: {
        trigger: '.two',
        scrub: true,
        start : "top 80%",
        end: "top 0"
    }
});
gsap.to('.three', {
    y: -800,
    scrollTrigger: {
        trigger: '.three',
        scrub: true,
        start : "top 100%",
        end: "top 0"
    }
});
gsap.to('.five', { 
    scrollTrigger: {
        trigger: '.five',
        scrub: true,
        start : "top 80%",
        end: "top 0"
    }
});
gsap.to('.introduce', {
    opacity: 0,
    scale: 0.4,
    scrollTrigger: {
        scrub: 0,

    }
});

gsap.from('.service-h2', {
    opacity: 0,
    y: 50,
    scale: 0.6,
    scrollTrigger: {
        trigger: '.service-h2',
        start: "top 100%",
        end: "top 80%",
    }
});
gsap.to('.top',{
    x: -200,
    scrollTrigger: {
        trigger: '.top',
        scrub: true,
        start: "top 100%",
        end: "top 0"
    }
});
gsap.to('.bottom', {
    x: 200,
    scrollTrigger: {
        trigger: '.bottom',
        scrub: true,
        start: "top 100%",
        end: "top 0"
    }
})