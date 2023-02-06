import React from 'react'
import { Box } from '@mui/material'
import { FormControl, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../Redux/action'

function TextFieldcompo() {
    const dispatch = useDispatch()

    const handleChnage = (e) => {
      dispatch(handleAmountChange(e.target.value));
    };
     

  return (
    <Box mt={4} width="100%" >
        <FormControl fullWidth>
            <TextField onChange={handleChnage}
            variant="outlined"
            label="Number of Questions"
            type="number"
            size="small"/>
        </FormControl>

    </Box>
  )
}

export default TextFieldcompo




