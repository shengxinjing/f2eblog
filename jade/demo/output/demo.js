app.directive('demo', function () {
    return {
        template: "<div class=\"demo\"><input type=\"text\"/></div><p class=\"alert\">demo</p>",
        scope: {},
        link: function postLink(scope, iElement, iAttrs) {

        }
    };
})
