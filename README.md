cardy
=====
This projects contains css and javascript files to display cards on your html pages. You can use css class directly or use shortcuts that will be replaced by javascripts.

Cards are displayed without usage of image. No extra load to display your content, only CSS.

## Usage
How to display an ace of spades ?

```html
<link rel="stylesheet" href="css/cardy.css" />
<!-- Display card -->
<span class="cardy club">A</span>
```
Usage is very simple. First tell you want to view a card (here A for Ace) than complete with your color as css class.

You can also display four colors deck.
``` html
<link rel="stylesheet" href="css/cardy.css" />
<!-- Display cards -->
<span class="cardy spade four-color">A</span>
<span class="cardy club four-color">A</span>
<span class="cardy heart four-color">A</span>
<span class="cardy diamond four-color">A</span>     
```
##Javascript
You can also display your card with javascript. All you need is to type a simple code.

You need jQuery loaded before cardy.
```html
<!-- Display Ace of spade and Ace of heart -->
[As] [Ah]
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>   
<script src="js/cardy.js"></script>   
```

[Exemple](http://yoye.github.com/cardy/#exemple)