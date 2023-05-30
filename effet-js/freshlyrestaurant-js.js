$(document).ready(function () {
  $(".slick").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $("#All").click(function () {
    $("#All").css({
      "background-color": "var(--rouge)",
      "color": "#fff"
    });
    $("#meat").css({
      "background-color": "var(--beige)",
      "color": "#000"
    });
    $("#vegan").css({
      "background-color": "var(--beige)",
      "color": "#000"
    });
    $("#fish").css({
      "background-color": "var(--beige)",
      "color": "#000"
    });
  });
  $("#meat").click(function () {
    $("#meat").css({
      "background-color": "var(--rouge)",
      "color": "#fff"
    });
    $("#All").css({
      "background-color": "var(--beige)",
      "color": "#000"
    });
    $("#vegan").css({
      "background-color": "var(--beige)",
      "color": "#000"
    });
    $("#fish").css({
      "background-color": "var(--beige)",
      "color": "#000"
    });
  });
    $("#vegan").click(function () {
      $("#vegan").css({
        "background-color": "var(--rouge)",
        "color": "#fff"
      });
      $("#meat").css({
        "background-color": "var(--beige)",
        "color": "#000"
      });
      $("#All").css({
        "background-color": "var(--beige)",
        "color": "#000"
      });
      $("#fish").css({
        "background-color": "var(--beige)",
        "color": "#000"
      });
    });
    $("#fish").click(function () {
      $("#fish").css({
        "background-color": "var(--rouge)",
        "color": "#fff"
      });
      $("#meat").css({
        "background-color": "var(--beige)",
        "color": "#000"
      });
      $("#vegan").css({
        "background-color": "var(--beige)",
        "color": "#000"
      });
      $("#All").css({
        "background-color": "var(--beige)",
        "color": "#000"
      });
    });
    let mixer = mixitup(".search");
  });