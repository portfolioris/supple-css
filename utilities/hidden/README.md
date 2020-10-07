# Supple CSS | utilities.hidden

Hides an element completely from flow and screenreaders.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Use](#use)
* [Available classes](#available-classes)
* [Configurable variables](#configurable-variables)
* [Installation](#installation)
* [Testing](#testing)
* [Browser support](#browser-support)

## Use

```html
<button>
  This button has text that is
  <span class="u-hidden">totally hidden from flow, view and assistive technology</span>
</button>
```

### responsive modifiers
When you set breakpoints in `$in-breakpoint` you can use them like this:

```html
<button>
  This button has text that is
  <span class="u-hidden@from-lap">totally hidden from flow, view and assistive technology</span>
</button>
```

## Available classes

**On the `.u-hidden` block**

* `.u-hidden`: core visually hidden block
* `.u-hidden@[from|until]-[BREAKPOINT-NAME]`: applies hidden at the given breakpoint. (available in `$in-breakpoint` SCSS setting)

## Configurable variables

### SCSS variables

* `$in-breakpoint`: a list of breakpoints where `.u-hidden@[from|until]-[BREAKPOINT-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/hidden' with (
  $in-breakpoint: (lap, desk),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/hidden/variables' with (
  $in-breakpoint: (
    from: lap,
    until: lap desk,
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/hidden';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library:

* [npm](https://www.npmjs.com/package/@supple-kit/supple-css): `npm install @supple-kit/supple-css`
* Download: [zip](https://github.com/supple-kit/supple-css/releases/latest)


## Testing
Basic visual tests are in [test.html](./test.html).


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest chromium based)
* iOS (latest)
