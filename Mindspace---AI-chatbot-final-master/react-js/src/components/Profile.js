import React, { useState } from "react";
import './Profile.css';
import { EnvelopeFill, Calendar2, PencilSquare, GeoAlt } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import profilePicture from '../assets/cartoonMan.PNG';

function Portfolio() {

  const [details, setDetails] = useState({
    firstName: "Arjun",
    lastName: "Vaish",
    email: "arjun.vaish25@gmail.com",
    dob: "25 June 2000",
  });

  return (
    <div style={styles.container}>
      <div style={styles.cols1}>
        <div style={{marginRight: '30', }}>
          <img src={profilePicture} style={{height: '190px', width: '200px'}} />
        </div>
      </div>
      <div style={styles.cols2}>          
        <h2> {details.firstName + ' ' + details.lastName} </h2>
        <h6> <GeoAlt /> Jurong West, Singapore </h6>
        <h6><EnvelopeFill /> {details.email} </h6>
        <h6><Calendar2 /> {details.dob} </h6>
        <Button style={{marginTop: '20px'}} variant="info" > <PencilSquare /> Edit </Button>
      </div>     
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'row', 
    margin: '50px auto',
    background: 'white',
    width: '40%',
    height: '40%',
    borderRadius: '15px',
    padding: '20px',
  },
  cols1: {
    display: 'flex',
    flex: '1.5',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  cols2: {
    display: 'flex',
    flex: '2',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
  }
}

export default Portfolio;
