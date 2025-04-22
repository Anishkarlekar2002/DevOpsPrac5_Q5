const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Route for homepage with login form
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Login | Node Jenkins App</title>
      <style>
        body {
          background: linear-gradient(135deg, #74ebd5, #ACB6E5);
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .login-box {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
          width: 320px;
        }
        .login-box h2 {
          text-align: center;
          margin-bottom: 25px;
          color: #333;
        }
        .login-box input[type="text"],
        .login-box input[type="password"] {
          width: 100%;
          padding: 10px;
          margin: 10px 0 20px 0;
          border: none;
          border-bottom: 2px solid #2980b9;
          outline: none;
          background: transparent;
        }
        .login-box input[type="submit"] {
          background-color: #2980b9;
          color: white;
          border: none;
          padding: 12px;
          width: 100%;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .login-box input[type="submit"]:hover {
          background-color: #3498db;
        }
      </style>
    </head>
    <body>
      <div class="login-box">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <input type="text" name="username" placeholder="Username" required>
          <input type="password" name="password" placeholder="Password" required>
          <input type="submit" value="Login">
        </form>
      </div>
    </body>
    </html>
  `);
});

// Handle login POST request
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Dummy authentication
  if (username === "Anish Karlekar" && password === "1234") {
    res.send(
      `<h2>Login Successfull, ${username}! </h2><p> Welcome, ${username}! to FAMT College! Your seat has been successfully confirmed.</p>`
    );
  } else {
    res.send(`<h2>❌ Login failed</h2><p>Invalid username or password.</p>`);
  }
});

app.listen(port, () => {
  console.log(`🌐 Login app running at http://localhost:${port}`);
});




/////////////Question_3
echo Switching to D:\MCA\Practical4_Q4\Node_App
cd D:\MCA\Practical4_Q4\Node_App
echo Current Directory: %CD%

"D:\Program Files\nodejs\npm.exe" -v

echo Running init...
"D:\Program Files\nodejs\npm.exe" init -y

echo Running install...
"D:\Program Files\nodejs\npm.exe" install

echo Running install express...
"D:\Program Files\nodejs\npm.exe" install express

echo Starting the app...
"D:\Program Files\nodejs\npm.exe" index.js



