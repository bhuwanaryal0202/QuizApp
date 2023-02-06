import React from 'react'
import SelectField from '../components/SelectField'
import { Box } from '@mui/system'
import { Button, CircularProgress, Typography } from '@mui/material'
import TextFieldcompo from '../components/TextFieldCompo';
import useAxios from '../hooks/useAxios';
import { useHistory } from 'react';
function Setting() {

    const { response, error, loading} = useAxios({url: '/api_category.php'});
    const history = useHistory();
   
  if (loading){
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
   if(error){
     return (
      <Typography variant ="h6" mt={20} color="red">
        something went wrong ! Try again !
        </Typography>
     )
   }

   const diffciltyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },

   ]

  const typeOptions = [
    {id: "multiple", name: "Multiple Choice"},
    {id: "boolean", name: "True / False"}
  ]

    const handleSubmit = e => {
      e.preventDefault();
      history.push('/questions');

    };
  return (
   <form onSubmit={handleSubmit}>
    <SelectField options={response.trivia_categories} label='Category'/>
    <SelectField options={diffciltyOptions}label="Diffcilty"/>
    <SelectField options={typeOptions} label="Type"/>
    <TextFieldcompo />
    <Box mt={3} width="100%">
      <Button fullWidth variant="contained"  type="submit"> Get Started </Button>
    </Box>
   </form>
  )
}

export default Setting