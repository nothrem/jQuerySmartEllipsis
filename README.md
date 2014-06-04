jQuerySmartEllipsis
===================
https://github.com/nothrem/jQuerySmartEllipsis

jQuery plugin to add ellipsis ('...') to the text while preserving CSS properties (not) to wrap words and break lines.

Usage
-----

	<div style="height:2em;">Some text that does not fit.</div>
	<div style="height:1em; white-space: nowrap;">Some text that does not fit.</div>
	<div style="height:2em; word-wrap: break-words;">Some text that does not fit.</div>
	<div style="height:1em; white-space: nowrap; word-wrap: break-words;">Some text that does not fit.</div>
	<script>$('div').ellipsis();</script>

Will output:
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


	<div style="height:2em;" class="ellipsis">Some text that does not fit.</div>

Will output:
|-------------|
| Some text   |   Any element with class 'ellipsis' will be
| that does…  |   default word wrap will not break word and will add ellipsis into spaces
|-------------|

	<div style="height:2em;">Some text that does not fit.</div>
	<script>$('div').ellipsis(true);</script>

Will output:
|-------------|
| Some te|----------------------------|   Element will have tooltip with original
| that do|Some text that does not fit.|   text if hovered by mouse, stylus, etc.
|--------|----------------------------|



License
-------

Free for any usage.

If modified or forked, please keep the URL for original GitHub repository.

If using in custom-minified version, please make sure file header remains in the file.

Code based on StackOverflow forum: http://stackoverflow.com/questions/536814/insert-ellipsis-into-html-tag-if-content-too-wide
Code improved for better performance and extended by Nothrem Sinsky: https://github.com/nothrem
