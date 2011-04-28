# jQuery cLabel

Compact &lt;label&gt; plugin. 
Converts all `<label>`s of selected text `<input>`s into the `<input value="label_text">`. 
It's less than 1kb in size (~670 bytes minified) and was created to bring more comfort to users.

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

## License

Dual licensed under the MIT and GPL licenses.

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)  

[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)
