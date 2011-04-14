/**
 * jQuery.clabel - Compact label. Converts all selected <label>LABEL_TEXT</label>
 * tags into <input value="LABEL_TEXT">.
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @author Johnny Human <http://lab.aam.me/jquery-clabel/>
 **/

(function($){
    $.fn.clabel = function(options) {  
        var defaults = {
            class:       "clabel-set",
            class_focus: ""
        };

        var options = $.extend(defaults, options);  

        return this.each(function() {
            var label = $('label[for=' + $(this).attr('id') + ']').text();
            $('label[for=' + $(this).attr('id') + ']').remove();

            $(this).addClass(options.class);
            $(this).val(label);

            $($(this)).unbind().bind("blur focus", function() {
                if ($(this).hasClass(options.class)) {
                    $(this).val("");
                    $(this).removeClass(options.class);
                } else if ($(this).val() == "") {
                    $(this).addClass(options.class);
                    $(this).val(label);
                }
            });
        });
    };
})(jQuery);
