<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isObject

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an object.



<section class="usage">

## Usage

```javascript
import isObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/assert-is-object/tags). For example,

```javascript
import isObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.0-deno/mod.js';
```

#### isObject( value )

Tests if a `value` is an `object`.

```javascript
var bool = isObject( {} );
// returns true

bool = isObject( true );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `false` if provided an `array` or `null`.

    ```javascript
    var bool = isObject( [] );
    // returns false

    bool = isObject( null );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import isObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@deno/mod.js';

var bool = isObject( {} );
// returns true

bool = isObject( new Date() );
// returns true

bool = isObject( /.*/ );
// returns true

bool = isObject( null );
// returns false

bool = isObject( [] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-object-like`][@stdlib/assert/is-object-like]</span><span class="delimiter">: </span><span class="description">test if a value is object-like.</span>
-   <span class="package-name">[`@stdlib/assert-is-plain-object`][@stdlib/assert/is-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-object.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-object

[test-image]: https://github.com/stdlib-js/assert-is-object/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/assert-is-object/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-object/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-object?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-object.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-object/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-object/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-object/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-object/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-object/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-object/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-object/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-object/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-object/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-object-like]: https://github.com/stdlib-js/assert-is-object-like/tree/deno

[@stdlib/assert/is-plain-object]: https://github.com/stdlib-js/assert-is-plain-object/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
