import { Input } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';

const Contact = () => {
   return (
      <>
         <div>
            <form>
               <label>Full Name</label><br/>
               <Input type="text" placeholder='Full Name' /><br/>
               <label>Email</label><br/>
               <Input type="text" placeholder='exampa@gmail.com' /><br/>
               <label>Phone</label><br/>
               <Input type="text" placeholder='Phone'/><br/>
               <label>Massess</label><br/>
               <Input type="text" placeholder='Messess'/><br/>
               <Button>Submit</Button>
            </form>
         </div>
      </>
   )
}

export default Contact;