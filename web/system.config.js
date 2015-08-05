System.config({
  "defaultJSExtensions": true,
  "transpiler": "traceur",
  "paths": {
    "github:*": "jspm_packages/github/*"
  },
  "buildCSS": false
});

System.config({
  "map": {
    "lodash": "github:lodash/lodash@3.9.3",
    "traceur": "github:jmcriffey/bower-traceur@0.0.90",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90"
  }
});

