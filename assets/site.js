// Small client script for site interactions (banner dismiss + smooth scroll)
(function(){
  var banner = document.getElementById('top-banner');
  var closeBtn = document.getElementById('top-banner-close');
  if(!banner) return;

  // Check localStorage to see if banner was dismissed
  try{
    var dismissed = localStorage.getItem('aerie_banner_dismissed');
    if(dismissed === '1') banner.style.display = 'none';
  }catch(e){ /* ignore */ }

  if(closeBtn){
    closeBtn.addEventListener('click', function(e){
      e.preventDefault();
      banner.style.display = 'none';
      try{ localStorage.setItem('aerie_banner_dismissed', '1'); }catch(e){}
    });
  }

  // Smooth scroll for banner CTA
  var cta = document.getElementById('top-banner-cta');
  if(cta){
    cta.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(cta.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
})();
