# sivjs
Simple image viewer, written in javascript and css.

As the name implies, it is very simple: put images in a div with an id, include
the script and stylesheet, and pass the id and whatever ratio you would like
the viewer to have (e.g. `16/9`) to the init function. The viewer will expand
to 100% width.

```html
<link rel="stylesheet" href="sivjs.css">

<div id="container">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
</div>

<script src="siv.js"></script>
<script>
  init('container', 16/9);
</script>
```
