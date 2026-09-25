# Notices for the c2pa-verifier demo

This directory is a static build of a page that runs PHP in the browser.

## php-wasm (GPL-2.0-or-later)

`assets/php_8_3-*.wasm`, `assets/php_8_3-*.js` and parts of `assets/index-*.js`
are built from the npm packages `@php-wasm/web` 3.1.55, `@php-wasm/web-8-3`
3.1.55 and `@php-wasm/universal` 3.1.55, unmodified. They contain PHP 8.3.33
and OpenSSL 1.1.1t compiled to WebAssembly.

- Licence: GNU General Public License, version 2 or later; the full text is
  in [`licenses/php-wasm-GPL-2.0.txt`](licenses/php-wasm-GPL-2.0.txt).
- Source: <https://github.com/WordPress/wordpress-playground>, which builds
  these packages, and the packages themselves on npm.

The build keeps only PHP 8.3: the loader's references to other PHP versions
and to the `intl` extension are replaced by a module that throws if loaded.

## c2pa-verifier (MIT)

The PHP sources of [c2pa-verifier](https://github.com/provemark/c2pa-verifier)
0.2.3, exactly as tagged `v0.2.3`, are bundled into `assets/index-*.js`.

## Sample files and trust lists

- `samples/fixture-signed.jpg`, `samples/pixel-changed.jpg`,
  `samples/fixture-unsigned.jpg` and `trust/test-roots.settings.json` come
  from the c2pa-verifier repository (`tests/Fixtures/`). The test
  certificates in them are the public ones from `contentauth/c2patool`.
- `samples/google-20250919-pixel10-npld-picnic-table.jpg` is
  `File:NPLD 25 WW new picnic table (55032713763).jpg` from Wikimedia
  Commons, by the US Bureau of Land Management: a work of the US federal
  government, in the public domain. The file is unchanged.
- `trust/google-pixel.settings.json` holds two public intermediate
  certificates of Google's Pixel camera hierarchy, taken from that file.
