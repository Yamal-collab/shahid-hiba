import { invite, basmala } from "./data.js";
import { formatEventDateLine } from "./event-utils.js";

const escapeHTML = (value) =>
    String(value).replace(
        /[&<>"']/g,
        (char) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            })[char],
    );

const photo = (src, alt) =>
    src ? `<img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy">` : '<div class="ph">Photo</div>';

export function renderInvitation() {
    const who = `${invite.bride} & ${invite.groom}`;
    const featuredEvent = invite.events[0];
    const celebrationItems = invite.events
        .map(
            (event) => `
    <div class="event-block" data-event-id="${escapeHTML(event.id)}">
      <div class="day">${escapeHTML(formatEventDateLine(event))}</div>
      <div class="item">
        <div class="t">${escapeHTML(event.timeText)}</div>
        <div class="n">${escapeHTML(event.name)}</div>
        <div>${escapeHTML(event.venue)}</div>
        <div class="a">${escapeHTML(event.address)}</div>
        ${event.mapUrl ? `<a class="link" href="${escapeHTML(event.mapUrl)}" target="_blank" rel="noopener">View map →</a>` : ""}
      </div>
    </div>`,
        )
        .join("");
    return `
    <section class="hero" id="hero">
      <div class="bless in" lang="ar">${basmala}</div>
      <div class="cap in">
        <div>BY THE GRACE OF ALLAH,</div>
        <div class="hero-invite">INVITE YOU TO WITNESS AND BLESS THE BEGINNING OF A BEAUTIFUL JOURNEY OF LOVE AND TOGETHERNESS.</div>
      </div>
      <div class="names in hero-names"><span>${escapeHTML(invite.groomFull)}</span><em>and</em><span>${escapeHTML(invite.brideFull)}</span></div>
      <div class="dia in"><i></i><b></b><i></i></div>
      <div class="cap in" data-value="weekday"></div>
      <div class="hdate in" data-value="dateLong"></div>
      <div class="dia in"><i></i><b></b><i></i></div>
      <div class="cap in">${escapeHTML(featuredEvent?.venueShort ?? "")}</div>
      <div class="hline in">in shaa Allah, we would love to have you with us</div>
      <svg class="sprig in" viewBox="0 0 34 52" fill="none" stroke="currentColor" aria-hidden="true"><path d="M1 51V17a16 16 0 0 1 32 0v34z"/><path d="M17 44V13M17 36c-3-1-6-3-7-6 3 0 6 2 7 4m0-2c3-1 6-3 7-6-3 0-6 2-7 4m0-6c-3-1-5-3-6-6 3 0 5 2 6 4m0-2c3-1 5-3 6-6-3 0-5 2-6 4"/></svg>
      <div class="cap sdown in">Scroll down</div>
    </section>

    <section class="sec pad rv" id="countSec">
      <div class="gcap" id="cdLab">Counting down</div>
      <div class="count"><div><b id="cd">-</b><span>Days</span></div><div><b id="ch">-</b><span>Hours</span></div><div><b id="cm">-</b><span>Minutes</span></div></div>
      <div class="count-link"><a class="link" id="addCal" target="_blank" rel="noopener">Add to calendar</a></div>
    </section>

    <section class="sec pad rv date-section">
      <div class="gcap">Date</div>
      <div class="dateBig" data-value="dateTitle"></div>
      <div class="time">${escapeHTML(featuredEvent?.timeText ?? "")}</div>
      <div class="cal" id="calBox" aria-label="Calendar"><div class="mo" id="mo"></div><div class="grid" id="grid"></div></div>
    </section>

    <div class="band band-one"></div>
    <section class="sec pad rv welcome-section">
      <div class="gcap">Welcome</div>
      <div class="welcome">“And He placed between you affection and mercy.”</div>
      <div class="vref">Quran 30 : 21</div>
      <div class="portrait" id="portrait">${photo(invite.portrait, who)}</div>
      <p class="welcome welcome-copy">Today we celebrate the answer to our deepest duas. We request the honour of your presence, in shaa Allah.</p>
    </section>
    <div class="band band-two"></div>

    <section class="sec pad rv">
      <div class="gcap">The program</div><h2>The Celebration</h2>
      <div class="prog">${celebrationItems}</div>
    </section>

    <section class="sec pad rv families-section">
      <div class="gcap">Two families</div><h2>With Their Blessings</h2>
        <div class="fam">
        <div class="c"><div class="gcap">The groom</div><div class="nm">${escapeHTML(invite.groomFull)}</div><div>${escapeHTML(invite.groomParents)}</div><div class="of">${escapeHTML(invite.groomHome)}</div></div>
        <div class="c"><div class="gcap">The bride</div><div class="nm">${escapeHTML(invite.brideFull)}</div><div>${escapeHTML(invite.brideParents)}</div><div class="of">${escapeHTML(invite.brideHome)}</div></div>
      </div>
    </section>

    <section class="sec pad rv">
      <div class="gcap">Moments</div><h2>A Few Favourites</h2>
      <div class="gal">${invite.gallery.map((src) => photo(src, who)).join("")}</div>
    </section>

    <div class="band band-one"></div>
    <section class="sec pad rv rsvp-section">
      <div class="rs">
        <div class="gcap">Join us</div><h2>Will You Celebrate With Us?</h2>
        <p>We would be honoured to have you join us. Kindly let us know whether you can make it.</p>
        <button class="pill" id="openR" type="button">Reply to our invitation</button>
        <form class="form" id="rsvp" novalidate>
          <label>Your name<input id="rName" autocomplete="name" placeholder="Your full name"></label>
          <div class="seg" role="group" aria-label="Attending"><button type="button" id="yes" aria-pressed="true">Joyfully yes</button><button type="button" id="no" aria-pressed="false">Sadly no</button></div>
          <label id="cntWrap">Guests coming<select id="rCount"><option>1</option><option selected>2</option><option>3</option><option>4</option><option>5</option></select></label>
          <button class="pill" type="submit">Send on WhatsApp</button>
          <div class="toast" id="toast" role="status"></div>
        </form>
      </div>
    </section>

    <section class="sec pad rv guestbook-section">
      <div class="gcap">Guest book</div><h2>Wishes &amp; Blessings</h2>
      <div class="wishes">
        <div class="wish"><p>Wishing you both a lifetime of love and laughter.</p><small>A dear friend</small></div>
        <div class="wish"><p>May Allah bless your union with barakah and joy.</p><small>Family</small></div>
      </div>
    </section>

    <footer class="end pad">
      <div class="mono" aria-hidden="true"><span>${invite.monogram[0]}</span><span>${invite.monogram[1]}</span></div>
      <div class="names footer-names"><span>${escapeHTML(invite.groomFull)}</span><em>and</em><span>${escapeHTML(invite.brideFull)}</span></div>
      <div class="cap footer-date" data-value="dateLong"></div>
      <div class="footer-duas">With duas, <br> <span>${escapeHTML(invite.duasFrom)}</span></div>
      <div class="made-with">
  Made with <a href="https://festivoinvite.in" target="_blank" rel="noopener">Festivo</a>
</div>
    </footer>`;
}
