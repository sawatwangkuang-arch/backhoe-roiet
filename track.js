/* Google Ads tracking: กดโทร / กด LINE */
(function () {
  var TAG_ID = 'AW-18501026471';
  var SEND_TO = 'AW-18501026471/5NJqCOn0h50dEKeF_fVE';

  // โหลด Google tag
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + TAG_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', TAG_ID);

  // ตรวจจับการกดลิงก์โทรและ LINE ทุกปุ่มในหน้า (รวมปุ่มลอย)
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var href = (a.getAttribute('href') || '').toLowerCase();
    var isCall = href.indexOf('tel:') === 0;
    var isLine = href.indexOf('line.me') !== -1 || href.indexOf('lin.ee') !== -1 || href.indexOf('line://') === 0;
    if (isCall || isLine) {
      gtag('event', 'conversion', { 'send_to': SEND_TO });
    }
  }, true);
})();
