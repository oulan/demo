//
// modified from lunhuan.js
//
//
//
//
//

$.fn.Rolling = function(options) {
    // static variable to count
    // 这些静态变量是用来替换原来计数内容的，就是下面这段代码
    // var t = n = 0,
    //     count = $("#play_list a").size();
    //
    var n = 0;
    var count = this.children().size();

    // 原来我们无法指定缺省值，现在很方便
    var _options = $.extend({}, {time: 1000, fadeOut: 500, fadeIn: 500}, options);

    // 原来很方便，因为有filter
    //    $("#play_list a:not(:first-child)").hide();
    // 现在我用了两行，不难理解，但是存在溢出问题，应该有更好的替代办法
    this.children().hide();
    this.children().eq(0).show();

    // 原来借用文本内容的事件就不需要了
    this.children().click(function() {

      $this = $(this);
      n = $this.index();
      // 这代码跟原来没区别
      $this.parent().children().filter(":visible")
        .fadeOut(_options.fadeOut)
        .parent().children().eq(n)
        .fadeIn(_options.fadeIn);
    });

    // 定义定时器事件
    this.everyTime(_options.time, this.selector, function() {
      n = n >= (count -1)? 0 : ++n;
      $this = $(this);
      $this.children().eq(n).trigger("click");
    });
  };
