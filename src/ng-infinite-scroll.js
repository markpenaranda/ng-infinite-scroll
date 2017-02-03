var a = angular.module('ngInfiniteScroll', [])

a.directive('infiniteScroll', infiniteScroll);

infiniteScroll.$inject = [];

function infiniteScroll () {
    return {
        restrict : 'EA',
        link     : function(scope, element, attribute) {
             var raw = element[0];
            // Check if bottom is checkIfReachedBottom
            function checkIfReachedBottom() {
                return raw.scrollTop + raw.offsetHeight > raw.scrollHeight;
            } 

            function runPaginateFunction() {
                if(checkIfReachedBottom()) {
                    setTimeout(scope.paginateFunction(), 500);
                }
            }
            element.bind('scroll', runPaginateFunction);
        },
        scope    : {
            paginateFunction : '=onScroll'
        } 
    }
}
