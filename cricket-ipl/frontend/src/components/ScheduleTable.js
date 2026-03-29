import React, { useState, useEffect } from 'react';
import { getFullSchedule } from '../services/api';

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

const TeamBadge = ({ name }) => {
  const color = TEAM_COLORS[name] || '#666';
  const short = TEAM_SHORT[name] || name.substring(0, 3).toUpperCase();
  return (
    <div style={styles.teamBadge}>
      <span style={{ ...styles.teamDot, backgroundColor: color }}></span>
      <span style={styles.teamName}>{name}</span>
      <span style={{ ...styles.teamShort, color }}>{short}</span>
    </div>
  );
};

const ScheduleTable = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getFullSchedule()
      .then(res => {
        setMatches(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load schedule. Make sure the backend server is running on port 8080.');
        setLoading(false);
      });
  }, []);

  const filteredMatches = filter === 'all'
    ? matches
    : matches.filter(m => m.team1.includes(filter) || m.team2.includes(filter));

  const teams = ['all', ...Object.keys(TEAM_SHORT)];

  if (loading) return <div style={styles.loading}>Loading schedule...</div>;
  if (error) return <div style={styles.error}>{error}</div>;

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>IPL 2026 Full Schedule</h2>
      <p style={styles.subheading}>March 28 - May 31, 2026 &bull; 74 matches &bull; 10 teams</p>

      <div style={styles.filterBar}>
        <span style={styles.filterLabel}>Filter by team:</span>
        <select
          style={styles.select}
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          {teams.map(t => (
            <option key={t} value={t}>
              {t === 'all' ? 'All Teams' : `${TEAM_SHORT[t]} - ${t}`}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Match</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Venue</th>
              <th style={styles.th}>Stage</th>
            </tr>
          </thead>
          <tbody>
            {filteredMatches.map((match, idx) => (
              <tr key={idx} style={idx % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                <td style={styles.td}>{match.matchNumber}</td>
                <td style={styles.tdDate}>
                  <span style={styles.dateDay}>{match.day}</span>
                  <span>{match.date}</span>
                </td>
                <td style={styles.tdMatch}>
                  <TeamBadge name={match.team1} />
                  <span style={styles.vs}>vs</span>
                  <TeamBadge name={match.team2} />
                </td>
                <td style={styles.td}>{match.time}</td>
                <td style={styles.tdVenue}>{match.venue}</td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.stageBadge,
                    backgroundColor:
                      match.group === 'FINAL' ? '#FFD700' :
                      match.group.startsWith('Qualifier') ? '#5ba3d9' :
                      match.group === 'Eliminator' ? '#e74c3c' :
                      match.group === 'Group A' ? '#2ecc71' :
                      match.group === 'Group B' ? '#9b59b6' :
                      '#7f8c8d',
                    color: match.group === 'FINAL' ? '#000' : '#fff',
                  }}>
                    {match.group}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: '#0d1b2a',
    padding: '60px 24px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#fff',
    marginBottom: 8,
  },
  subheading: {
    textAlign: 'center',
    color: '#7eb8e0',
    fontSize: '1.05rem',
    marginBottom: 30,
  },
  filterBar: {
    maxWidth: 1200,
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  filterLabel: {
    color: '#a0b8cc',
    fontSize: '0.9rem',
  },
  select: {
    background: '#1a2d42',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 8,
    padding: '8px 16px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    outline: 'none',
  },
  tableWrapper: {
    maxWidth: 1200,
    margin: '0 auto',
    overflowX: 'auto',
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: 900,
  },
  th: {
    background: '#162538',
    color: '#5ba3d9',
    padding: '14px 16px',
    textAlign: 'left',
    fontSize: '0.8rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottom: '2px solid rgba(91,163,217,0.2)',
  },
  rowEven: {
    background: 'rgba(255,255,255,0.02)',
  },
  rowOdd: {
    background: 'rgba(255,255,255,0.05)',
  },
  td: {
    padding: '14px 16px',
    color: '#c0d0e0',
    fontSize: '0.9rem',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  tdDate: {
    padding: '14px 16px',
    color: '#c0d0e0',
    fontSize: '0.9rem',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    whiteSpace: 'nowrap',
  },
  dateDay: {
    display: 'inline-block',
    background: '#1a3a5c',
    color: '#5ba3d9',
    padding: '2px 8px',
    borderRadius: 4,
    fontSize: '0.75rem',
    fontWeight: 600,
    marginRight: 8,
  },
  tdMatch: {
    padding: '10px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  teamBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
  },
  teamDot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    display: 'inline-block',
    flexShrink: 0,
  },
  teamName: {
    color: '#d0dce8',
    fontSize: '0.88rem',
  },
  teamShort: {
    fontWeight: 700,
    fontSize: '0.75rem',
    marginLeft: 4,
  },
  vs: {
    color: '#5b7a8e',
    fontSize: '0.8rem',
    fontWeight: 600,
    margin: '0 12px',
  },
  tdVenue: {
    padding: '14px 16px',
    color: '#8a9bb0',
    fontSize: '0.85rem',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    maxWidth: 220,
  },
  stageBadge: {
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  loading: {
    textAlign: 'center',
    color: '#7eb8e0',
    padding: 60,
    fontSize: '1.1rem',
  },
  error: {
    textAlign: 'center',
    color: '#e74c3c',
    padding: 60,
    fontSize: '1rem',
    background: '#0d1b2a',
  },
};

export default ScheduleTable;
