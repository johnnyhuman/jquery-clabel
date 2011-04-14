# jQuery cLabel - Compact &lt;label&gt; plugin

## About

Converts all selected `<label>` tags into `<input value="LABEL_TEXT">`.

## Demo

Plugin demo: [JQuery cLabel](http://lab.aam.me/jquery-clabel/#demo)

## How to use plugin

Make sure that you have jQuery included before cLabel plugin.

*HTML Code:*

    <label for="name" class="clabel">Name</label>
    <input type="text" id="name" name="name" value="" />


*JS Code:*

    $(document).ready(function() {
        $(".clabel").clabel();
    });

Enjoy!

## License

Dual licensed under the MIT and GPL licenses.

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)  

[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)
