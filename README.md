Run `node build.js` (node v16 with ESM support)

```
node build
assets by status 1.98 KiB [cached] 1 asset
./app.js 39 bytes [not cacheable] [built] [code generated] [1 error]

ERROR in ./app.js
Module build failed (from ./loader.js):
Error [ERR_REQUIRE_ESM]: require() of ES Module ..\webpack-esm-loader-issue\loader.js from D:\Code\webpack-esm-loader-issue\node_modules\loader-runner\lib\loadLoader.js not supported.
Instead change the require of loader.js in ..\webpack-esm-loader-issue\node_modules\loader-runner\lib\loadLoader.js to a dynamic import() which is available in all CommonJS modules.
```