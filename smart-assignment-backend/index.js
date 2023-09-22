const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const Pusher = require('pusher');
// this is for Auth and Submiting files routes 
var routes = require('./routes/routes');
// this is for the messages models to save in db
const Message = require('./models/message');
// this is for the videos models to save in db
const Video = require('./models/video'); 


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Store videos in a separate directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use('/uploads', express.static('uploads')); 

// Pusher is a platform that i have used to creat chat feature
// https://pusher.com/tutorials/

const pusher = new Pusher({
  appId: "1673480",    // use your crediantials
  key: "9a5470d17ebacab25ff0",  // replace with your key
  secret: "8ea825fedc4659524394",  // replace with your key
  cluster: "ap2",  
  useTLS: true
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200'],
}));

app.use(express.json());
app.use(routes);

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Smart-Mentoring", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected successfully");
  } catch (error) {
    console.log(error);
  }
}

connectToDatabase();

//uploading the videoos for the students

app.post('/upload', upload.single('video'), (req, res) => {
  console.log('Received upload request'); 
  const { originalname, path } = req.file;
  console.log('Original Name:', originalname); 
  console.log('File Path:', path); 

  const video = new Video({ name: originalname, path });
  video.save().then(() => {
    console.log('Video saved successfully'); 
    res.json({ message: 'Video uploaded successfully' });
  }).catch((error) => {
    console.error('Error saving video:', error); 
    res.status(500).json({ error: 'Error saving video' });
  });
});

//uploading the videoos for the students

app.get('/videos', (req, res) => {
  Video.find({}) 
    .exec()
    .then((videos) => {
      res.json(videos);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

//Downloading the videoos for the students
app.get('/download/:id', (req, res) => {
  const videoId = req.params.id;

  Video.findById(videoId)
    .then((video) => {
      if (!video) {
        res.status(404).json({ error: 'Video not found' });
      } else {
        const filePath = path.join(__dirname, 'uploads', video.name); // Construct full file path for videos
        const fileStream = fs.createReadStream(filePath);
        res.setHeader('Content-Type', 'video/mp4'); 
        res.setHeader('Content-Disposition', `attachment; filename="${video.name}"`);

        // Pipe the video file to the response
        fileStream.pipe(res);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



// Saving the messages and posting messages

app.post('/msg', async (req, res) => {
  try {
    const { username, message } = req.body;

    // Save the message to MongoDB
    const newMessage = new Message({
      username,
      message,
    });

    await newMessage.save();

    // Trigger the Pusher event
    await pusher.trigger('chat', 'message', {
      username,
      message,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Error sending message' });
  }
});

// get the messages form db and show the messages with username

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ _id: -1 }).limit(10); 

    res.json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ error: 'Error retrieving messages' });
  }
});


//connected to port 9000

app.listen(9000, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected port");
  }
});