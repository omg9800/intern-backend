const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const meeting = require("../controllers/meeting");

router.get("/meeting", meeting.getMeetings);
router.post("/meeting", auth, meeting.addMeeting);
router.delete("/meeting/:id", auth, meeting.deleteMeeting);
router.put("/meeting/:id", auth, meeting.updateMeeting);

module.exports = router;
