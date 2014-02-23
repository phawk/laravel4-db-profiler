# Laravel 4 JS DB Profiler

Simple DB profiler script that ouputs all queries to the bottom of your page.

## Usage

Put this code into your master.blade.php template just before the `</body>` tag.

```html
<div class="l4-db-profile"></div>
<script type="text/javascript" src="http://phawk.co.uk/javascripts/laravel4-db-profiler-22ff0b4f.js"></script>
<script type="text/javascript">
    new DbProfiler({{ json_encode(DB::getQueryLog()) }});
</script>
```

![Example](./example.png)

* * *

# MIT License

Copyright (C) 2013 Pete Hawkins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
