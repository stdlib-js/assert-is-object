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

# isObject

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an object.



<section class="usage">

## Usage

```javascript
import isObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-object-like`][@stdlib/assert/is-object-like]</span><span class="delimiter">: </span><span class="description">test if a value is object-like.</span>
-   <span class="package-name">[`@stdlib/assert/is-plain-object`][@stdlib/assert/is-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-object.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-object

[test-image]: https://github.com/stdlib-js/assert-is-object/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-object/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-object/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-object?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-object.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-object/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-object/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-object/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-object/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-object/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-object/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-object-like]: https://github.com/stdlib-js/assert-is-object-like/tree/esm

[@stdlib/assert/is-plain-object]: https://github.com/stdlib-js/assert-is-plain-object/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
