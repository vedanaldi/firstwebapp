const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Styled Page</title>
      <style>
        body {
          background-color: #ffd6e7;
          font-family: cursive;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          color: #ff66b2; /* default pink */
        }
        .box {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
          width: 350px;
        }
        h1, p {
          margin: 10px 0;
        }
        h1 { color: #ff66b2; }
        p.quote { 
          color: #c2185b; /* dark pink */
          font-size: 18px;
          margin-top: 15px;
          margin-bottom: 40px; /* double space after quote */
        }
        .follow-instagram {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          text-decoration: none;
          color: #ff66b2; /* pink text */
        }
        .follow-instagram img {
          width: 24px;
          height: 24px;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Veda Naldi V. Santos</h1>
        <p><strong>BA4102</strong></p>
        <p class="quote">"It's not whether you get knocked down, it's whether you get up."</p>

        <!-- Follow me on + Instagram logo + username -->
        <div class="follow-instagram">
          <span>Follow me on</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram Logo">
          <span>veda.n_</span>
        </div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
