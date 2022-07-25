import { useState} from 'react'
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const contact = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInputChange = ({ target: {name, value} }) => {
        setUserState({ ...userState, [name]: value })
    }

  return (
    <>
    <Grid container justifyContent="center">
        <Grid item>
            <h1>Contact</h1>
        </Grid>
    </Grid>
    <Grid container justifyContent="center" spacing={3} padding={2}>
        <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input aria-describedby="my-helper-text" />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input aria-describedby="my-helper-text"/>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={8} lg={7}>
            <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            />
        </Grid>
    </Grid>
    <Grid container justifyContent="center">
        <Grid item>
            <Button>Submit</Button>
        </Grid>
    </Grid>
    </>
  )
}

export default contact