import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
};

export const Settings = ({boardSize, setBoardSize, numMines, setNumMines}) => {
  const [open, setOpen] = React.useState(false);
  const [boardSizeInput, setBoardSizeInput] = React.useState(10);
  const [numMinesInput, setNumMinesInput] = React.useState(10);
  const [valid, setValid] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValid(false);
    } else {
      setBoardSize(boardSizeInput);
      setNumMines(numMinesInput);
      handleClose();
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
          <TextField
            error={!valid}
            label="Board Size"
            value={boardSizeInput}
            required
            onChange={e => setBoardSizeInput(e.target.value)}
            type='number'
            InputProps={{ inputProps: { min: 2, max: 20, step: 1 } }}
          >
            Board Size
          </TextField>
          <TextField
            error={!valid}
            label="Number of Mines"
            value={numMinesInput}
            required
            onChange={e => setNumMinesInput(e.target.value)}
            type='number'
            InputProps={{ inputProps: { min: 2, max: 20, step: 1 } }}
            sx={{marginY: '10px'}}
          >
            Number of Mines
          </TextField>
          <Button variant='contained' type='submit'>Submit</Button>
        </Box>
    </Modal>
    <Card sx={{width: '300px', marginX: 'auto', marginY: '20px', backgroundColor: 'lightgrey', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Settings
        </Typography>
        <Typography variant="body2">
          Board Size: {boardSize}
        </Typography>
        <Typography variant="body2">
          Number of Mines: {numMines}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' onClick={handleOpen}>Change <br/>Settings</Button>
      </CardActions>
    </Card>
  </>
  )
}


