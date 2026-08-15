// Boot sequence in the hero terminal
const bootLines = [
  { html: 'BIOS &raquo; POST check<span class="tline__ok"> ...... OK</span>' },
  { html: 'Loading candidate profile<span class="tline__ok"> ... OK</span>' },
  { html: '&nbsp;' },
  { html: 'NAME  <span class="tline__bold">Larry Dela Cruz Gabriel Jr.</span>' },
  { html: 'ROLE  IT Support / Technical Support / Field Technician' },
  { html: 'BASE  San Jose City, Nueva Ecija, PH' },
  { html: 'DEGREE  BS Computer Science, 2026' },
  { html: '&nbsp;' },
  { html: 'Certifications found: <span class="tline__amber">6</span>' },
  { html: 'Status: <span class="tline__ok">READY FOR DEPLOYMENT</span><span class="tcursor"></span>' },
];

const bootLog = document.getElementById('bootLog');

function typeBoot(){
  if(!bootLog) return;
  bootLog.innerHTML = '';
  bootLines.forEach((line, i) => {
    const el = document.createElement('div');
    el.className = 'tline';
    el.style.animationDelay = (i * 0.16) + 's';
    el.innerHTML = `<span class="tline__mark">&gt;</span><span>${line.html}</span>`;
    bootLog.appendChild(el);
  });
}
typeBoot();

// Stagger the skill rack rows on scroll into view
const rows = document.querySelectorAll('.rack__row');
rows.forEach((row, i) => { row.style.animationDelay = (i * 0.05) + 's'; });

if ('IntersectionObserver' in window) {
  const rack = document.getElementById('skillRack');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.rack__row').forEach(r => r.style.animationPlayState = 'running');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  if (rack) {
    rows.forEach(r => r.style.animationPlayState = 'paused');
    io.observe(rack);
  }
}
