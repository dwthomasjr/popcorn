montageDefine("d5595d8","test/index",{dependencies:["tape","timers","../index","../seed"],factory:function(e,n,t){function d(e,n,t,d){e.ok(n+d>t),e.ok(n-d<t)}var i=e("tape"),o=e("timers").setTimeout,a=e("../index"),s=e("../seed");i("date",function(e){var n=a(),t=Date.now();e.equal(n,t),e.end()}),i("seeded",function(e){var n=s(40);n();d(e,n(),40,5),o(function(){d(e,n(),90,10),e.end()},50)})}});