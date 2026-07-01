# stylelint-config-sq11y

This config extends [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss) and [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue).

## Installation

```shell
pnpm install --save-dev stylelint-config-sq11y
```

## Usage

Set your `stylelint.config.mjs` config to:

```js
/** @type {import('stylelint').Config} */

export default {
  extends: ["stylelint-config-sq11y"],
};
```

### Linting Vue files in VS Code

If you want stylelint to always lint Vue files - find the `Stylelint › Lint Files: Glob` option and set it to `**/*.{css,scss,vue}`.

Otherwise, you can add this to the projects `.vscode/settings.json` file.

```json
{
  "stylelint.validate": ["css", "scss", "vue"]
}
```
