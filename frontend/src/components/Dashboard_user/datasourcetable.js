import React from "react";

export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "cityID",
    headerName: "City ID",
    width: 80,
  },
  {
    field: "user",
    headerName: "Name",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "cnic",
    headerName: "CNIC",
    width: 150,
  },

  {
    field: "age",
    headerName: "Age",
    width: 30,
  },

  {
    field: "dob",
    headerName: "D.O.B",
    width: 100,
  },

  {
    field: "gender",
    headerName: "Gender",
    width: 70,
  },

  {
    field: "mobile",
    headerName: "Mobile #",
    width: 130,
  },

  {
    field: "whatsapp",
    headerName: "WhatsApp #",
    width: 130,
  },

  {
    field: "landline",
    headerName: "Landline #",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },

  {
    field: "sector",
    headerName: "Sector(Address)",
    width: 150,
  },

  {
    field: "longlat",
    headerName: "Longitude,Latitude",
    width: 150,
  },

  {
    field: "regDate",
    headerName: "Registration Date",
    width: 140,
  },

  {
    field: "status",
    headerName: "Status",
    width: 80,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    cityID: 1,
    username: "Ali Raza",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    cnic: "38402-3456237-1",
    age: 35,
    dob: "21/4/2000",
    gender: "Male",
    mobile: "0308-4567322",
    whatsapp: "0300-3421763",
    landline: "051-23456",
    email: "aliRaza@gmail.com",
    sector: "I-10,Islamabad",
    longlat: "32.345 , 34.345",
    regDate: "31/2/2010",
    status: "active",
  },
  {
    id: 2,
    cityID: 1,
    username: "Nouman",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    cnic: "34501-3678237-2",
    age: 23,
    dob: "13/2/1998",
    gender: "Male",
    mobile: "0312-4678321",
    whatsapp: "0314-1589462",
    landline: "051-25416",
    email: "nouman@gmail.com",
    sector: "Johar Town,Lahore",
    longlat: "54.545 , 65.125",
    regDate: "24/7/2020",
    status: "pending",
  },

  {
    id: 3,
    cityID: 2,
    username: "Zakir",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    cnic: "38401-5634889-2",
    age: 31,
    dob: "18/9/1984",
    gender: "Male",
    mobile: "0308-4456700",
    whatsapp: "0312-6734890",
    landline: "051-34709",
    email: "zakir@yahoo.com",
    sector: "DHA,Lahore",
    longlat: "124.545 , 115.125",
    regDate: "12/6/2015",
    status: "passive",
  },
  {
    id: 3,
    cityID: 2,
    username: "Zakir",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    cnic: "38401-5634889-2",
    age: 31,
    dob: "18/9/1984",
    gender: "Male",
    mobile: "0308-4456700",
    whatsapp: "0312-6734890",
    landline: "051-34709",
    email: "zakir@yahoo.com",
    sector: "DHA,Lahore",
    longlat: "124.545 , 115.125",
    regDate: "12/6/2015",
    status: "active",
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
];
