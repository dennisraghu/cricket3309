import React from 'react';

const CricketHero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>The Gentleman's Game</h1>
        <p style={styles.subtitle}>Cricket - A Sport That Unites Billions</p>
      </div>

      <div style={styles.content}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>&#127951;</div>
            <h3 style={styles.cardTitle}>History</h3>
            <p style={styles.cardText}>
              Cricket originated in England in the 16th century and has grown into one of the
              world's most popular sports, with over 2.5 billion fans globally. From Test matches
              to T20 leagues, the game has constantly evolved while keeping its traditions alive.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>&#127942;</div>
            <h3 style={styles.cardTitle}>Formats</h3>
            <p style={styles.cardText}>
              The sport features three major formats: Test Cricket (the ultimate 5-day challenge),
              One Day Internationals (50 overs per side), and T20 (the explosive 20-over format
              that revolutionized the game and gave birth to leagues like the IPL).
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>&#9734;</div>
            <h3 style={styles.cardTitle}>IPL - The Biggest T20 League</h3>
            <p style={styles.cardText}>
              The Indian Premier League (IPL) is the most-watched T20 league in the world.
              Started in 2008, it features 10 franchise teams battling over 2 months for the
              championship. IPL 2026 is the 19th edition, with Royal Challengers Bengaluru as
              defending champions.
            </p>
          </div>
        </div>

        <div style={styles.teamsSection}>
          <h2 style={styles.teamsTitle}>IPL 2026 Teams</h2>
          <div style={styles.groupContainer}>
            <div style={styles.groupCard}>
              <h3 style={styles.groupLabel}>Group A</h3>
              <ul style={styles.teamList}>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#FFD700'}}></span>Chennai Super Kings</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#3B225F'}}></span>Kolkata Knight Riders</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#EA1A85'}}></span>Rajasthan Royals</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#C41E3A'}}></span>Royal Challengers Bengaluru</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#ED1B24'}}></span>Punjab Kings</li>
              </ul>
            </div>
            <div style={styles.groupCard}>
              <h3 style={styles.groupLabel}>Group B</h3>
              <ul style={styles.teamList}>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#004BA0'}}></span>Mumbai Indians</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#FF822A'}}></span>Sunrisers Hyderabad</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#1C1C2B'}}></span>Gujarat Titans</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#004C93'}}></span>Delhi Capitals</li>
                <li style={styles.teamItem}><span style={{...styles.teamDot, backgroundColor: '#59C1E8'}}></span>Lucknow Super Giants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #0d2137 100%)',
    minHeight: '100vh',
    position: 'relative',
  },
  overlay: {
    textAlign: 'center',
    padding: '80px 20px 40px',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%)',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 800,
    color: '#ffffff',
    margin: 0,
    letterSpacing: '-1px',
    textShadow: '0 2px 20px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#7eb8e0',
    marginTop: 12,
    fontWeight: 300,
  },
  content: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '20px 24px 60px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24,
    marginBottom: 50,
  },
  card: {
    background: 'rgba(255,255,255,0.06)',
    backdropFilter: 'blur(10px)',
    borderRadius: 16,
    padding: '32px 28px',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 12,
    marginTop: 0,
  },
  cardText: {
    color: '#a0b8cc',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    margin: 0,
  },
  teamsSection: {
    textAlign: 'center',
  },
  teamsTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 30,
  },
  groupContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
    maxWidth: 700,
    margin: '0 auto',
  },
  groupCard: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: '28px 24px',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  groupLabel: {
    color: '#5ba3d9',
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: 16,
    marginTop: 0,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  teamList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  teamItem: {
    color: '#d0dce8',
    padding: '10px 0',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  teamDot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    display: 'inline-block',
    flexShrink: 0,
  },
};

export default CricketHero;
