System.config({
  "defaultJSExtensions": true,
  "transpiler": "traceur",
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  "buildCSS": false
});

System.config({
  "map": {
    "angular": "npm:angular@1.3.17",
    "angular-animate": "npm:angular-animate@1.3.17",
    "angular-aria": "npm:angular-aria@1.3.17",
    "angular-bootstrap": "github:angular-ui/bootstrap-bower@0.13.2",
    "angular-file-upload": "npm:ng-file-upload@5.0.9",
    "angular-gridster": "npm:angular-gridster@0.13.3",
    "angular-growl-v2": "npm:angular-growl-v2@0.7.5",
    "angular-i18n": "npm:angular-i18n@1.3.17",
    "angular-loading-bar": "npm:angular-loading-bar@0.8.0",
    "angular-mocks": "npm:angular-mocks@1.3.17",
    "angular-moment": "npm:angular-moment@0.10.1",
    "angular-sanitize": "npm:angular-sanitize@1.3.17",
    "angular-translate": "npm:angular-translate@2.7.2",
    "angular-ui-router": "npm:angular-ui-router@0.2.15",
    "angular-ui-utils/highlight": "npm:angular-ui-utils@0.1.1",
    "fetch": "npm:whatwg-fetch@0.9.0",
    "lodash": "github:lodash/lodash@3.9.3",
    "moment": "npm:moment@2.10.3",
    "restangular": "npm:restangular@1.5.1",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.90",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90",
    "github:angular-ui/bootstrap-bower@0.13.2": {
      "angular": "npm:angular@1.3.17"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:angular-animate@1.3.17": {
      "angular": "npm:angular@1.3.17"
    },
    "npm:angular-aria@1.3.17": {
      "angular": "npm:angular@1.3.17"
    },
    "npm:angular-gridster@0.13.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular-growl-v2@0.7.5": {
      "angular": "npm:angular@1.3.17"
    },
    "npm:angular-i18n@1.3.17": {
      "angular": "npm:angular@1.3.17"
    },
    "npm:angular-loading-bar@0.8.0": {
      "angular": "npm:angular@1.3.17"
    },
    "npm:angular-moment@0.10.1": {
      "moment": "npm:moment@2.10.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular-sanitize@1.3.17": {
      "angular": "npm:angular@1.3.17"
    },
    "npm:angular-translate@2.7.2": {
      "angular": "npm:angular@1.3.17",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular-ui-router@0.2.15": {
      "angular": "npm:angular@1.3.17",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular-ui-utils@0.1.1": {
      "angular": "npm:angular@1.3.17",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular@1.3.17": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:moment@2.10.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ng-file-upload@5.0.9": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:restangular@1.5.1": {
      "angular": "npm:angular@1.3.17",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

