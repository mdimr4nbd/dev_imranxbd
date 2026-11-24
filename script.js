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
​var root = document.documentElement;
var $ = function (s, r) { return (r \vert{}\vert{} document).querySelector(s); }; var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
​/* Update name only if different to prevent initial DOM repaint flicker */
