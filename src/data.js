export const invite = {
  bride: 'Hiba',
  groom: 'Shahid',
  brideFull: 'Hiba',
  groomFull: 'Shahid',
  monogram: 'SH',
  // Events are shown in this order. Add another object to extend the program.
  // The first event also drives the hero date/venue, countdown, calendar, and default RSVP event.
  // dateTime should be ISO 8601 with the event's UTC offset; timeText is displayed verbatim.
  // Give every event a unique id. Leave mapUrl empty to omit its map link.
  events: [
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      dateTime: '2026-12-21T11:30:00+05:30',
      timeText: '11:00 am - 3:00 pm',
      venue: 'Akbar Auditorium',
      venueShort: 'Akbar Auditorium',
      address: 'KK junction, Ponnani, Keralam 679577',
      mapUrl: 'https://www.google.com/maps/place/Akbar+Auditorium/@10.7829375,75.9464876,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7bba9ab41e133:0xcb942773593aec40!8m2!3d10.7829375!4d75.9490625!16s%2Fg%2F1tj3jhlm?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D](https://www.google.com/maps/place/Akbar+Auditorium/@10.7829375,75.9464876,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7bba9ab41e133:0xcb942773593aec40!8m2!3d10.7829375!4d75.9490625!16s%2Fg%2F1tj3jhlm?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D',
    },
        {
      id: "nikah",
      name : "Nikah", 
      dateTime: '2026-12-20T11:00:00+05:30',
      timeText: "11:00 am",
      venue: "",
      venueShort: "",
      address: ""

    },
  ],
  groomParents: 'Daughter of Mr. Bava (Late) & Mrs. Suhara',
  groomHome: "Achipravalappil (H), Puzhambram Gramam, Ponnani",
  brideParents: 'Son of Mr. Mohammed (Late) & Mrs. Maimoona',
  brideHome: "Pottachola (H) , Kavanchery",
  duasFrom: 'Friends & Relatives',
  rsvpWhatsApp: '9746797827',
  portrait: '/assets/img7.jpeg',
  gallery: ['/assets/img1.jpeg', '/assets/img2.jpeg', '/assets/img3.jpeg', '/assets/img4.jpeg'],
};

export const basmala = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
