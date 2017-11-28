# jquery.contents-outline

## Get started

### Install
```
$ yarn add jquery.contents-outline
```

### Load scripts

```
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="/node_modules/jquery.contents-outline/dist/jquery.contents-outline.min.js"></script>
```

### Setting

```
<div class="index" id="index-1">
  <script>
  jQuery(function($) {
    $('#index-1').contentsOutline({
      headings : $('h2, h3, h4, h5, h6'), // Optional
      moveToBefore1stHeading: true        // Optional
    });
  });
  </script>
  <div class="contents-outline"></div>
</div>
```

## License
MIT
