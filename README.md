# jQuery cLabel

Compact &lt;label&gt; plugin.
Converts all selected `<label>` tags into `<input value="LABEL_TEXT">`

## Demo

Plugin demo: [JQuery cLabel](http://lab.aam.me/jquery/clabel/#demo)

## How to use plugin

Make sure that you have jQuery included before cLabel plugin.

*HTML Code:*

    <label for="name">Name</label>
    <input type="text" id="name" name="name" class="clabel" value="" />


*JS Code:*

    $(document).ready(function() {
        $(".clabel").clabel();
    });

Enjoy!

## Known issues

- Doesn't work when the control elements are within the contents of the LABEL element

## License

Dual licensed under the MIT and GPL licenses.

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)  

[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)
