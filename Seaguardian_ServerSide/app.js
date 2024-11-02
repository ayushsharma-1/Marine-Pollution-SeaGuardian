require('events').EventEmitter.defaultMaxListeners = 40;

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const Reports = require('./models/details');
const NGORegistration = require('./models/registerNGO');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Database Connection
const { connectDB } = require('./db/connect');
connectDB("Sea_Guardian");


app.use(express.static(path.join(__dirname, '..','SeaGuardian_ClientSide', "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'SeaGuardian_ClientSide', 'public', 'home.html'));
});
const pages = ["donate", "latest", "ourProgram", "ngo-register", "captivity", "extinct", "details", "fishery", "pollution", "shark", "whaling", "reset-password", "otp-verify", "ques1", "ques2", "ques3", "ques4", "ques5", "FAQs"];
pages.forEach(page => {
    app.get(`/${page}`, (req, res) => {
        res.sendFile(path.join(__dirname,'..','SeaGuardian_ClientSide', "public", `${page}.html`));
    });
});


// Route to serve CSS files
const cssFiles = ["login", "otp", "profile", "donate", "home", "ourProgram", "theLatest", "style", "style2", "action","faqs", "ques"];
cssFiles.forEach(file => {
    app.get(`/css/${file}.css`, (req, res) => {
        res.sendFile(path.join(__dirname,'..','SeaGuardian_ClientSide', "css", `${file}.css`));
    });
});


// Route to serve JS files
const jsFiles = ["login", "firebase", "data", "otp-send", "ourProgram","latest", "action","2fury.min.js"];
jsFiles.forEach(file => {
    app.get(`/js/${file}.js`, (req, res) => {
        res.sendFile(path.join(__dirname,'..','SeaGuardian_ClientSide', "js", `${file}.js`));
    });
});



app.use("/assets", express.static(path.join(__dirname,'..','SeaGuardian_ClientSide', "assets")));
// Route to serve asset files
const assetFiles = [
    "instagram.svg",
    "linkedin.svg",
    "twitter.svg",
    "youtube.svg",
    "github.svg",
    "email.svg",
    "google.svg",
    "pollution_2.png",
    "confine_top.png",
    "confine_1.png",
    "confine_2.png",
    "confine_3.png",
    "confine_4.png",
    "confine_5.png",
    "demolition-waste-scaled.jpg",
    "donate.jpg",
    "drew.svg",
    "earth.svg",
    "endangeegd53",
    "two-hectors-dolphins-cephalorhynchus-hectori-royalty-free-image-1589224809.jpg",
    "Types-of-Waste-Landscape-Composting-BW-F.jpg",
    "vecteezy_the-fish-swims-under-the-sea-with-a-breathing-device_36430201.mov.crdownload",
    "westbengal.png",
    "whaling.png.png",
    "whaling 2.png.png",
    "whaling 3.png.png",
    "whaling 4.png.png",
    "endangeeerd2.png.png",
    "endangered_top.png.png",
    "endangered4.png.png",
    "endangered5.png.png",
    "extinct.png.png",
    "fishery_1.png.png",
    "fishery_2.jpg",
    "fishery_3.png.png",
    "fishery_4.png.png",
    "fishery_5.png.png",
    "fishery_top.gif",
    "footer_1.gif",
    "github.svg",
    "google.svg",
    "green-turtle-swimming-in-open-water-royalty-free-image-1672872502 (1).jpg",
    "pollution_3.png.png",
    "pollution_4.png.png",
    "pollution_5.png.png",
    "pollution_6.png.png",
    "pollution_top.png.png",
    "Screenshot 2024-04-22 155354.png",
    "Screenshot 2024-04-22 155413.png",
    "Screenshot 2024-04-22 155431.png",
    "Screenshot 2024-04-22 155446.png",
    "Screenshot 2024-04-22 155459.png",
    "Screenshot 2024-04-22 155517.png",
    "shark_2.png",
    "shark_3.png",
    "shark_4.png",
    "shark_5.png",
    "ques1img1.png",
    "ques1img2.png",
    "ques2img1.png",
    "ques2img2.png",
    "ques2img3.png",
    "ques3img1.png",
    "ques3img2.png",
    "ques4img1.png",
    "ques4img2.png",
    "ques5img1.png",
    "ques5img2.png",
    "ques5img3.png"
];

assetFiles.forEach((file) => {
    app.get(`/assets/${file}`, (req, res) => {
        res.sendFile(path.join(__dirname, "assets", file));
    });
});

const multer = require('multer');
const AWS = require('aws-sdk');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");


// Configure multer for in-memory storage
const upload = multer({ storage: multer.memoryStorage() });

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});


// Report submission route with image upload
app.post('/Report', upload.single('image'), async (req, res) => {
    try {
        const { name, date, address, contact, email, locationPollution, typeOfPollution, areaOfPollution, polybagsPresent, latitude, longitude } = req.body;

        let imageUrl = '';
        if (req.file) {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `${Date.now()}_${req.file.originalname}`,
                Body: req.file.buffer,
                ContentType: req.file.mimetype,
            };
            

            const command = new PutObjectCommand(params);
            await s3.send(command);
            imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;
        }

        const report = new Reports({
            name,
            date,
            address,
            contact,
            email,
            locationPollution,
            typeOfPollution,
            areaOfPollution,
            polybagsPresent,
            image: imageUrl,
            latitude,
            longitude
        });

        const savedReport = await report.save();
        res.status(201);
        setTimeout(() => {
            res.redirect("home.html");
        }, 2000);

    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Failed to save the report.' }); 
    }
});



  app.post('/RegisterNGO', async (req, res) => {
    try {
        const existingUser = await NGORegistration.findOne({ registrationNo: req.body.registrationNo });
        if (existingUser) {
            console.log("user exist")
            console.log({ error: "Registration Number already exists." });
        }
        const newNGORegistration = new NGORegistration({
            ngoName: req.body.ngoName,
            Address: {
                addressLine1: req.body.addressLine1,
                addressLine2: req.body.addressLine2
            },
            registrationNo: req.body.registrationNo,
            workingAreas: req.body.workingAreas,
            purpose: req.body.purpose
        });

        const registered = await newNGORegistration.save();
        res.status(201).redirect("home.html");
    } catch (error) {
        console.error(error);
        res.status(500).send("Registration failed. Please try again later.");
    }
});


app.post("/otp-verify", (req, res) => {
    const userEmail = req.body.userEmail;
    const otp = generateOtp();
    sendOtpEmail(userEmail, otp);
    res.json({ message: "OTP sent successfully." });
});

function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

function sendOtpEmail(userEmail, otp) {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAILID ,
            pass: process.env.PASS,
        },
    });

    // Email content
    const mailOptions = {
        from: process.env.EMAILID,
        to: userEmail,
        subject: "OTP for Signing Up",
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
            console.error("Error:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });
}
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});