AOS.init();
let changed = false;
$(document).ready(function() {
  let fakeNavPadBot = parseInt(
    $(".fake-nav")
      .css("padding-bottom")
      .split("px")[0]
  );
  let fakeNavPadTop = parseInt(
    $(".fake-nav")
      .css("padding-top")
      .split("px")[0]
  );
  let bodyWidth = parseInt($("body").width());
  let contentWidth = parseInt($(".content").width());
  $(".follow").css({
    width:
      bodyWidth -
      contentWidth -
      $(".content")
        .css("margin-left")
        .split("px")[0]
  });
  $(".bottom-plank").css({
    height:
      ($("body").height() -
        ($(".fake-nav").height() +
          $(".content").height() +
          fakeNavPadBot +
          fakeNavPadTop)) *
      -1
  });
  $("#sidebarCollapse, .overlay").on("click", function() {
    changed = !changed;
    $(".overlay").toggleClass("active");
    $("#sidebar").toggleClass("active");
    changed
      ? $(".fake-nav").animate(
          { paddingLeft: "130px", paddingTop: "40px" },
          { duration: 200 }
        )
      : $(".fake-nav").animate(
          { paddingLeft: "60px", paddingTop: "14px" },
          { duration: 1000 }
        );
    changed
      ? $(".content").animate({ height: "70vh" }, { duration: 200 })
      : $(".content").animate({ height: "87vh" }, { duration: 200 });
    $(".top-bar").toggleClass("active");
    changed
      ? $("body, html").css({ height: "100%", overflow: "hidden" })
      : $("body, html").css({ height: "auto", overflow: "auto" });
    changed
      ? $(".middle-bar").animate({ opacity: "0" }, { duration: 300 })
      : $(".middle-bar").animate({ opacity: "1" }, { duration: 300 });
    $(".bottom-bar").toggleClass("active");
    $(".follow").css({
      width:
        bodyWidth -
        contentWidth -
        $(".content")
          .css("margin-left")
          .split("px")[0]
    });
  });
});
