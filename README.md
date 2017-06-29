jQuerySmartEllipsis
===================
https://github.com/nothrem/jQuerySmartEllipsis

jQuery plugin to add ellipsis ('…', '...') to the text while preserving CSS properties (not) to wrap words and break lines.

Installation
-----

```> bower install jQuerySmartEllipsis```

Or just download or fork the repository at https://github.com/nothrem/jQuerySmartEllipsis .

Usage
-----

Adding ellipsis...

	<div style="height:2em;">Some text that does not fit.</div>
	<div style="height:1em; white-space: nowrap;">Some text that does not fit.</div>
	<div style="height:2em; word-wrap: break-words;">Some text that does not fit.</div>
	<div style="height:1em; white-space: nowrap; word-wrap: break-words;">Some text that does not fit.</div>
	<script>$('div').ellipsis();</script>

... will output:

    |-------------|
    | Some text   |   default white space will wrap words to new line
    | that does…  |   default word wrap will not break word and will add ellipsis into spaces
    |-------------|

    |-------------|
    | Some text…  |   nowrap white space will keep text in one line
    |-------------|

    |-------------|
    | Some text   |   default white space will wrap words to new line
    | that does n…|   break words will add ellipsis to the end regardless of spaces
    |-------------|

    |-------------|
    | Some text t…|   combination of previous - equals to original CSS3 text-overflow:ellipsis
    |-------------|

Automatic function...

	<div style="height:2em;" class="ellipsis">Some text that does not fit.</div>

... will output:

    |-------------|
    | Some text   |   Any element with class 'ellipsis' will be
    | that does…  |   modified automatically when page is loaded
    |-------------|

Adding tooltip with original text...

	<div style="height:2em;">Some text that does not fit.</div>
	<script>$('div').ellipsis(true);</script>

... will output:

    |-------------|
    | Some te|----------------------------|   Element will have tooltip with original
    | that do|Some text that does not fit.|   text if hovered by mouse, stylus, etc.
    |--------|----------------------------|

Updating text...

    <script>$('div').text('Another text that does not fit.').ellipsis();</script>

... will add ellipsis to the new text.

    <script>
        $('div').addClass('ellipsis');
        $('div').text('Another text that does not fit.');
        $('div').text('Yet Another text that does not fit.');
        $('div').text('Final text that does not fit.');
        $.ellipsis();
    </script>

Calling method ```$.ellipsis()``` will update ellipsis on all elements that has ```ellipsis```
class (this class is added to any element that the method ```ellipsis()``` was called
on so it work on these elements as well.)

Ellipsis are also automatically updated when screen resize or rotation is detected.

License
-------

Free for any usage.

When modified or forked, please keep the URL for original GitHub repository.

When using in custom-minified version, please make sure file header remains in the file.

Code based on StackOverflow forum: http://stackoverflow.com/questions/536814/insert-ellipsis-into-html-tag-if-content-too-wide
Code improved for better performance and extended by Nothrem Sinsky: https://github.com/nothrem
