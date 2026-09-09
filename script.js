/* EDIT THIS OBJECT to personalise the template. */
const portfolio = {
  name: 'Francis Mina', shortName: 'FM', initials: 'FM',
  tagline: 'Aspiring IT support professional building practical Windows Server and Active Directory experience.',
  about: 'I’m an aspiring IT support professional who enjoys solving problems, learning how systems work, and making technology less frustrating for people. My hands-on work is grounded in a VirtualBox homelab where I can learn by building, testing, and troubleshooting.',
  aboutDetail: 'I’m building the foundation for my first IT role through hands-on Windows Server and Active Directory work in my VirtualBox homelab. I also hold the Google IT Support Professional Certificate and have completed most of a B.S. in Computer Science.',
  email: 'fgyfrancis@gmail.com', emailLink: 'mailto:fgyfrancis@gmail.com', resumeUrl: 'assets/resume.pdf',
  projects: [
    { title: 'Active Directory Domain Lab', type: 'Homelab', tags: 'AD DS · OUs · GPOs · User Accounts', url: '#skills' },
    { title: 'Windows File Server', type: 'Homelab', tags: 'SMB Shares · NTFS · Security Groups', url: '#skills' },
    { title: 'Network & Help Desk Practice', type: 'Homelab', tags: 'DNS · Static IP · ipconfig · nslookup', url: '#skills' }
  ],
  skills: [
    { icon: '⌘', title: 'Windows & Identity', text: 'Windows 10/11, Windows Server, AD DS, OUs, accounts, and Group Policy.' },
    { icon: '⌁', title: 'Networking', text: 'Static IP addressing, DNS basics, connectivity checks, and command-line diagnostics.' },
    { icon: '◈', title: 'Files & Access', text: 'SMB network shares, NTFS permissions, security groups, and mapped drives.' },
    { icon: '›_', title: 'Support & Virtualization', text: 'VirtualBox, Remote Desktop, password resets, login issues, and PowerShell basics.' }
  ],
  social: []
};

document.querySelectorAll('[data-profile]').forEach(el => {
  const key = el.dataset.profile, value = portfolio[key];
  if (value) el.textContent = value;
});
document.querySelectorAll('[data-profile-href]').forEach(el => {
  const value = portfolio[el.dataset.profileHref];
  if (value) el.href = value;
});
document.title = `${portfolio.name} | IT Portfolio`;
document.getElementById('year').textContent = new Date().getFullYear();

const photo = document.getElementById('profile-photo');
photo.alt = `Portrait of ${portfolio.name}`;
photo.addEventListener('error', () => photo.parentElement.classList.add('no-image'));

document.getElementById('project-list').innerHTML = portfolio.projects.map((p, i) => `<a class="project reveal" href="${p.url}" ${p.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}><span class="project-number">0${i + 1}</span><h3>${p.title}</h3><span class="project-type">${p.type}<br><span class="project-tags">${p.tags}</span></span><span class="project-arrow" aria-hidden="true">↗</span><span class="sr-only">Open ${p.title}</span></a>`).join('');
document.getElementById('skill-grid').innerHTML = portfolio.skills.map(s => `<article class="skill-card reveal" tabindex="0"><div class="skill-icon" aria-hidden="true">${s.icon}</div><h3>${s.title}</h3><p>${s.text}</p></article>`).join('');
document.getElementById('social-links').innerHTML = portfolio.social.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`).join('');

const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); reveal.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
document.querySelectorAll('.skill-card').forEach(card => card.addEventListener('pointermove', e => { const r = card.getBoundingClientRect(); card.style.setProperty('--x', `${e.clientX - r.left}px`); card.style.setProperty('--y', `${e.clientY - r.top}px`); }));

const toggle = document.querySelector('.menu-toggle'), nav = document.querySelector('nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
