/** @type {import('stylelint').Config} */

export default {
  ignoreFiles: ["**/dist/**", "**/node_modules/**"],

  extends: [
    import.meta.resolve("stylelint-config-standard-scss"),
    import.meta.resolve("stylelint-config-recommended-vue"),
  ],

  rules: {
    "property-layout-mappings": "flow-relative",
    "value-keyword-layout-mappings": "flow-relative",
    "display-notation": "short",
    "font-weight-notation": "numeric",
    "declaration-no-important": true,
    "declaration-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "max-nesting-depth": [2, { ignore: ["pseudo-classes", "blockless-at-rules"] }],
    "selector-max-compound-selectors": 3,
    "selector-class-pattern": null,
    "selector-not-notation": null,
    "no-descending-specificity": null,

    "no-invalid-position-at-import-rule": null,
    "no-duplicate-selectors": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    "scss/selector-class-pattern": [
      "^[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
        message: "Class selector should follow the BEM convention (block__element--modifier)",
      },
    ],
  },
};
