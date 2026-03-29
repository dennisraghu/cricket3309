import React, { useState } from 'react';
import { getTomorrowMatches } from '../services/api';

const TEAM_COLORS = {
  'Chennai Super Kings': '#FFD700',
  'Kolkata Knight Riders': '#3B225F',
  'Rajasthan Royals': '#EA1A85',
  'Royal Challengers Bengaluru': '#C41E3A',
  'Punjab Kings': '#ED1B24',
  'Mumbai Indians': '#004BA0',
  'Sunrisers Hyderabad': '#FF822A',
  'Gujarat Titans': '#1C1C2B',
  'Delhi Capitals': '#004C93',
  'Lucknow Super Giants': '#59C1E8',
};

const TEAM_SHORT = {
  'Chennai Super Kings': 'CSK',
  'Kolkata Knight Riders': 'KKR',
  'Rajasthan Royals': 'RR',
  'Royal Challengers Bengaluru': 'RCB',
  'Punjab Kings': 'PBKS',
  'Mumbai Indians': 'MI',
  'Sunrisers Hyderabad': 'SRH',
  'Gujarat Titans': 'GT',
  'Delhi Capitals': 'DC',
  'Lucknow Super Giants': 'LSG',
};

const TomorrowMatch = () => {
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setMatches(null);
    getTomorrowMatches()
      .then(res => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch tomorrow\'s schedule. Is the backend running?');
        setLoading(false);
      });
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.box}>
          <div style={styles.iconRow}>
            <span style={styles.icon}>&#128197;</span>
            <h2 style={styles.heading}>Tomorrow's Match</h2>
          </div>
          <p style={styles.dateText}>{tomorrowStr}</p>
          <p style={styles.description}>
            Click the button below to fetch IPL 2026 matches scheduled for tomorrow.
          </p>

          <button
            style={styles.button}
            onClick={handleSubmit}
            disabled={loading}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            {loading ? 'Fetching...' : 'Get Tomorrow\'s Schedule'}
          </button>

          {error && <p style={styles.error}>{error}</p>}

          {matches && matches.length === 0 && (
            <div style={styles.noMatch}>
              <span style={styles.noMatchIcon}>&#128542;</span>
              <p>No IPL matches scheduled for tomorrow.</p>
            </div>
          )}

          {matches && matches.length > 0 && (
            <div style={styles.results}>
              {matches.map((match, idx) => {
                const color1 = TEAM_COLORS[match.team1] || '#666';
                const color2 = TEAM_COLORS[match.team2] || '#666';
                const short1 = TEAM_SHORT[match.team1] || match.team1.substring(0, 3);
                const short2 = TEAM_SHORT[match.team2] || match.team2.substring(0, 3);
                return (
                  <div key={idx} style={styles.matchCard}>
                    <div style={styles.matchHeader}>
                      <span style={styles.matchNum}>Match #{match.matchNumber}</span>
                      <span style={{
                        ...styles.stageBadge,
                        backgroundColor:
                          match.group === 'FINAL' ? '#FFD700' :
                          match.group.startsWith('Qualifier') ? '#5ba3d9' :
                          match.group === 'Eliminator' ? '#e74c3c' :
                          '#2ecc71',
                        color: match.group === 'FINAL' ? '#000' : '#fff',
                      }}>{match.group}</span>
                    </div>
                    <div style={styles.matchBody}>
                      <div style={styles.teamSide}>
                        <div style={{ ...styles.teamCircle, borderColor: color1 }}>
                          <span style={{ ...styles.teamCode, color: color1 }}>{short1}</span>
                        </div>
                        <span style={styles.teamFullName}>{match.team1}</span>
                      </div>
                      <div style={styles.vsContainer}>
                        <span style={styles.vsText}>VS</span>
                        <span style={styles.matchTime}>{match.time}</span>
                      </div>
                      <div style={styles.teamSide}>
                        <div style={{ ...styles.teamCircle, borderColor: color2 }}>
                          <span style={{ ...styles.teamCode, color: color2 }}>{short2}</span>
                        </div>
                        <span style={styles.teamFullName}>{match.team2}</span>
                      </div>
                    </div>
                    <div style={styles.matchFooter}>
                      <span style={styles.venueText}>{match.venue}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(180deg, #0d1b2a 0%, #162538 100%)',
    padding: '60px 24px 80px',
  },
  container: {
    maxWidth: 700,
    margin: '0 auto',
  },
  box: {
    background: 'rgba(255,255,255,0.04)',
    borderRadius: 20,
    padding: '40px 36px',
    border: '1px solid rgba(255,255,255,0.08)',
    textAlign: 'center',
  },
  iconRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 8,
  },
  icon: {
    fontSize: '2rem',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: 0,
  },
  dateText: {
    color: '#5ba3d9',
    fontSize: '1rem',
    marginTop: 8,
    fontWeight: 500,
  },
  description: {
    color: '#8a9bb0',
    fontSize: '0.95rem',
    marginBottom: 24,
  },
  button: {
    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: 12,
    padding: '14px 36px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
  },
  error: {
    color: '#e74c3c',
    marginTop: 20,
    fontSize: '0.9rem',
  },
  noMatch: {
    marginTop: 30,
    color: '#8a9bb0',
    fontSize: '1rem',
  },
  noMatchIcon: {
    fontSize: '2.5rem',
    display: 'block',
    marginBottom: 10,
  },
  results: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  matchCard: {
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 24,
    border: '1px solid rgba(255,255,255,0.1)',
  },
  matchHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  matchNum: {
    color: '#7eb8e0',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
  stageBadge: {
    padding: '4px 12px',
    borderRadius: 6,
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  matchBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 16,
    flexWrap: 'wrap',
  },
  teamSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    minWidth: 120,
  },
  teamCircle: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    border: '3px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.05)',
  },
  teamCode: {
    fontSize: '1.2rem',
    fontWeight: 800,
  },
  teamFullName: {
    color: '#c0d0e0',
    fontSize: '0.85rem',
    textAlign: 'center',
  },
  vsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  vsText: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: 800,
  },
  matchTime: {
    color: '#5ba3d9',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  matchFooter: {
    marginTop: 16,
    paddingTop: 12,
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  venueText: {
    color: '#6b7c8e',
    fontSize: '0.85rem',
  },
};

export default TomorrowMatch;
