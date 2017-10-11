angular.module("commonModule")
.directive('appPie', function () {
    return {
        template : `
        <footer>
		    <p>{{author}} - Torre Caja Badajoz Siglo XXI 2017</p>
	    </footer>        
        `,
        restrict : 'AE',
        scope : {
            author : '@autor'
        }
    }
})