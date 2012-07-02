!function($) {
  $('.cardify').each(function(i, el) {
    var $this = $(this);
    var $el = $(el);
    var replace = '<span class="cardy #color$2#">$1</span>';
    
    if ($this.hasClass('four-color')) {
      replace = '<span class="cardy #color$2# four-color">$1</span>';
    }
    console.log($el.html().match(/\[([123456789TJQKA]{1})([shdc]{1})\]/g));
    var html = $el.html().replace(new RegExp(/\[([123456789TJQKA])([shdc])\]/g), replace);
    html = html.replace(new RegExp(/\#colors\#/g), 'spade');
    html = html.replace(new RegExp(/\#colorh\#/g), 'heart');
    html = html.replace(new RegExp(/\#colord\#/g), 'diamond');
    html = html.replace(new RegExp(/\#colorc\#/g), 'club');
    
    $el.html(html);
  });
}(window.jQuery);