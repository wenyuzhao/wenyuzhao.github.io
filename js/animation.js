var Animation = function ( callback ) {
	this.callback = callback;

	this.__delta_last__ = 0;
	this.__delta_delta__ = 0;

	this.__delta__ = function () {
		if ( this.__delta_last__ == 0 ) this.__delta_last__ = ( new Date() ).getTime();
		else {
			var last = this.__delta_last__;
			this.__delta_last__ = ( new Date() ).getTime();
			this.__delta_delta__ = this.__delta_last__ - last;
		}
	};

	this.delta = function() {
		return this.__delta_delta__;
	};

	this.run = function () {
		(function animate () {
			this.__delta__();
			if ( this.callback() )
				requestAnimationFrame( animate );
		})();
	};
};

/*
var i = 0;
( new Animation( function () {
	$('id').style.top = i++ + 'px';
	return true;
} ) ).run();
*/