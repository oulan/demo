$.fn.Rolling = function(options) {
    var n = 0;
    var count = this.children().size();

    var _options = $.extend({}, {time: 1000, fadeOut: 500, fadeIn: 500}, options);

    this.children().hide();
    this.children().eq(0).show();

    this.children().click(function() {

      $this = $(this);
      n = $this.index();
      $this.parent().children().filter(":visible")
        .fadeOut(_options.fadeOut)
        .parent().children().eq(n)
        .fadeIn(_options.fadeIn);
    });

    this.everyTime(_options.time, this.selector, function() {
      n = n >= (count -1)? 0 : ++n;
      $this = $(this);
      $this.children().eq(n).trigger("click");
    });
  };
