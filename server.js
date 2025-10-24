// Multi-Cloud Demo App
// Zeigt welche Cloud Platform die App hostet

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Cloud Provider aus Environment Variable
const CLOUD_PROVIDER = process.env.CLOUD_PROVIDER || 'Unknown';
const REGION = process.env.REGION || 'Unknown';

// Root Endpoint
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Multi-Cloud Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          color: white;
        }
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 50px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }
        h1 { font-size: 3em; margin: 0; }
        .cloud { font-size: 5em; margin: 20px 0; }
        .info { font-size: 1.5em; margin: 10px 0; }
        .badge {
          display: inline-block;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          margin: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🌍 Multi-Cloud Deployment</h1>
        <div class="cloud">☁️</div>
        <div class="info">Running on: <strong>${CLOUD_PROVIDER}</strong></div>
        <div class="info">Region: <strong>${REGION}</strong></div>
        <div class="badge">Deployed via GitHub Actions</div>
        <div class="badge">CI/CD Pipeline Active</div>
      </div>
    </body>
    </html>
  `);
});

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        cloud: CLOUD_PROVIDER,
        region: REGION,
        timestamp: new Date().toISOString()
    });
});

// Info Endpoint
app.get('/api/info', (req, res) => {
    res.json({
        app: 'Multi-Cloud Demo',
        version: '1.0.0',
        cloud: CLOUD_PROVIDER,
        region: REGION,
        port: PORT,
        uptime: process.uptime()
    });
});

// Server starten
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Cloud: ${CLOUD_PROVIDER}`);
    console.log(`Region: ${REGION}`);
});