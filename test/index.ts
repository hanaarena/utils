import { get } from '../dist/index.js';

async function fetchExample() {
  // GET request
  try {
    const data = await get('/api/data');
    console.log('GET result:', data);
  } catch (e) {
    console.error('GET error:', e);
  }
}

fetchExample();
