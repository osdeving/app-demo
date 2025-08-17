import express from 'express';
const app = express();

app.get('/health', (_, res) => res.json({ ok: true, ts: Date.now() }));
app.get('/', (_, res) => res.send('🚀 Hello from mini-backend'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API on :${PORT}`));
