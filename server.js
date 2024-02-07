const express = require('express');
const { Storage } = require('@google-cloud/storage');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up GCS client
const storage = new Storage({
    keyFilename: process.env[''],
    projectId: process.env[''],
});

// Set your GCS bucket name
const bucketName = process.env['incident-reports-action'];
const bucket = storage.bucket('incident-reports-action');

// Use Multer with GCS storage
const multerGCS = multer({
  storage: multer.memoryStorage(),
});

// Example route to handle file upload
app.post('/upload', multerGCS.single('image'), async (req, res) => {
    try {
    const userName = req.body.userName || 'defaultUser';
    const location = {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    const folderPath = `${userName}/`;
    const filePath = `${folderPath}coordinates.txt`;

    // Write coordinates to the file in GCS
    const file = bucket.file(filePath);
    await file.save(`Latitude: ${location.latitude}, Longitude: ${location.longitude}`);

    // Upload the image file to GCS
    const imageFile = bucket.file(`${folderPath}${req.file.originalname}`);
    const stream = imageFile.createWriteStream();
    stream.end(req.file.buffer);

    // Handle the stream events and send response
    stream.on('finish', () => {
      res.send('Image and Location submitted successfully.');
    });
    stream.on('error', (err) => {
      console.error('Error uploading image to GCS:', err);
      res.status(500).send('Internal Server Error');
    });
} catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'donate.html'));
});

app.get('/latest', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'latest.html'));
});

app.get('/ourProgram', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ourProgram.html'));
});



//js



app.get('/js/2purify.min.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', '2purify.min.js'));
});

app.get('/js/blog.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'blog.js'));
});

app.get('/js/ourProgram.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'ourProgram.js'));
});


//css
app.get('/css/blog.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'blog.css'));
});

app.get('/css/donate.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'donate.css'));
});

app.get('/css/home.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'home.css'));
});

app.get('/css/ourProgram.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'ourProgram.css'));
});

app.get('/css/theLatest.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'theLatest.css'));
});

//action
app.get('/action', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'action.html'));
});

app.get('/css/action.css', (req, res) => {
    res.sendFile(path.join(__dirname,'css', 'action.css'));
});
app.get('/js/action.js', (req, res) => {
    res.sendFile(path.join(__dirname,'js', 'action.js'));
});


app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/assets/instagram.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'instagram.svg'));
});

app.get('/assets/linkedin.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'linkedin.svg'));
});

app.get('/assets/twitter.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'twitter.svg'));
});

app.get('/assets/youtube.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'youtube.svg'));
});

app.get('/assets/github.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'github.svg'));
});


//login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'public',  'signup.html'));
});

app.get('/ngo-register', (req, res) => {
    res.sendFile(path.join(__dirname,'public',  'ngo-register.html'));
});

app.get('/reset-password', (req, res) => {
    res.sendFile(path.join(__dirname,'public',  'reset-pass.html'));
});
app.get('/otp-verify', (req, res) => {
    res.sendFile(path.join(__dirname,'public',  'otp-verify.html'));
});
app.get('/assets/email.svg', (req, res) => {
    res.sendFile(path.join(__dirname,  'assets', 'email.svg'));
});
app.get('/assets/google.svg', (req, res) => {
  res.sendFile(path.join(__dirname,  'assets', 'google.svg'));
});

app.get('/css/login.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'login.css'));
});
app.get('/css/otp.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'otp.css'));
  });

app.get('/js/login.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'login.js'));
});

app.get('/js/firebase.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'firebase.js'));
});
app.get('/js/data.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'data.js'));
  });
  app.get('/js/otp-send.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'otp-send.js'));
});

app.post('/submitNGORegistrationForm', (req, res) => {
    const ngoName = req.body.ngoName;
    const jsonData = JSON.stringify(req.body);
    if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }

    const filePath = `data/${ngoName}.json`;
    fs.writeFileSync(filePath, jsonData);

    res.json({ message: 'NGO registration data saved successfully.' });
});


app.post('/otp-verify', (req, res) => {
  const userEmail = req.body.userEmail;
  const otp = generateOtp();
  sendOtpEmail(userEmail, otp);
  res.json({ message: 'OTP sent successfully.' });
});

function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function sendOtpEmail(userEmail, otp) {
  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
          user: 'ayushsharma1010@outlook.com',
          pass: 'ntqtnrrkuxdetqlv', // Use your App Password here
      },
  });

  // Email content
  const mailOptions = {
      from: 'ayushsharma1010@outlook.com',
      to: userEmail,
      subject: 'OTP for Signing Up',
      html: `
      <head>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  color: #333;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              .header {
                  text-align: center;
                  margin-bottom: 20px;
              }
      
              .header h1 {
                  color: #4CAF50;
              }
      
              .content {
                  text-align: center;
              }
      
              .content img {
                  max-width: 100%;
                  height: auto;
                  border-radius: 8px;
                  margin-bottom: 20px;
              }
      
              .footer {
                  text-align: center;
                  margin-top: 20px;
              }
          </style>
      </head>
      
      <body>
          <div class="container">
              <div class="header">
                  <h1>Sea Guardian OTP</h1>
              </div>
              <div class="content">
                  <p>Dear User,</p>
                  <p>Your OTP for SeaGuardian access is:</p>
                  <h2>${otp}</h2>
              </div>
              <div class="footer">
                  <p>Thank you for supporting Marine conservation!</p>
              </div>
          </div>
      </body>
      
      </html>
      `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Error:', error);
      } else {
          console.log('Email sent:', info.response);
      }
  });
}





app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});