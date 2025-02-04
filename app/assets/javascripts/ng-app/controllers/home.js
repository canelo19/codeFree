    app.controller('HomeCtrl',['$scope','$location', function ($scope, $location) {
        $scope.showSearch = $location.path() != '/coders';
    }]);

   app.controller('AceCtrl', function ($scope) {
	// select
	  // $scope.modes = ['HTML'];
	  // $scope.mode = $scope.modes[0];
	 

	$scope.aceLoaded = function(_editor) {
     // mode: $scope.mode.toLowerCase(),
    $scope.aceSession = _editor.getSession();
     _editor.setTheme("ace/theme/monokai");
     _editor.getSession().setMode("ace/mode/html");

      // options
           _editor.setOptions({
           	showGutter: true,
           	showPrintMargin: false,
           	fontSize: '14px',
           	fontFamily: 'menlo'
           });
       //     // HACK to have the ace instance in the scope...
	      // $scope.modeChanged = function () {
	      //   _editor.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
	      // };
    };

	$scope.aceChanged = function () {
	    $scope.aceDocumentValue = $scope.aceSession.getDocument().getValue();
	};
});
