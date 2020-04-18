const Decor = require("../models/decor.js.");

createDecor = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "provide a room",
    });
  }

  const decor = new Decor(body);

  if (!decor) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  decor
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: decor._id,
        message: "Room created",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Room not created",
      });
    });
};

updateDecor = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "must provide a body to update",
    });
  }
  Decor.findOne({ _id: req.params.id }, (err, decor) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Room not Found",
      });
    }
    decor.imageURL = body.imageURL;
    decor.room = body.room;
    decor.item = body.item;
    decor.price = body.price;
    decor.store = body.store;
    decor
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: decor._id,
          message: "Room Updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Room NOT Updated",
        });
      });
  });
};
deleteDecor = async (req, res) => {
  await Decor.findOneAndDelete({ _id: req.params.id }, (err, decor) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!decor) {
      return res.status(404).json({ success: false, error: `Room not found` });
    }
    return res.status(200).json({ success: true, data: decor });
  }).catch((err) => console.log(err));
};

getDecorById = async (req, res) => {
  await Decor.findOne({ _id: req.params.id }, (err, decor) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!decor) {
      return res.status(404).json({ success: false, error: `Room not found` });
    }
    return res.status(200).json({ success: true, data: decor });
  }).catch((err) => console.log(err));
};

getDecors = async (req, res) => {
  await Decor.find({}, (err, decor) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!decor.length) {
      return res.status(404).json({ success: false, error: `Room not found` });
    }
    return res.status(200).json({ success: true, data: decor });
  }).catch((err) => console.log(err));
};

module.exports = {
  createDecor,
  updateDecor,
  deleteDecor,
  getDecors,
  getDecorById,
};
