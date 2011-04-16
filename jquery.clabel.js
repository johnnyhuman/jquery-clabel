/**
 * jQuery cLabel plugin
 *
 * Converts all selected <label>LABEL_TEXT</label> tags
 * into <input value="LABEL_TEXT">
 *
 * @author Johnny Human <https://github.com/johnnyhuman>
 * @license Dual licensed under the MIT and GPL licenses
 *
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 **/

(function($){
    $.fn.clabel = function(options) {
        var defaults = {
            setClass:    "clabel-set", /* class for the element with a label */
            trim: 		 true,         /* trim spaces */
            strip:       /[\:]/g,      /* use regex to trim garbage */
            changeCase:  ""           /* l - lower case, u - upper case */
        };

        var options = $.extend(defaults, options);

        return this.each(function() {
            var label = $('label[for=' + $(this).attr('id') + ']').text();
            $('label[for=' + $(this).attr('id') + ']').remove();

            if (options.strip != "") {
            	label = label.replace(options.strip, "");
            }

            if (options.trim) {
            	label = $.trim(label);
            }

            if (options.changeCase == "l") {
            	label = label.toLowerCase();
            }

            if (options.changeCase == "u") {
            	label = label.toUpperCase();
            }

            $(this).addClass(options.setClass);
            $(this).val(label);

            $($(this)).unbind().bind("blur focus", function() {
                if ($(this).hasClass(options.setClass)) {
                    $(this).removeClass(options.setClass).val("");
                } else if ($(this).val() == "") {
                    $(this).addClass(options.setClass).val(label);
                }
            });
        });
    };
})(jQuery);
