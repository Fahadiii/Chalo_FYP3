const express = require("express");
const sql = require("mssql");
const sqlConfig = require("../configdb/dbconnect");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    const request = pool.request();

    request.input("name", req.body.name);
    request.input("email", req.body.email);
    request.input("Gender", req.body.gender);
    request.input("MobileNumber", req.body.mobileNumber);
    request.input("username", req.body.username);
    request.input("address", req.body.address);
    request.input("status", 0);

    const result =
      await request.query`insert into TouristData(email,name,Gender,MobileNumber,username,address,status) values (@email,@name, @Gender,@MobileNumber,@username, @address,@status)`;

    res.json(result.rowsAffected);
  } catch (err) {
    await sql.query`declare @max int;  
    select @max = max(ID) from TouristData;  
    dbcc checkident(TouristData,reseed,@max)`;
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    await sql.connect(sqlConfig);

    const result = await sql.query`select * from TouristData `;
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
  }
});

router.get("/byid", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    const request = pool.request();

    request.input("id", req.body.id);

    const result = await request.query`select * from TouristData where ID=@id`;
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
  }
});

router.put("/", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    const request = pool.request();

    request.input("id", req.body.id);
    request.input("email", req.body.email);
    request.input("name", req.body.name);
    request.input("Gender", req.body.gender);
    request.input("MobileNumber", req.body.mobileNumber);
    request.input("username", req.body.username);
    request.input("address", req.body.address);
    request.input("cnic", req.body.cnic);
    request.input("country", req.body.country);

    const check =
      await request.query`update TouristData set email=@email,name=@name, Gender=@gender,  MobileNumber=@mobileNumber, username=@username,address=@address ,cnic=@cnic,country=@country where ID=@id`;
    const result = await request.query`select * from TouristData where ID=@id`;

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

    const check = await request.query`delete from TouristData  where ID=@id`;
    const result = await request.query`select * from TouristData`;

    await sql.query`declare @max int;
    select @max = max(ID) from TouristData;   
    dbcc checkident(TouristData,reseed,@max);`;

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
