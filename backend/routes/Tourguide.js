const express = require("express");
const sql = require("mssql");
const sqlConfig = require("../configdb/dbconnect");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    const request = pool.request();

    request.input("TG_ID", req.body.TG_ID);
    request.input("TG_email", req.body.TG_email);
    request.input("TG_name", req.body.TG_name);
    request.input("TG_CNIC", req.body.TG_CNIC);
    request.input("TG_Gender", req.body.TG_Gender);
    request.input("TG_DOB", req.body.TG_DOB);
    request.input("TG_MobileNumber", req.body.TG_MobileNumber);
    request.input("TG_WhatsApp", req.body.TG_WhatsApp);
    request.input("TG_Landline", req.body.TG_Landline);
    request.input("CityID", req.body.CityID);
    request.input("TG_sector", req.body.TG_sector);
    request.input("TG_Longitude", req.body.TG_Longitude);
    request.input("TG_Lattitude", req.body.TG_Lattitude);
    request.input("TG_registrationDateTime", req.body.TG_registrationDateTime);
    request.input("TG_registrationStatus", req.body.TG_registrationStatus);

    const result =
      await request.query`insert into TourGuideData(TG_email,TG_name,TG_CNIC,TG_Gender,TG_DOB,TG_MobileNumber, TG_WhatsApp,TG_Landline ,CityID ,TG_sector ,TG_Longitude,TG_Lattitude ,TG_registrationDateTime,TG_registrationStatus   ) 
      values 
      (@TG_email,@TG_ID, @TG_name,@TG_CNIC,@TG_Gender,@TG_DOB,@MobileNumber,@TG_MobileNumber,@TG_WhatsApp,@MobileNumber,@TG_Landline,@CityID,@TG_sector,@TG_Longitude,@TG_Lattitude,@TG_registrationDateTime, @TG_registrationStatus)`;
    res.json(result.rowsAffected);
  } catch (err) {
    await sql.query`declare @max int;  
      select @max = max(ID) from TourGuideData;  
      dbcc checkident(TourGuideData,reseed,@max)`;
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    await sql.connect(sqlConfig);

    const result = await sql.query`select * from TourGuideData `;
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
  }
});

router.get("/byid", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    const request = pool.request();

    request.input("TG_ID", req.body.TG_ID);

    const result =
      await request.query`select * from TourGuideData where TG_ID=@TG_ID`;
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
  }
});

router.put("/", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    const request = pool.request();

    request.input("TG_ID", req.body.TG_ID);
    request.input("TG_email", req.body.TG_email);
    request.input("TG_name", req.body.TG_name);
    request.input("TG_CNIC", req.body.TG_CNIC);
    request.input("TG_Gender", req.body.TG_Gender);
    request.input("TG_DOB", req.body.TG_DOB);
    request.input("TG_MobileNumber", req.body.TG_MobileNumber);
    request.input("TG_WhatsApp", req.body.TG_WhatsApp);
    request.input("TG_Landline", req.body.TG_Landline);
    request.input("CityID", req.body.CityID);
    request.input("TG_sector", req.body.TG_sector);
    request.input("TG_Longitude", req.body.TG_Longitude);
    request.input("TG_Lattitude", req.body.TG_Lattitude);

    const check =
      await request.query`update TourGuideData set TG_email=@TG_email, TG_name=@TG_name,TG_CNIC=@TG_CNIC,TG_Gender=@TG_Gender,
      TG_DOB=@TG_DOB,TG_MobileNumber=@TG_MobileNumber,TG_WhatsApp=@TG_WhatsApp,TG_Landline=@TG_Landline,CityID=@CityID, 
      TG_sector=@TG_sector,  TG_Longitude=@TG_Longitude, TG_Lattitude=@TG_Lattitude where TG_ID=@TG_ID`;
    const result =
      await request.query`select * from TourGuideData where TG_ID=@TG_ID`;

    if (check.rowsAffected[0] == "1") {
      res.json(result.recordset);
    } else {
      console.log("YYYYYAYYYYY N O   DA  TA ");
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    const request = pool.request();

    request.input("id", req.body.id);

    const check =
      await request.query`delete from TourGuideData  where TG_ID=@TG_ID`;
    const result = await request.query`select * from TourGuideData`;

    await sql.query`declare @max int;
      select @max = max(ID) from TourGuideData;   
      dbcc checkident(TourGuideData,reseed,@max);`;

    if (check.rowsAffected[0] == "1") {
      res.json(result.recordset);
    } else {
      console.log("No such data exists in  our  DATA BASE");
      res.json({ message: "Data Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
