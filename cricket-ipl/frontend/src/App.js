import React from 'react';
import CricketHero from './components/CricketHero';
import ScheduleTable from './components/ScheduleTable';
import TomorrowMatch from './components/TomorrowMatch';

const App = () => {
  return (
    <div style={styles.app}>
      <nav style={styles.nav}>
        <span style={styles.logo}>IPL 2026</span>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>About Cricket</a>
          <a href="#schedule" style={styles.navLink}>Schedule</a>
          <a href="#tomorrow" style={styles.navLink}>Tomorrow's Match</a>
        </div>
      </nav>

      <div id="about">
        <CricketHero />
      </div>
      <div id="schedule">
        <ScheduleTable />
      </div>
      <div id="tomorrow">
        <TomorrowMatch />
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>Cricket IPL 2026 Schedule App &bull; Built with Java Spring Boot &amp; React</p>
      </footer>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    margin: 0,
    padding: 0,
    background: '#0a1628',
    minHeight: '100vh',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    background: 'rgba(10,22,40,0.9)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  logo: {
    color: '#ffffff',
    fontSize: '1.4rem',
    fontWeight: 800,
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: 24,
  },
  navLink: {
    color: '#7eb8e0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  footer: {
    background: '#060d17',
    padding: '24px',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.04)',
  },
  footerText: {
    color: '#4a5568',
    fontSize: '0.85rem',
    margin: 0,
  },
};

export default App;
