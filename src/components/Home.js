import React from 'react';
import './Home.css';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";
import { fromToSetInRedux } from "../features/userSlice";

export default function BasicCard() {
  const dispatch = useDispatch();

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [depart, setDepart] = React.useState("");
  const [returnBack, setReturnBack] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fromToSetInRedux({ from: from, to: to }));
  }

  return (
    <Box>
      <Card sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardContent id="mainContainer">
          <Box id="cardContent">
            <Typography id="heroText" textColor="#fff">Let the journey begin</Typography>

            <Box id="hero_search_flights">
              <Box className="inputConatiner">
                <label htmlFor="from">From</label>
                <input type="text" value={from} name="" id="from" placeholder="Amsterdam" onChange={(e) => setFrom(e.target.value)} />
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="to">To</label>
                <input type="text" name="" id="to" placeholder="Stockholm" value={to} onChange={(e) => setTo(e.target.value)} />
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="depart">Depart</label>
                <input
                  type="date"
                  name=""
                  id="depart"
                  value={depart}
                  onChange={(e) => setDepart(e.target.value)}
                />
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="return">Return</label>
                <input
                  type="date"
                  name=""
                  id="return"
                  value={returnBack}
                  onChange={(e) => setReturnBack(e.target.value)}
                />
              </Box>

              <button type="submit" id="btn" onClick={handleSearch}>
                SEARCH FLIGHTS
              </button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
