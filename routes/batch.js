const router = require("express").Router();
const Batches = require("../models/Batch");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

router.post("/newBatch", async (req, res) => {
  const { batch_name, guardian_teacher, batch_div, batch_branch } = req.body;
  try {
    const newBatch = new Batches({
      batch_name,
      guardian_teacher,
      batch_div,
      batch_branch,
    });
    const batch = await newBatch.save();
    res.status(200).json(batch);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// delete batch
router.delete("/deletebatch/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Batches.findByIdAndDelete({ _id: id });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getbatches", async (req, res) => {
  try {
    const batches = await Batches.find();
    res.status(200).json(batches);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add students to batch

router.put("/addstudents/:batchid", async (req, res) => {
  const id = req.params.batchid;
  try {
    const { students,parents } = req.body;
    const batch1 = await Batches.findById({ _id: id });
    const stdarr = students;
    const parentarr = parents;
    const prevstd = batch1.batch_Students;
    const prevparents = batch1.batch_Students_Parents;
    const arr = stdarr.concat(prevstd);
    const parr = parentarr.concat(prevparents);
    const batch = await Batches.findByIdAndUpdate(
      { _id: id },
      { $set: { batch_Students: arr,batch_Students_Parents: parr } }
    );

    res.status(200).json(batch);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// delete student from batch

router.delete("/deletestudent/:id/:index",async(req,res)=>{
    const id = req.params.id;
    const index = req.params.index
    try{
        const batch = await Batches.findById({ _id: id });
        const stdarr = batch.batch_Students;
        delete stdarr[index];
        for(let i=index;i<stdarr.length;i++){
            stdarr[i] = stdarr[i+1];
        }
        const arr = stdarr;
        console.log(arr);
        await Batches.findByIdAndUpdate(
            { _id: id },
            { $set: { batch_Students: arr } }
          );
        res.status(200).json(arr);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

// send mail to batch students
router.post("/sendmail/:id",async(req,res)=>{
  const id = req.params.id;

  const {subject,mailbody} = req.body;
  try{
    const batch = await Batches.findById({ _id: id });
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: batch.batch_Students,
      subject: subject,
      html: `<p><b>${mailbody}</b></p>`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json("Mail Sent Successfully");
  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})

// send mail to batch students parents
router.post("/sendmail/:id",async(req,res)=>{
  const id = req.params.id;

  const {subject,mailbody} = req.body;
  try{
    const batch = await Batches.findById({ _id: id });
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: batch.batch_Students_Parents,
      subject: subject,
      html: `<p><b>${mailbody}</b></p>`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json("Mail Sent Successfully");
  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})
module.exports = router;
