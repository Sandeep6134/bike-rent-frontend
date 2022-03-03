import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useNavigate } from 'react-router';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [hours, setHours] = React.useState(0)
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fail = () =>{
    alert("Invalid Credentials")
  }
  const succ = () => {
    alert("Booking successful")

  }

  const submit = async (e) => {
    e.preventDefault()
    await axios.post('https://bike-rental-portal-backend.herokuapp.com/update/booking',{
            username: user,
            password: password,
            booking: value,
            bill: props.price*hours+200
        }).then(succ).catch()
        navigate("/")
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        BOOK
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Booking"}</DialogTitle>
        <DialogContent>
          <div id="alert-dialog-slide-description">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Choose your date"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField margin="normal" {...params} />}
      />
    </LocalizationProvider>
    <br/>
          <Typography>Deposit: Rs:200</Typography>
          <Typography>Rent per hour: Rs.{props.price}</Typography>
            <TextField type="number" variant="outlined" label="Enter number of hours" margin="normal" onChange={(e)=>(setHours(e.target.value))}></TextField>
            <Typography marginBottom={2}>Total cost:{props.price*hours+200}</Typography>
            <Divider/>
            <Typography variant="h5" margin={1}>Enter for verification</Typography>
            <form onSubmit={submit}>
            <TextField type="text" name="userName" margin="dense" label="Enter User Name" onChange={(e)=> setUser(e.target.value)} required></TextField><br/>
            <TextField type="password" name="password" margin="dense" label="Enter your Password" onChange={(e)=> setPassword(e.target.value)} autoComplete="off" required></TextField><br/>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Book</Button>
            </DialogActions>
            </form>
          </div>
        </DialogContent>
        
          


      </Dialog>
    </div>
  );
}
