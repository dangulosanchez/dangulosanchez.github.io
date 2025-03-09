const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));



// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: process.env.EMAIL_USER,  // your email
          pass: process.env.EMAIL_PASS,  // your app password
      },
  });

  const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Your email
      subject: `New inquiry from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`
  };

  try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ success: true });
  } catch (error) {
      res.status(500).send({ success: false, error: error.message });
  }
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const response = await fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
  });

  const result = await response.json();

  if (response.success) {
      alert("Thanks for your message! We'll get back to you soon.");
      document.querySelector("form").reset();
  } else {
      alert("Something went wrong. Please try again later.");
      console.error(response.error);
  }
});



// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
