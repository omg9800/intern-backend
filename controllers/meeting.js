const express = require("express");
const Meeting = require("../models/meeting");
const router = express.Router();

module.exports.getMeetings = async (req, res) => {
  const meetings = await Meeting.find();
  res.status(200).send(meetings);
};

module.exports.addMeeting = (req, res) => {
  const meeting = new Meeting({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    stime: req.body.stime,
    etime: req.body.etime,
    userId: req.body.userId,
  });

  console.log(meeting);
  meeting
    .save()
    .then((meeting) => res.status(200).send(meeting))
    .catch((e) => console.log(e.message));
};

module.exports.updateMeeting = (req, res) => {
  Meeting.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      stime: req.body.stime,
      etime: req.body.etime,
    }
  )
    .then(res.status(200).send(req.body))
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports.deleteMeeting = (req, res) => {
  // console.log("delete", req.body);
  Meeting.findByIdAndDelete({ _id: req.params.id })
    .then(res.status(200).send("Deleted successfully."))
    .catch((e) => {
      console.log(e.message);
    });
};
