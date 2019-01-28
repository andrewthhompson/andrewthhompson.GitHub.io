function runBarba() {
	var Unicef = Barba.BaseView.extend({
	  namespace: 'unicef',
	  onEnter: function() {
		  $(document).scrollTop(0);
			console.log('scroll position: ' + $('body').scrollTop);

			var photos = ['img/unicef1.png', 'img/unicef2.png', 'img/unicef3.png', 'img/unicef4.png'];

			var mySiema = new Siema({
				selector: '.portfolioSiema1',
				duration: 1200,
				perPage: 3,
				easing: "cubic-bezier(0.19, 1, 0.22, 1)",
				loop: true
			});

			$(".bigTitle").center({against: ".headerImage"});

			var logoSize = $(".bigTitle").css('height');

			$(".homeLogo").css('height', logoSize).css('width', logoSize).center({against: ".headerImage"}).css('left', '10%');

			$(".homeLogo").on({
				mouseenter: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1.2,
						loop: false,
						easing: 'easeOutExpo',
						begin: function() {
							console.log("dipshit");
						}
					});
				},
				mouseleave: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1,
						loop: false,
						easing: 'easeOutExpo'
					});
				}
			});
	  },
	  onEnterCompleted: function() {
		  // The Transition has just finished.
	  },
	  onLeave: function() {
		  // A new Transition toward a new page has just started.
	  },
	  onLeaveCompleted: function() {
		  // The Container has just been removed from the DOM.
	  }
	});

	var Cas = Barba.BaseView.extend({
	  namespace: 'unicef',
	  onEnter: function() {
		  $(document).scrollTop(0);
			console.log('scroll position: ' + $('body').scrollTop);

			var photos = ['img/unicef1.png', 'img/unicef2.png', 'img/unicef3.png', 'img/unicef4.png'];

			var mySiema = new Siema({
				selector: '.portfolioSiema1',
				duration: 1200,
				perPage: 3,
				easing: "cubic-bezier(0.19, 1, 0.22, 1)",
				loop: true
			});

			$(".bigTitle").center({against: ".headerImage"});

			var logoSize = $(".bigTitle").css('height');

			$(".homeLogo").css('height', logoSize).css('width', logoSize).center({against: ".headerImage"}).css('left', '10%');

			$(".homeLogo").on({
				mouseenter: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1.2,
						loop: false,
						easing: 'easeOutExpo',
						begin: function() {
							console.log("dipshit");
						}
					});
				},
				mouseleave: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1,
						loop: false,
						easing: 'easeOutExpo'
					});
				}
			});
	  },
	  onEnterCompleted: function() {
		  // The Transition has just finished.
	  },
	  onLeave: function() {
		  // A new Transition toward a new page has just started.
	  },
	  onLeaveCompleted: function() {
		  // The Container has just been removed from the DOM.
	  }
	});
	
	var Moveout = Barba.BaseView.extend({
	  namespace: 'unicef',
	  onEnter: function() {
		  $(document).scrollTop(0);
			console.log('scroll position: ' + $('body').scrollTop);

			var photos = ['img/unicef1.png', 'img/unicef2.png', 'img/unicef3.png', 'img/unicef4.png'];

			var mySiema = new Siema({
				selector: '.portfolioSiema1',
				duration: 1200,
				perPage: 3,
				easing: "cubic-bezier(0.19, 1, 0.22, 1)",
				loop: true
			});

			$(".bigTitle").center({against: ".headerImage"});

			var logoSize = $(".bigTitle").css('height');

			$(".homeLogo").css('height', logoSize).css('width', logoSize).center({against: ".headerImage"}).css('left', '10%');

			$(".homeLogo").on({
				mouseenter: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1.2,
						loop: false,
						easing: 'easeOutExpo',
						begin: function() {
							console.log("dipshit");
						}
					});
				},
				mouseleave: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1,
						loop: false,
						easing: 'easeOutExpo'
					});
				}
			});
	  },
	  onEnterCompleted: function() {
		  // The Transition has just finished.
	  },
	  onLeave: function() {
		  // A new Transition toward a new page has just started.
	  },
	  onLeaveCompleted: function() {
		  // The Container has just been removed from the DOM.
	  }
	});
	
	var Os = Barba.BaseView.extend({
	  namespace: 'unicef',
	  onEnter: function() {
		  $(document).scrollTop(0);
			console.log('scroll position: ' + $('body').scrollTop);

			var photos = ['img/unicef1.png', 'img/unicef2.png', 'img/unicef3.png', 'img/unicef4.png'];

			var mySiema = new Siema({
				selector: '.portfolioSiema1',
				duration: 1200,
				perPage: 3,
				easing: "cubic-bezier(0.19, 1, 0.22, 1)",
				loop: true
			});

			$(".bigTitle").center({against: ".headerImage"});

			var logoSize = $(".bigTitle").css('height');

			$(".homeLogo").css('height', logoSize).css('width', logoSize).center({against: ".headerImage"}).css('left', '10%');

			$(".homeLogo").on({
				mouseenter: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1.2,
						loop: false,
						easing: 'easeOutExpo',
						begin: function() {
							console.log("dipshit");
						}
					});
				},
				mouseleave: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1,
						loop: false,
						easing: 'easeOutExpo'
					});
				}
			});
	  },
	  onEnterCompleted: function() {
		  // The Transition has just finished.
	  },
	  onLeave: function() {
		  // A new Transition toward a new page has just started.
	  },
	  onLeaveCompleted: function() {
		  // The Container has just been removed from the DOM.
	  }
	});
	
	var Pangea = Barba.BaseView.extend({
	  namespace: 'unicef',
	  onEnter: function() {
		  $(document).scrollTop(0);
			console.log('scroll position: ' + $('body').scrollTop);

			var photos = ['img/unicef1.png', 'img/unicef2.png', 'img/unicef3.png', 'img/unicef4.png'];

			var mySiema = new Siema({
				selector: '.portfolioSiema1',
				duration: 1200,
				perPage: 3,
				easing: "cubic-bezier(0.19, 1, 0.22, 1)",
				loop: true
			});

			$(".bigTitle").center({against: ".headerImage"});

			var logoSize = $(".bigTitle").css('height');

			$(".homeLogo").css('height', logoSize).css('width', logoSize).center({against: ".headerImage"}).css('left', '10%');

			$(".homeLogo").on({
				mouseenter: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1.2,
						loop: false,
						easing: 'easeOutExpo',
						begin: function() {
							console.log("dipshit");
						}
					});
				},
				mouseleave: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1,
						loop: false,
						easing: 'easeOutExpo'
					});
				}
			});
	  },
	  onEnterCompleted: function() {
		  // The Transition has just finished.
	  },
	  onLeave: function() {
		  // A new Transition toward a new page has just started.
	  },
	  onLeaveCompleted: function() {
		  // The Container has just been removed from the DOM.
	  }
	});
	
	var Bhddh = Barba.BaseView.extend({
	  namespace: 'unicef',
	  onEnter: function() {
		  $(document).scrollTop(0);
			console.log('scroll position: ' + $('body').scrollTop);

			var photos = ['img/unicef1.png', 'img/unicef2.png', 'img/unicef3.png', 'img/unicef4.png'];

			var mySiema = new Siema({
				selector: '.portfolioSiema1',
				duration: 1200,
				perPage: 3,
				easing: "cubic-bezier(0.19, 1, 0.22, 1)",
				loop: true
			});

			$(".bigTitle").center({against: ".headerImage"});

			var logoSize = $(".bigTitle").css('height');

			$(".homeLogo").css('height', logoSize).css('width', logoSize).center({against: ".headerImage"}).css('left', '10%');

			$(".homeLogo").on({
				mouseenter: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1.2,
						loop: false,
						easing: 'easeOutExpo',
						begin: function() {
							console.log("dipshit");
						}
					});
				},
				mouseleave: function () {
					anime({
						targets: '.homeLogo',
						duration: 600,
						scale: 1,
						loop: false,
						easing: 'easeOutExpo'
					});
				}
			});
	  },
	  onEnterCompleted: function() {
		  // The Transition has just finished.
	  },
	  onLeave: function() {
		  // A new Transition toward a new page has just started.
	  },
	  onLeaveCompleted: function() {
		  // The Container has just been removed from the DOM.
	  }
	});
	
	// Don't forget to init the view!
	Unicef.init();
	Cas.init();
	Moveout.init();
	Os.init();
	Pangea.init();
	Bhddh.init();

	Barba.Pjax.start();

	var FadeTransition = Barba.BaseTransition.extend({
	  start: function() {
		Promise
		  .all([this.newContainerLoading, this.fadeOut()])
		  .then(this.fadeIn.bind(this));
	  },

	  fadeOut: function() {
		return $(this.oldContainer).animate({ opacity: 0 }).promise();
	  },

	  fadeIn: function() {
		var _this = this;
		var $el = $(this.newContainer);

		$(this.oldContainer).hide();

		$el.css({
		  visibility : 'visible',
		  opacity : 0
		});

		$el.animate({ opacity: 1 }, 400, function() {
		  _this.done();
		});
	  }
	});

	Barba.Pjax.getTransition = function() {
	  return FadeTransition;
	};
}