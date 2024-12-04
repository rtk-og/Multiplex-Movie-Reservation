const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");
const userdetail = require("./models/signup");
const adminmodel = require("./models/admin");
const moviemodel = require("./models/movies");
const bookmodel = require("./models/booking");
const seatdatamodel = require("./models/seatmodel");
const theatermodel = require("./models/theater");
const screenmodel = require("./models/screen");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
"mongodb+srv://datikaritik:xCtEJydrw3Hr3h09@moviebookingapplication.yaerq.mongodb.net/moviebookingapplication?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const saltRounds = 10;

app.get(`/api/bookedmovies/`, (req, res) => {
  bookmodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.get(`/api/ceatsbooked/`, (req, res) => {
  const moviename = req.query.moviename;
  const bookingdate = req.query.bookingdate;
  const theatername = req.query.theatername;
  console.log(moviename, bookingdate, theatername);
  seatdatamodel.find(
    {
      moviename: moviename,
      bookingdate: bookingdate,
      theatername: theatername
    },
    (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
      console.log(result);
    }
  );
});

app.delete(`/api/cancelbooking/`, async (req, res) => {
  const email = req.query.email;
  const theatername = req.query.theatername;
  const moviename = req.query.moviename;
  const ceatnames = req.query.ceatnames;
  console.log(email, moviename);
  await bookmodel.remove({
    email: email,
    theatername: theatername,
    moviename: moviename
  });
  await seatdatamodel.remove({
    moviename: moviename,
    theatername: theatername,
    ceatnames: ceatnames
  });
});

app.delete(`/api/deletemovie/`, async (req, res) => {
  const id = req.query.id;
  await moviemodel.remove({
    _id: id
  });
});

app.get("/api/retrieve/:password", (req, res) => {
  const password = req.params.password;
  userdetail.find({ password: password }, (err, result) => {
    if (err) {
      res.send(err);
    }
    const id = result[0]._id;
    const token = jwt.sign({ id }, "jwt-Secret-key", {
      expiresIn: "1d" //10 - 10 sec
    });
    res.send({ result: result, token: token });
    console.log(result);
  });
});

app.get(`/api/mybooking/`, (req, res) => {
  const email = req.query.email;
  const mobile = req.query.mobile;
  console.log(email, mobile);
  bookmodel.find({ email: email, mobile: mobile }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.get("/api/admin/:password", (req, res) => {
  const password = req.params.password;
  console.log(password);
  adminmodel.find({ password: password }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.post("/api/insert", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;
  const mobile = req.body.mobile;
  console.log(name, email, password, address, mobile);
  const signup = new userdetail({
    name: name,
    email: email,
    password: password,
    address: address,
    mobile: mobile
  });
  try {
    await signup.save();
    res.send("Your Registration Was Successfull");
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/booknow", async (req, res) => {
  const currentdate = req.body.currentdate;
  const username = req.body.username;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const bookingdate = req.body.bookingdate;
  const moviename = req.body.moviename;
  const moviewatchers = req.body.moviewatchers;
  const totalceats = req.body.totalceats;
  const ceatnames = req.body.ceatnames;
  const totalcost = req.body.totalcost;
  var theatername = req.body.theatername;
  var screenname = req.body.screenname;
  var showtime = req.body.showtime;
  console.log(
    currentdate,
    username,
    email,
    mobile,
    bookingdate,
    moviename,
    moviewatchers,
    totalceats,
    ceatnames,
    totalcost,
    theatername,
    screenname,
    showtime
  );

  const bookdata = new bookmodel({
    currentdate: currentdate,
    username: username,
    email: email,
    mobile: mobile,
    bookingdate: bookingdate,
    moviename: moviename,
    moviewatchers: moviewatchers,
    totalceats: totalceats,
    ceatnames: ceatnames,
    totalcost: totalcost,
    theatername: theatername,
    screenname: screenname,
    showtime: showtime
  });
  try {
    await bookdata.save();
    res.send("Ticket booked successfully");
  } catch (error) {
    console.log(error);
  }

  const movieseatdata = new seatdatamodel({
    bookingdate: bookingdate,
    moviename: moviename,
    ceatnames: ceatnames,
    theatername: theatername
  });
  try {
    await movieseatdata.save();
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/movieupload", async (req, res) => {
  const movieimageurl = req.body.movieimageurl;
  const movievideourl = req.body.movievideourl;
  const theatername = req.body.theatername;
  const screenname = req.body.screenname;
  const moviename = req.body.moviename;
  const ticketcost = req.body.ticketcost;
  const moviedescription = req.body.moviedescription;
  const actorname = req.body.actorname;
  const directorname = req.body.directorname;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  console.log(
    movieimageurl,
    movievideourl,
    moviename,
    theatername,
    screenname,
    ticketcost,
    moviedescription,
    actorname,
    directorname,
    startdate,
    enddate
  );
  const moviedata = new moviemodel({
    movieimageurl: movieimageurl,
    movievideourl: movievideourl,
    moviename: moviename,
    theatername: theatername,
    screenname: screenname,
    ticketcost: ticketcost,
    moviedescription: moviedescription,
    actorname: actorname,
    directorname: directorname,
    startdate: startdate,
    enddate: enddate
  });
  try {
    await moviedata.save();
    res.send("Movie Added Successfully");
  } catch (error) {
    console.log(error);
  }
});

//new logics
app.get("/api/theaterlist/", (req, res) => {
  theatermodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.post("/api/addtheater", async (req, res) => {
  const theaterimageurl = req.body.theaterimageurl;
  const theatername = req.body.theatername;
  const theateremail = req.body.theateremail;

  console.log(theaterimageurl, theatername, theateremail);
  const theaterdata = new theatermodel({
    theaterimageurl: theaterimageurl,
    theatername: theatername,
    email: theateremail
  });
  try {
    await theaterdata.save();
    res.send("Theater Added Successfully");
  } catch (error) {
    console.log(error);
  }
});

app.delete(`/api/deletetheater/`, async (req, res) => {
  const id = req.query.id;
  await theatermodel.remove({
    _id: id
  });
});

app.get("/api/movielist/", (req, res) => {
  const { screenname, theatername } = req.query;
  moviemodel.find(
    { screenname: screenname, theatername: theatername },
    (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
      console.log(result);
    }
  );
});

app.post("/api/addscreen", async (req, res) => {
  const screenname = req.body.screenname;
  const theateremail = req.body.theateremail;

  console.log(screenname, theateremail);
  const theaterdata = new screenmodel({
    screenname: screenname,
    theateremail: theateremail
  });
  try {
    await theaterdata.save();
    res.send("Screen Added Successfully");
  } catch (error) {
    console.log(error);
  }
});

app.delete(`/api/deletescreen/`, async (req, res) => {
  const id = req.query.id;
  await screenmodel.remove({
    _id: id
  });
});

app.get("/api/screenlist/:theatername", (req, res) => {
  const theatername = req.params.theatername;
  console.log(theatername);
  screenmodel.find({ theatername: theatername }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
