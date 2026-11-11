import { invite } from './data.js';
import { renderInvitation } from './components.js';
import { getEventDateInfo } from './event-utils.js';

const $ = (selector) => document.querySelector(selector);
const primaryEvent = invite.events[0] ?? null;
const primaryDateInfo = getEventDateInfo(primaryEvent);
const eventDate = primaryDateInfo?.instant ?? null;
const eventLocalDate = primaryDateInfo?.localDate ?? null;
const formatDate = (options) => primaryDateInfo?.format(options) ?? '';

document.title = 'Fathima & Anshad · Shafat Invitation';
$('#invitation').innerHTML = renderInvitation();

const displayData = {
  weekday: formatDate({ weekday: 'long' }),
  dateLong: formatDate({ day: 'numeric', month: 'long', year: 'numeric' }),
  dateTitle: formatDate({ day: 'numeric', month: 'long', year: 'numeric' }),
};
document.querySelectorAll('[data-value]').forEach((element) => {
  element.textContent = displayData[element.dataset.value] ?? '';
});

const calendarLink = $('#addCal');
const calendarBox = $('#calBox');
if (eventDate && eventLocalDate) {
  const who = `${invite.bride} & ${invite.groom}`;
  const googleDate = (date) => date.toISOString().replace(/[-:]|\.\d+/g, '');
  const eventEnd = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000);
  calendarLink.href = `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: 'TEMPLATE',
    text: `${who} · ${primaryEvent.name}`,
    dates: `${googleDate(eventDate)}/${googleDate(eventEnd)}`,
    location: `${primaryEvent.venue}, ${primaryEvent.address}`,
  })}`;

  const year = eventLocalDate.getUTCFullYear();
  const month = eventLocalDate.getUTCMonth();
  const day = eventLocalDate.getUTCDate();
  $('#mo').textContent = formatDate({ month: 'long' });
  const yearLabel = document.createElement('small');
  yearLabel.textContent = year;
  $('#mo').append(yearLabel);
  const headings = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const firstDay = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const monthLength = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells = [...headings.map((label) => `<div class="h">${label}</div>`), ...Array(firstDay).fill('<div></div>')];
  for (let date = 1; date <= monthLength; date += 1) {
    cells.push(`<div class="d${date === day ? ' on' : ''}">${date}</div>`);
  }
  $('#grid').innerHTML = cells.join('');
} else {
  $('#countSec').hidden = true;
  calendarBox.hidden = true;
}

if (eventDate) {
  const tick = () => {
    const difference = Math.floor((eventDate.getTime() - Date.now()) / 60_000);
    let minutes = Math.abs(difference);
    if (difference < 0) $('#cdLab').textContent = 'Happily married · together for';
    $('#cd').textContent = Math.floor(minutes / 1440);
    minutes %= 1440;
    $('#ch').textContent = Math.floor(minutes / 60);
    $('#cm').textContent = minutes % 60;
  };
  tick();
  window.setInterval(tick, 20_000);
}

const cover = $('#cover');
const intro = $('#opener');
const hero = $('#hero');
const backgroundMusic = $('#bgm');
const musicToggle = $('#musicToggle');
document.body.style.overflow = 'hidden';
let opened = false;
let finished = false;
let userPaused = false;

const setMusicState = (playing) => {
  musicToggle.classList.toggle('playing', playing);
  musicToggle.classList.toggle('paused', !playing);
  musicToggle.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
};

const startAudio = () => {
  backgroundMusic.currentTime = 0;
  backgroundMusic.volume = 1;
  const playPromise = backgroundMusic.play();
  if (playPromise?.then) {
    playPromise.then(() => setMusicState(true)).catch(() => setMusicState(false));
  }
};

function revealSections() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pre');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rv').forEach((section) => {
    if (section.getBoundingClientRect().top > window.innerHeight) {
      section.classList.add('pre');
      observer.observe(section);
    }
  });
}

const finishOpening = () => {
  if (finished) return;
  finished = true;
  cover.classList.add('gone');
  document.body.style.overflow = '';
  hero.classList.add('show');
  musicToggle.classList.add('visible');
  window.setTimeout(revealSections, 600);
};

const openInvitation = () => {
  if (opened) {
    finishOpening();
    return;
  }
  opened = true;
  cover.classList.add('playing');
  startAudio();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finishOpening();
    return;
  }
  intro.addEventListener('ended', finishOpening, { once: true });
  intro.addEventListener('error', finishOpening, { once: true });
  window.setTimeout(finishOpening, 12_000);
  const videoPromise = intro.play();
  if (videoPromise?.catch) videoPromise.catch(finishOpening);
};

cover.addEventListener('click', openInvitation);
cover.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openInvitation();
  }
});

musicToggle.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    userPaused = false;
    backgroundMusic.play().then(() => setMusicState(true)).catch(() => {});
  } else {
    userPaused = true;
    backgroundMusic.pause();
    setMusicState(false);
  }
});

const stopAudio = () => {
  if (!backgroundMusic.paused) backgroundMusic.pause();
};
window.addEventListener('pagehide', stopAudio);
window.addEventListener('beforeunload', stopAudio);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAudio();
  else if (finished && !userPaused) {
    backgroundMusic.play().then(() => setMusicState(true)).catch(() => {});
  }
});

const rsvp = $('#rsvp');
const nameField = $('#rName');
const yesButton = $('#yes');
const noButton = $('#no');
const countWrap = $('#cntWrap');
const toast = $('#toast');
$('#openR').addEventListener('click', () => {
  rsvp.classList.add('open');
  $('#openR').hidden = true;
  nameField.focus();
});
const setAttendance = (attending) => {
  yesButton.setAttribute('aria-pressed', String(attending));
  noButton.setAttribute('aria-pressed', String(!attending));
  countWrap.hidden = !attending;
};
yesButton.addEventListener('click', () => setAttendance(true));
noButton.addEventListener('click', () => setAttendance(false));
rsvp.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameField.value.trim();
  const attending = yesButton.getAttribute('aria-pressed') === 'true';
  if (!name) {
    toast.textContent = 'Please add your name.';
    return;
  }
  if (!invite.rsvpWhatsApp) {
    toast.textContent = 'Replies are not open yet. Please check back soon.';
    return;
  }
  const who = `${invite.bride} & ${invite.groom}`;
const message = attending
    ? `Assalamu Alaikum wa Rahmatullahi wa Barakatuh 🤍

In shaa Allah, I will be delighted to attend the ${primaryEvent.name} celebration of ${who}. 💍✨

👤 Name: ${name}
👥 Number of Guests: ${$('#rCount').value}

Looking forward to sharing this beautiful moment with you!

May Allah bless you both with endless happiness, love and barakah. Aameen. 🤲🏻

JazakAllahu Khairan!`
  : `Assalamu Alaikum wa Rahmatullahi wa Barakatuh 🤍

Unfortunately, I won't be able to attend the ${primaryEvent.name} celebration of ${who}.

Although I cannot be there in person, my heartfelt duas and best wishes are always with you. 🤲🏻

May Allah bless your beautiful journey together with endless love, happiness and barakah. Aameen. 💚

JazakAllahu Khairan!`;

  window.open(`https://wa.me/${invite.rsvpWhatsApp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  toast.textContent = `Thank you, ${name}. Please press send in WhatsApp to finish.`;
});
