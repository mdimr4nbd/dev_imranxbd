(function () {
  var CFG = {
    name: 'ALL IN ONE x IMRAN',
    short: 'ALL IN ONE x IMRAN',
    email: 'you@example.com',
    greetings: [
      'Assalamualaikum - আসসালামু আলাইকুম',
      'এমন ওয়েবসাইট বানাতে যোগাযোগ করুন!',
      'Contact me to build your dream website!'
    ],
    channels: {
      webdev: { label: 'Free Fire Top-Up', color: 'var(--accent)', icon: '#i-diamond', stroke: true, title: 'Free Fire Top-Up', sub: 'UID Top-Up • Instant Diamond Delivery', pill: 'Active 24/7',
        desc: 'Fast and trusted Free Fire Diamond Top-Up service—get instant delivery using only your Player UID.', cta: 'Top-Up Here', url: '#topup', openTopup: true },
      branding: { label: 'Creative Studio', color: 'var(--accent-2)', icon: '#i-sparkle', stroke: true, title: 'Creative Studio', sub: 'UI/UX & Digital Identity', pill: 'Open Now',
        desc: 'Premium UI/UX design, brand visuals, and high-converting landing pages crafted with precision.', cta: 'Start a Project', url: 'https://wa.me/8801XXXXXXXXX' },
      messenger: { label: 'Messenger', color: '#0084FF', icon: '#i-messenger', title: 'Messenger', sub: '@yourusername', pill: 'Active now',
        desc: 'Chat on Messenger for quick questions and project updates.', cta: 'Message on Messenger', url: 'https://m.me/yourusername' },
      whatsapp: { label: 'WhatsApp', color: '#25D366', icon: '#i-whatsapp', title: 'WhatsApp', sub: '+880 • Official Business', pill: 'Fast Reply',
        desc: 'Connect directly on WhatsApp for fast consultations, order updates, and dedicated client communication.', cta: 'Message on WhatsApp', url: 'https://wa.me/8801XXXXXXXXX' },
      telegram: { label: 'Telegram', color: '#26A5E4', icon: '#i-telegram', title: 'Telegram', sub: '@yourusername', pill: 'Online',
        desc: 'Reach me on Telegram for files, quick calls and project updates.', cta: 'Message on Telegram', url: 'https://t.me/yourusername' }
    },
    socials: [
      { title: 'Follow Me Twitter', sub: 'Tweets & Updates', url: 'https://twitter.com/yourusername', color: '#1DA1F2', icon: '#i-twitter' },
      { title: 'Follow Me GitHub', sub: 'Open Source & Repositories', url: 'https://github.com/yourusername', color: 'var(--fg)', icon: '#i-github' },
      { title: 'Follow Me YouTube', sub: 'Tutorials & Showcases', url: 'https://youtube.com/@yourchannel', color: '#FF0000', icon: '#i-youtube' },
      { title: 'Follow Me Facebook', sub: 'Community & Highlights', url: 'https://facebook.com/yourpage', color: '#1877F2', icon: '#i-facebook' },
      { title: 'Follow Me Instagram', sub: 'Photos & Stories', url: 'https://instagram.com/yourusername', color: '#E4405F', icon: '#i-instagram', stroke: true }
    ]
  };
  var ORDER = ['messenger', 'whatsapp', 'telegram'];

  var root = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  $$('[data-name]').forEach(function (el) { if (el.textContent !== CFG.name) el.textContent = CFG.name; });
  $$('[data-short]').forEach(function (el) { if (el.textContent !== CFG.short) el.textContent = CFG.short; });

  var logoUid = 0;
  $('#year').textContent = new Date().getFullYear();

  var sBox = $('#socials');
  if (sBox && !sBox.children.length) {
    CFG.socials.forEach(function (s) {
      var a = document.createElement('a');
      a.className = 'lrow'; a.href = s.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.style.setProperty('--c', s.color);
      a.innerHTML = '<span class="ring"><svg class="ico' + (s.stroke ? ' stroke' : '') + '" aria-hidden="true"><use href="' + s.icon + '"/></svg></span>' +
        '<span class="t"><b></b><small></small></span>' +
        '<span class="go"><svg class="ico stroke" aria-hidden="true"><use href="#i-chev"/></svg></span>';
      $('b', a).textContent = s.title; $('small', a).textContent = s.sub;
      sBox.appendChild(a);
    });
  }

  var NS = 'http://www.w3.org/2000/svg';
  function mk(tag, attrs) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
  function addFx(ring, orbit) {
    var sv = mk('svg', { 'class': 'spin', viewBox: '0 0 100 100', 'aria-hidden': 'true' });
    sv.appendChild(mk('circle', { cx: 50, cy: 50, r: 47, fill: 'none', stroke: 'currentColor', 'stroke-linecap': 'round', 'stroke-dasharray': '105 190' }));
    ring.insertBefore(sv, ring.firstChild);
    if (orbit) {
      var ob = mk('svg', { 'class': 'orb', viewBox: '0 0 100 100', 'aria-hidden': 'true' });
      ob.appendChild(mk('circle', { cx: 50, cy: 50, r: 48, fill: 'none', stroke: 'currentColor', 'stroke-opacity': '.45', 'stroke-width': '1.6', 'stroke-dasharray': '3 4' }));
      ob.appendChild(mk('circle', { cx: 50, cy: 2, r: 4.2, fill: 'currentColor' }));
      ring.insertBefore(ob, ring.firstChild);
    }
  }
  $$('.ring').forEach(function (r) { addFx(r, !!r.closest('.lrow')); });
  var av = $('.avatar');
  if (av) {
    var hid = 'hg_' + (++logoUid);
    var hs = mk('svg', { 'class': 'hspin', viewBox: '0 0 100 100', 'aria-hidden': 'true' });
    var defs = mk('defs', {});
    var lg = mk('linearGradient', { id: hid, x1: '0', y1: '0', x2: '1', y2: '1' });
    lg.appendChild(mk('stop', { offset: '0%', style: 'stop-color:var(--accent)' }));
    lg.appendChild(mk('stop', { offset: '100%', style: 'stop-color:var(--accent-2)' }));
    defs.appendChild(lg); hs.appendChild(defs);
    hs.appendChild(mk('circle', { cx: 50, cy: 50, r: 48.4, fill: 'none', stroke: 'url(#' + hid + ')', 'stroke-opacity': '.28', 'stroke-width': '1.6' }));
    hs.appendChild(mk('circle', { cx: 50, cy: 50, r: 48.4, fill: 'none', stroke: 'url(#' + hid + ')', 'stroke-width': '3.2', 'stroke-linecap': 'round', 'stroke-dasharray': '170 134' }));
    av.insertBefore(hs, av.firstChild);
  }

  var toastEl = $('#toast'), toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2200); }

  /* Straight Falling Streak Particles with Glowing Head & Life Fade-out */
  var cv = $('#fx'), cx = cv.getContext('2d'), W = 0, H = 0, ps = [], cols = ['#5B8DFF', '#FF8F4F'];
  function fxColors() {
    var cs = getComputedStyle(root);
    cols = [cs.getPropertyValue('--accent').trim() || cols[0], cs.getPropertyValue('--accent-2').trim() || cols[1]];
    if (reduce) fxDraw();
  }
  function fxSize() {
    W = window.innerWidth;
    H = window.innerHeight;
    cv.width = W;
    cv.height = H;
  }
  function pickSpacedX(excludeP) {
    var pad = Math.max(36, W * 0.13);           // দুই পাশে ফাঁকা জায়গা (করনার দিয়ে নামবে না)
    var usableW = Math.max(60, W - pad * 2);
    var minGap = usableW / (W < 600 ? 6 : 9);
    var bestX = pad + Math.random() * usableW;
    for (var attempt = 0; attempt < 12; attempt++) {
      var cand = pad + Math.random() * usableW;
      var ok = true;
      for (var j = 0; j < ps.length; j++) {
        if (ps[j] === excludeP) continue;
        if (Math.abs(ps[j].x - cand) < minGap && Math.abs(ps[j].y - (excludeP ? excludeP.y : 0)) < 140) {
          ok = false;
          break;
        }
      }
      if (ok) { bestX = cand; break; }
    }
    return bestX;
  }
  function spawn(p, first, slotIdx, totalSlots) {
    p.r = 0.85 + Math.random() * 0.45;          // ছোট মাথা
    p.len = 18 + Math.random() * 14;            // হালকা লম্বা লেজ
    p.v = 0.45 + Math.random() * 0.25;
    if (first && totalSlots > 0) {
      var band = H / totalSlots;
      p.y = slotIdx * band + Math.random() * (band * 0.65);
    } else {
      p.y = -45 - Math.random() * 90;           // উপরে রিস্পন হওয়ার সময়ও গ্যাপ থাকবে
    }
    p.x = pickSpacedX(p);
    p.life = first ? Math.floor(Math.random() * 280) : 0;
    p.max = 540 + Math.random() * 480;
    p.c = Math.random() < 0.5 ? 0 : 1;
  }
  function fxInit() {
    ps = [];
    var count = W < 600 ? 9 : 14;
    for (var i = 0; i < count; i++) {
      var p = {};
      spawn(p, true, i, count);
      ps.push(p);
    }
  }
  function fxDraw() {
    cx.clearRect(0, 0, W, H);
    for (var i = 0; i < ps.length; i++) {
      var p = ps[i];
      var progress = p.life / p.max;
      var fadeIn = p.life < 45 ? p.life / 45 : 1;
      var fadeOut = progress > 0.45 ? (1 - (progress - 0.45) / 0.55) : 1;
      var alpha = 0.85 * fadeIn * (fadeOut > 0 ? fadeOut : 0);
      if (alpha <= 0.01) continue;

      var col = cols[p.c];
      var tailY = p.y - p.len;

      var grad = cx.createLinearGradient(p.x, tailY, p.x, p.y);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(0.6, col);
      grad.addColorStop(1, '#ffffff');

      cx.globalAlpha = alpha;

      /* পেছনে চিকন হয়ে শেষ হওয়া লেজ */
      cx.fillStyle = grad;
      cx.beginPath();
      cx.moveTo(p.x, tailY);
      cx.lineTo(p.x - p.r * 0.9, p.y);
      cx.lineTo(p.x + p.r * 0.9, p.y);
      cx.closePath();
      cx.fill();

      /* ছোট গ্লোয়িং মাথা */
      cx.fillStyle = col;
      cx.beginPath();
      cx.arc(p.x, p.y, p.r * 1.9, 0, 6.2832);
      cx.fill();
      cx.fillStyle = '#ffffff';
      cx.beginPath();
      cx.arc(p.x, p.y, p.r, 0, 6.2832);
      cx.fill();
    }
    cx.globalAlpha = 1;
  }
  var lastTs = 0;
  function fxStep(ts) {
    if (!lastTs) lastTs = ts;
    var dt = (ts - lastTs) / 16.6667;
    if (dt > 3) dt = 1;
    lastTs = ts;
    if (!document.hidden && !active && dt > 0) {
      for (var i = 0; i < ps.length; i++) {
        var p = ps[i];
        p.y += p.v * dt;
        p.life += dt;
        if (p.life >= p.max || p.y - p.len > H) {
          spawn(p, false);
        }
      }
      fxDraw();
    }
    requestAnimationFrame(fxStep);
  }
  fxSize(); fxInit(); fxColors();
  window.addEventListener('resize', function () { fxSize(); fxInit(); if (reduce) fxDraw(); }, { passive: true });
  if (reduce) fxDraw(); else requestAnimationFrame(fxStep);

  (function () {
    var dot = $('#cDot'), ring = $('#cRing');
    if (!dot || !ring || reduce || !window.matchMedia || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var tx = -100, ty = -100, rx = -100, ry = -100, vis = false, raf = false;
    var lastC = 0;
    function render(ts) {
      var dt = lastC ? Math.min(2.5, (ts - lastC) / 16.6667) : 1;
      lastC = ts;
      var ease = 1 - Math.pow(0.76, dt);
      rx += (tx - rx) * ease;
      ry += (ty - ry) * ease;
      dot.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0)';
      ring.style.transform = 'translate3d(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px,0)';
      if (Math.abs(tx - rx) > 0.15 || Math.abs(ty - ry) > 0.15) requestAnimationFrame(render);
      else { raf = false; lastC = 0; }
    }
    document.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX; ty = e.clientY;
      if (!vis) { vis = true; rx = tx; ry = ty; dot.style.opacity = '1'; ring.style.opacity = '1'; }
      var isHover = e.target && e.target.closest('a,button,[role="tab"],[role="radio"]');
      ring.classList.toggle('hover', !!isHover);
      if (!raf) { raf = true; requestAnimationFrame(render); }
    }, { passive: true });
    document.addEventListener('pointerdown', function (e) { if (e.pointerType === 'mouse') ring.classList.add('down'); }, { passive: true });
    document.addEventListener('pointerup', function (e) { if (e.pointerType === 'mouse') ring.classList.remove('down'); }, { passive: true });
    document.addEventListener('mouseleave', function () { vis = false; dot.style.opacity = '0'; ring.style.opacity = '0'; }, { passive: true });
  })();

  /* Permanent Dark Mode */
  root.removeAttribute('data-theme');
  root.removeAttribute('data-mode');
  try {
    localStorage.removeItem('pf-theme');
    localStorage.removeItem('pf-mode');
  } catch (e) {}

  var active = null, lastFocus = null;
  var bgSections = $$('.topbar, .page, footer');
  function setBgLocked(locked) {
    for (var i = 0; i < bgSections.length; i++) {
      if (locked) bgSections[i].setAttribute('aria-hidden', 'true');
      else bgSections[i].removeAttribute('aria-hidden');
    }
  }
  function openOv(ov) {
    if (active === ov) return;
    lastFocus = document.activeElement;
    active = ov;
    ov.classList.add('open');
    ov.setAttribute('aria-hidden', 'false');
    root.classList.add('lock');
    requestAnimationFrame(function () {
      if (active === ov) setBgLocked(true);
    });
  }
  function closeOv() {
    if (!active) return;
    var closing = active;
    active = null;
    closing.classList.remove('open');
    closing.setAttribute('aria-hidden', 'true');
    root.classList.remove('lock');
    setBgLocked(false);
    if (lastFocus && lastFocus.focus && !lastFocus.classList.contains('tab')) {
      try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
    }
  }
  $$('.overlay').forEach(function (ov) {
    if (ov.id !== 'topupOv') {
      ov.addEventListener('pointerdown', function (e) { if (e.target === ov) { e.preventDefault(); e.stopPropagation(); closeOv(); } });
      ov.addEventListener('click', function (e) { if (e.target === ov) { e.preventDefault(); e.stopPropagation(); closeOv(); } });
    }
    $$('[data-close]', ov).forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeOv();
      });
    });
  });

  function setDesign(d) {
    if (d === 'sunset') d = 'emerald';
    if (!d || d === 'cosmic') root.removeAttribute('data-design');
    else root.setAttribute('data-design', d);
    $$('.dopt').forEach(function (b) { b.setAttribute('aria-checked', b.getAttribute('data-d') === d ? 'true' : 'false'); });
    fxColors();
  }
  var sd = 'emerald'; try { sd = localStorage.getItem('pf-design2') || 'emerald'; } catch (e) {}
  setDesign(sd);
  $('#designBtn').addEventListener('click', function () {
    openOv($('#designOv'));
  });
  $$('.dopt').forEach(function (b) {
    b.addEventListener('click', function () {
      var d = b.getAttribute('data-d');
      setDesign(d);
      try { localStorage.setItem('pf-design2', d); } catch (e) {}
      closeOv();
      toast('Design changed');
    });
  });

  var ccard = $('#ccard'), chan = 'whatsapp';
  var cIcon = $('#cIcon'), cIcoWrap = $('#cIcoWrap'), cTitle = $('#cTitle'), cSub = $('#cSub'), cPill = $('#cPill'), cDesc = $('#cDesc'), cCtaTxt = $('#cCtaTxt'), cCta = $('#cCta');
  var tabEls = $$('.tab');

  function setChan(k) {
    chan = k; var d = CFG.channels[k];
    ccard.style.setProperty('--c', d.color);
    var idx = ORDER.indexOf(k);
    ccard.style.setProperty('--n', idx >= 0 ? (((idx + .5) / 3) * 100) + '%' : (k === 'webdev' ? '25%' : '75%'));
    cIcon.setAttribute('href', d.icon);
    cIcoWrap.classList.toggle('stroke', !!d.stroke);
    cTitle.textContent = d.title; cSub.textContent = d.sub; cPill.textContent = d.pill; cDesc.textContent = d.desc;
    cCtaTxt.textContent = d.cta; cCta.href = d.url;
    if (d.openTopup) { cCta.removeAttribute('target'); cCta.removeAttribute('rel'); }
    else { cCta.target = '_blank'; cCta.rel = 'noopener noreferrer'; }
    for (var i = 0; i < tabEls.length; i++) {
      tabEls[i].setAttribute('aria-selected', tabEls[i].getAttribute('data-k') === k ? 'true' : 'false');
    }
  }
  cCta.addEventListener('click', function (e) {
    if (CFG.channels[chan] && CFG.channels[chan].openTopup) {
      e.preventDefault();
      openOv($('#topupOv'));
    }
  });
  setTimeout(function () { ccard.classList.add('settled'); }, 400);
  function switchChan(k) {
    if (k === chan) return;
    ccard.classList.add('settled');
    ccard.classList.remove('pop');
    setChan(k);
    if (!reduce) {
      void ccard.offsetWidth;
      ccard.classList.add('pop');
    }
  }
  for (var ti = 0; ti < tabEls.length; ti++) {
    (function (t) {
      var k = t.getAttribute('data-k');
      t.addEventListener('pointerdown', function (e) {
        if (e.button && e.button !== 0) return;
        switchChan(k);
      }, { passive: true });
      t.addEventListener('click', function () {
        switchChan(k);
      });
    })(tabEls[ti]);
  }
  setChan('whatsapp');

  (function () {
    var selectedPkg = '115 Diamond', selectedPrice = '৳85';
    var dmCards = $$('.dm-card'), pkgLbl = $('#selectedPkgLabel'), uidInput = $('#ffUidInput');
    if (uidInput) {
      uidInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
          e.preventDefault();
          uidInput.blur();
        }
      });
    }
    dmCards.forEach(function (card) {
      card.addEventListener('click', function () {
        selectedPkg = card.getAttribute('data-pkg');
        selectedPrice = card.getAttribute('data-price');
        dmCards.forEach(function (c) { c.setAttribute('aria-checked', c === card ? 'true' : 'false'); });
        if (pkgLbl) pkgLbl.textContent = selectedPkg + ' • ' + selectedPrice;
      });
    });
    var confirmBtn = $('#confirmTopupBtn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', function () {
        var uid = (uidInput && uidInput.value || '').trim();
        if (!uid || uid.length < 5) {
          toast('Please enter a valid Player UID!');
          if (uidInput) uidInput.focus();
          return;
        }
        var msg = 'Assalamualaikum! Free Fire Top-Up Order:%0A' +
          'Player UID: ' + encodeURIComponent(uid) + '%0A' +
          'Package: ' + encodeURIComponent(selectedPkg) + ' (' + encodeURIComponent(selectedPrice) + ')';
        window.open('https://wa.me/8801XXXXXXXXX?text=' + msg, '_blank', 'noopener,noreferrer');
      });
    }
  })();

  /* Slim Full-Width Liquid Glass Music Player */
  (function () {
    var songs = [
      { t: 'First Song Name', a: 'ALL IN ONE x IMRAN', s: './assets/song1.mp3' },
      { t: 'Second Song Name', a: 'ALL IN ONE x IMRAN', s: './assets/song2.mp3' },
      { t: 'Third Song Name', a: 'ALL IN ONE x IMRAN', s: './assets/song3.mp3' }
    ];
    var idx = 0, shf = false;
    var aud = $('#em-aud'), bar = $('#em-bar'), ply = $('#em-ply');
    var icoPlay = $('#em-ico-play'), icoPause = $('#em-ico-pause');
    var icoVol = $('#em-ico-vol'), icoMute = $('#em-ico-mute');
    if (!aud || !bar || !ply) return;

    function fmt(s) {
      if (isNaN(s)) return '00:00';
      var m = Math.floor(s / 60), sec = Math.floor(s % 60);
      return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
    }
    function load(i) {
      $('#em-t').textContent = songs[i].t;
      $('#em-a').textContent = songs[i].a;
      aud.src = songs[i].s;
      bar.value = 0;
      bar.style.background = 'linear-gradient(to right, var(--accent) 0%, var(--surface-hover) 0%)';
    }
    function playToggle() {
      if (aud.paused) {
        aud.play();
        if (icoPlay) icoPlay.style.display = 'none';
        if (icoPause) icoPause.style.display = 'block';
      } else {
        aud.pause();
        if (icoPlay) icoPlay.style.display = 'block';
        if (icoPause) icoPause.style.display = 'none';
      }
    }

    ply.addEventListener('click', playToggle);
    $('#em-nxt').addEventListener('click', function () {
      idx = shf ? Math.floor(Math.random() * songs.length) : (idx + 1) % songs.length;
      load(idx); playToggle();
    });
    $('#em-prv').addEventListener('click', function () {
      idx = (idx - 1 + songs.length) % songs.length;
      load(idx); playToggle();
    });
    $('#em-shf').addEventListener('click', function (e) {
      shf = !shf; e.currentTarget.classList.toggle('act', shf);
    });

    $('#em-snd').addEventListener('click', function (e) {
      aud.muted = !aud.muted;
      if (icoVol) icoVol.style.display = aud.muted ? 'none' : 'block';
      if (icoMute) icoMute.style.display = aud.muted ? 'block' : 'none';
      e.currentTarget.classList.toggle('act', !aud.muted);
    });

    aud.addEventListener('timeupdate', function () {
      if (!aud.duration) return;
      var p = (aud.currentTime / aud.duration) * 100;
      bar.value = p;
      bar.style.background = 'linear-gradient(to right, var(--accent) ' + p + '%, var(--surface-hover) ' + p + '%)';
      $('#em-c').textContent = fmt(aud.currentTime);
      $('#em-r').textContent = '-' + fmt(aud.duration - aud.currentTime);
    });
    aud.addEventListener('ended', function () { $('#em-nxt').click(); });
    bar.addEventListener('input', function () {
      if (aud.duration) aud.currentTime = (bar.value / 100) * aud.duration;
    });

    load(0);
  })();

  (function () {
    var box = $('#codeBox'); if (!box) return;
    function p2(x) { return (x < 10 ? '0' : '') + x; }
    function nowStr() { var d = new Date(); return p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()); }
    var CODE = [
      [['', '<!-- '], ['k', 'live status'], ['', ' • '], ['t', ''], ['', ' -->']],
      [['w', 'const'], ['', ' portfolio = {']],
      [['', '  '], ['k', 'brand'], ['', ': '], ['s', '"ALL IN ONE x IMRAN"'], ['', ',']],
      [['', '  '], ['k', 'channel'], ['', ': '], ['c', ''], ['', ',']],
      [['', '  '], ['k', 'theme'], ['', ': '], ['d', ''], ['', ',']],
      [['', '  '], ['k', 'builds'], ['', ': ['], ['s', '"Web"'], ['', ', '], ['s', '"Design"'], ['', ', '], ['s', '"Brand"'], ['', '],']],
      [['', '  '], ['k', 'quality'], ['', ': '], ['s', '"Premium"'], ['', ',']],
      [['', '  '], ['k', 'available'], ['', ': '], ['b', 'true']],
      [['', '};']],
      [['', 'portfolio.'], ['k', 'launch'], ['', '();']]
    ];
    function copy(hidden) {
      var wrap = document.createElement('span'); if (hidden) wrap.setAttribute('aria-hidden', 'true');
      CODE.forEach(function (line, i) {
        var l = document.createElement('span'); l.className = 'l';
        var n = document.createElement('span'); n.className = 'n'; n.textContent = String(i + 1); l.appendChild(n);
        line.forEach(function (t) {
          var sp = document.createElement('span');
          if (t[0] === 't') { sp.className = 's'; sp.setAttribute('data-live', ''); sp.textContent = nowStr(); }
          else if (t[0] === 'c') { sp.className = 's'; sp.setAttribute('data-live-chan', ''); sp.textContent = '"' + chan + '"'; }
          else if (t[0] === 'd') { sp.className = 's'; sp.setAttribute('data-live-design', ''); sp.textContent = '"' + (root.getAttribute('data-design') || 'cosmic') + '"'; }
          else { if (t[0]) sp.className = t[0]; sp.textContent = t[1]; }
          l.appendChild(sp);
        });
        wrap.appendChild(l);
      });
      return wrap;
    }
    box.innerHTML = '';
    box.appendChild(copy(false));
    if (!reduce) { box.appendChild(copy(true)); }
    var liveNodes = $$('[data-live]', box);
    var liveChanNodes = $$('[data-live-chan]', box);
    var liveDesignNodes = $$('[data-live-design]', box);
    function tick() {
      if (document.hidden) return;
      var now = nowStr();
      var curChan = '"' + chan + '"';
      var curDesign = '"' + (root.getAttribute('data-design') || 'cosmic') + '"';
      for (var i = 0; i < liveNodes.length; i++) liveNodes[i].textContent = now;
      for (var j = 0; j < liveChanNodes.length; j++) liveChanNodes[j].textContent = curChan;
      for (var k = 0; k < liveDesignNodes.length; k++) liveDesignNodes[k].textContent = curDesign;
    }
    setInterval(tick, 1000);
  })();

  function graphemes(t) {
    try { if (window.Intl && Intl.Segmenter) return Array.from(new Intl.Segmenter('bn', { granularity: 'grapheme' }).segment(t), function (x) { return x.segment; }); } catch (e) {}
    return Array.from(t);
  }
  var typed = $('#typed'), phrases = CFG.greetings;
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  async function typeLoop() {
    var pi = 0; typed.textContent = phrases[0];
    while (true) {
      await sleep(3200);
      var g = graphemes(typed.textContent);
      while (g.length) { g.pop(); typed.textContent = g.join(''); await sleep(26); }
      pi = (pi + 1) % phrases.length;
      var n = graphemes(phrases[pi]);
      for (var i = 1; i <= n.length; i++) { typed.textContent = n.slice(0, i).join(''); await sleep(55); }
    }
  }
  if (!reduce && phrases.length > 1) typeLoop(); else typed.textContent = phrases[0];


  /* Sequential wave (dhew) for visible elements + Smooth Scroll-Reveal for lower sections */
  (function () {
    var items = $$('.topbar, .hero, .top-duos, .tabs, .ccard, .sec, .lrow, .em-card, .code, .gear-head, .gcard, footer');
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var aboveIdx = 0;
    var belowItems = [];

    items.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (reduce || !('IntersectionObserver' in window) || rect.top < vh - 20) {
        el.style.setProperty('--d', (aboveIdx * 65) + 'ms');
        aboveIdx++;
      } else {
        el.classList.add('sr-wait');
        belowItems.push(el);
      }
    });

    if (belowItems.length && 'IntersectionObserver' in window && !reduce) {
      var batchCount = 0, batchTimer = null;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var target = entry.target;
          io.unobserve(target);
          target.style.setProperty('--sd', (batchCount * 40) + 'ms');
          batchCount++;
          clearTimeout(batchTimer);
          batchTimer = setTimeout(function () { batchCount = 0; }, 120);
          target.classList.remove('sr-wait');
          target.classList.add('sr-in');
          target.addEventListener('animationend', function onEnd() {
            target.style.willChange = 'auto';
            target.removeEventListener('animationend', onEnd);
          });
        });
      }, { rootMargin: '0px 0px -15px 0px', threshold: 0.04 });

      belowItems.forEach(function (el) { io.observe(el); });
    }

    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        items.forEach(function (el) {
          el.style.animation = 'none';
          void el.offsetHeight;
          el.style.animation = '';
        });
      }
    });
  })();
  
})();
