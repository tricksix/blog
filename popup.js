<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1563944890582654";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<style>
#fanback {
  display:none;
  background:rgba(0,0,0,0.8);
  
  position:fixed;
  top:0;
  left:0;
right:0;
bottom:0;
  z-index:99999;
}
#fan-exit {
 position: absolute;
width:15px;
height:15px;
		top:-2px;
		right:-3px;

display:block;
}






		@media (min-width: 768px){
		#fanbox {
width:385px;
		
		}
}
@media (max-width: 385px){
		.popup-container {
		width:95%;
		}
		}

#fanbox {
  background:white;
 
  position:relative;
  
 
  -webkit-box-shadow: inset 0 0 50px 0 #a3cc00;
  -moz-box-shadow: inset 0 0 50px 0 #a3cc00;
  box-shadow: inset 0 0 50px 0 #a3cc00;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding:5px 5px;
top: 0px;
margin: 8% auto;

}
#fanclose {
  float:right;
  cursor:pointer;
  background:url(https://4.bp.blogspot.com/-GDRN3cck6_M/VuG-xCn7C-I/AAAAAAAABYM/Rdkxd8Okhc0/s1600/tricxsix.png) repeat;
  height:15px;
  padding:20px;
  position:relative;
  padding-right:40px;
  margin-top:-16px;
  margin-right:-18px;
z-index:10;
}

#linkit,#linkit a.visited,#linkit a,#linkit a:hover {
  color:#80808B;
  font-size:10px;
  margin: 0 auto 5px auto;
  float:center;
}
</style>
<script type='text/javascript'>
//<![CDATA[
jQuery.cookie = function (key, value, options) {
  // key and at least value given, set cookie...
  if (arguments.length > 1 && String(value) !== "[object Object]") {
    options = jQuery.extend({}, options);
    if (value === null || value === undefined) {
      options.expires = -1;
    }
    if (typeof options.expires === 'number') {
      var days = options.expires, t = options.expires = new Date();
      t.setDate(t.getDate() + days);
    }
    value = String(value);
    return (document.cookie = [
      encodeURIComponent(key), '=',
      options.raw ? value : encodeURIComponent(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
    ].join(''));
  }
  // key and possibly options given, get cookie...
  options = value || {};
  var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
  return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
//]]>
</script>
<script type='text/javascript'>
jQuery(document).ready(function($){
  if($.cookie('popup_facebook_box') != 'yes'){
    $('#fanback').delay(10000).fadeIn('medium');
    $('#fanclose, #fan-exit').click(function(){
      $('#fanback').stop().fadeOut('medium');
    });
  } 
  
   $('#fanback').delay(100000).fadeIn('medium');
    $('#fanclose, #fan-exit').click(function(){
      $('#fanback').stop().fadeOut('medium');
    }); 
$.cookie('popup_facebook_box', 'yes', { path: '/', expires: 2 });
});
</script>
<div id='fanback'>
  <div id='fan-exit'></div>
  <div id='fanbox'>
    <div id='fanclose'></div>

  
    <div style="text-align:center;padding-top:6px; ">
 <div class="fb-page" data-href="https://www.facebook.com/tricksix/"  data-width="350"    data-hide-cover="false"
  data-show-facepile="false" 
  data-show-posts="false">
<div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/tricksix"><a href="https://www.facebook.com/tricksix">Tricksix</a></blockquote></div></div>
 
  
<br/>
<div style="padding-top:9px;">
<div class="fb-share-button" expr:data-href='data:url' data-layout="button_count" rel='nofollow'></div>
<div class="fb-send" expr:data-href='data:url' rel='nofollow'></div>
</div>
  <div style="text-align:center;vertical-align:middle;top:-20px;">
<h2>Tricksix.com</h2>
Give us the spirit to be growing.<br/>
Please like and share us with your friends, I was very fortunate to have a new friend like you.
<h4>THANK YOU FOR YOUR PARTICIPATION</h4></div> 
   
    </div>
  </div>
</div>
