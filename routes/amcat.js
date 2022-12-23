const router = require("express").Router();
const Amcat = require("../models/Amcat");
const cloudinary = require("../utils/cloudinary");

router.post("/newamcat", async (req, res) => {
  const { englishc, logical, automata, quantitative, report, dashboard } =
    req.body;

  try {
    const rresult = await cloudinary.uploader.upload(report, {
      folder: "amcat_details/",
    });
    const dresult = await cloudinary.uploader.upload(dashboard, {
      folder: "amcat_details/",
    });

    const newAmcat = new Amcat({
      englishc,
      logical,
      automata,
      quantitative,
      report: {
        public_id: rresult.public_id,
        url: rresult.secure_url,
      },
      dashboard: {
        public_id: dresult.public_id,
        url: dresult.secure_url,
      },
    });
    const amcat = await newAmcat.save();
    res.status(200).json(amcat);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/getbysid/:id", async (req, res) => {
  const sid = req.params.id;
  try {
    const amcats = Amcat.find({ sid });
    res.status(200).json(amcats);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/getbybatch/:batch", async (req, res) => {
  const sbatch = req.params.batch;
  try {
    const amcats = Amcat.find({ sbatch });
    res.status(200).json(amcats);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/getbydiv/:div", async (req, res) => {
  const sdiv = req.params.div;
  try {
    const amcats = Amcat.find({ sdiv });
    res.status(200).json(amcats);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/deleteAmcat/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const acti = await Amcat.findOne({ _id: id });
      // console.log(notice);
      const fileId = acti.file.public_id;
      await cloudinary.uploader.destroy(fileId);
      await Amcat.findOneAndDelete({ _id: id });
      res.status(200).json("Deleted Successfully");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
