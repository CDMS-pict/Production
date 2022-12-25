import { Button } from '@material-ui/core'
import React from 'react'
import Navbar from '../navbar/Navbar'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LorForm from './LorForm'
import LorBox from "./LorBox"
import './lorapplication.css'

function Lor({user}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar user={user}/>
      <div className="studentInternshipDashboard">
        <div className="dataheader">
          <p className="internship_data_header">Letter of Recommandation</p>
          <Button variant="contained" onClick={handleOpen}>
            Add{" "}
          </Button>
        </div>
      </div>
      <LorBox/>
      <Modal
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="boxmodal lorapplication">
             <LorForm user={user}/>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Lor