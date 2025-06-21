import './style.css'

// Intergalatic Sport Clubs data
const clubs = [
  {
    name: 'Moonshot Tennis',
    description: 'Experience zero-gravity rallies and lunar leaps in the most popular racquet sport on the Moon. Moonshot Tennis is famous for its crater-court tournaments and cosmic trick shots.',
    schedule: [
      { day: 'Monday', time: '18:00 - 20:00 Lunar Time' },
      { day: 'Thursday', time: '20:00 - 22:00 Lunar Time' }
    ]
  },
  {
    name: 'Neptune Swimming',
    description: 'Swim through shimmering blue rings and anti-gravity pools. Neptune Swimming Club hosts interplanetary meets in liquid methane pools with breathtaking underwater views.',
    schedule: [
      { day: 'Tuesday', time: '16:00 - 18:00 Neptune Standard' },
      { day: 'Saturday', time: '10:00 - 12:00 Neptune Standard' }
    ]
  },
  {
    name: 'Solar Spa and Sauna',
    description: 'Relax and rejuvenate in solar-powered saunas orbiting the sun. Enjoy plasma steam rooms and sunspot therapy sessions for the ultimate cosmic wellness.',
    schedule: [
      { day: 'Wednesday', time: 'All Day (by reservation)' },
      { day: 'Sunday', time: 'All Day (by reservation)' }
    ]
  },
  {
    name: 'Planet Sized Pinball',
    description: 'Join the galaxy’s largest pinball league, where planets are the bumpers and comets are the balls. A sport of strategy, speed, and stellar fun!',
    schedule: [
      { day: 'Friday', time: '19:00 - 22:00 Galactic Mean Time' },
      { day: 'Saturday', time: '14:00 - 17:00 Galactic Mean Time' }
    ]
  }
];

function renderClubs() {
  return clubs.map(club => `
    <section class="club-card" tabindex="0" aria-labelledby="${club.name.replace(/\s/g, '-').toLowerCase()}-title">
      <h2 id="${club.name.replace(/\s/g, '-').toLowerCase()}-title">${club.name}</h2>
      <p>${club.description}</p>
      <h3>Schedule</h3>
      <ul>
        ${club.schedule.map(s => `<li><strong>${s.day}:</strong> ${s.time}</li>`).join('')}
      </ul>
    </section>
  `).join('');
}

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Intergalatic Sport Clubs</h1>
    <p class="subtitle">Explore the most famous sports clubs across the cosmos!</p>
  </header>
  <main class="clubs-container">
    ${renderClubs()}
  </main>
  <footer>
    <p>&copy; 2125 Intergalatic Sport Clubs. All rights reserved across the universe.</p>
  </footer>
`;
