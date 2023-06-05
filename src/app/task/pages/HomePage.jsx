import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography, colors } from '@mui/material'
import React from 'react'
import { TaskLayout } from '../layout/TaskLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'

export const HomePage = () => {
  return (
    <>
      <TaskLayout>
        <NothingSelectedView />
        {/* <ImageGallery /> */}
        <IconButton
          size='large'
          sx={{
            color:'white',
            backgroundColor:'error.main',
            ':hover':{backgroundColor:'error.main',opacity:0.9},
            position:'fixed',
            right:50,
            bottom:50,
           
          }}
        >
         <AddOutlined sx={{fontSize:30}} />
        </IconButton>
      </TaskLayout>
    </>
  )
}