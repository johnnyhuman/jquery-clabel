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
            strip:       /[\:]/g,      /* use regex to strip a garbage */
            changeCase:  ""            /* l - lower case, u - upper case */
        };

        var options = $.extend(defaults, options);

        return this.each(function() {
        	var e_label = $('label[for=' + $(this).attr('id') + ']');
        	var label = e_label.text();

        	/* Detect is the control element are within the contents of the LABEL element */
        	if ($(this).parent().is("label")) {
        		e_label.after($(this));
        	}

        	e_label.remove();

        	/* Remove a garbage */
            if (options.strip != "") {
            	label = label.replace(options.strip, "");
            }

            /* Trim spaces */
            if (options.trim) {
            	label = $.trim(label);
            }

            /* Change case if needed */
            if (options.changeCase == "l") {
            	label = label.toLowerCase();
            }

            if (options.changeCase == "u") {
            	label = label.toUpperCase();
            }

            /* Add the "set" class and set the label text */
            $(this).addClass(options.setClass);
            $(this).val(label);

            /* Clear/set label text on focus */
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
