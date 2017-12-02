// Directives

//var BASE_PATH = 'http://192.168.1.109:8087/';
//var BASE_PATH = 'http://localhost:8087/';
var SERVER_PATH = '/HotelApp/';

PortfolioApp.filter('sanatizeHtml', function() {         
	return function(html, emptyStrText) {
	    var txt = document.createElement("textarea");
	    txt.innerHTML = html;
	    return txt.value.replace(/<(?:.|\n)*?>/gm, '');
	}
});

/******************************			READ THIS BELOW 			**************************************************************************/
//YOU USE A DIRECTIVE BY typeing <div data-modal></div> or whatever you typed as the directive name
//THE onInit is a functon that you declare within the scope and can pass a value in from the html by typing 	data-onInit="500"		
//ALSO NOTE THAT Capital Letters and - and _ can mess up Directive so consider always doing lower CARE
/******************************			READ THIS BELOW 			**************************************************************************/
PortfolioApp.directive('modal', function() {
    return {
        restrict: 'A',
        scope: {
                 onInit: '=',
                 ngModel: '='},
        link: function(scope, element, attrs) {
            //if (typeof(scope.onInit) !== "undefined") { scope.onInit(this); }
            //THE element is automatticaly the div or element that you put your directive on by typing data-modal
            // YOU CHOOSE WHAT function you want to run in this choose you choose to run jquery-ui modal on it
            $(element).dialog({
	          	  height: 800,
	          	  width:800,
	          	  modal: true,
	          	  autoOpen: false,
	          	  open: function( event, ui ) {
	          	  	//THIS SNEAKY THING GOT RID OF THE CLOSE BUTTON AND title BAR ;) 
	          	      $('.ui-button-text').parent().hide();
	          	      $('.ui-dialog-titlebar').hide();
	          	    }
	        });
        }
    }
});



//THESE ARE actually prototypes and should possibly be in another file
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};