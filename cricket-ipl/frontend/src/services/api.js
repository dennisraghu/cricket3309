import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getFullSchedule = () => axios.get(`${API_BASE}/schedule`);
export const getTomorrowMatches = () => axios.get(`${API_BASE}/schedule/tomorrow`);
export const getMatchesByDate = (date) => axios.get(`${API_BASE}/schedule/date/${date}`);
