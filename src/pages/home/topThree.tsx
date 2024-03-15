import React from 'react'

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const TopThree = () => {
  return (
    <Box sx={{
        bgcolor: 'primary.main',
        width: '100%',
        height : '100%',
        p : '1%',
       left : 0,
       right : 0,
       justifyContent : 'center',
       alignItems : 'center',
      marginBottom : '20px',
      marginTop : '60px',
      borderRadius : '10px'
      }}>
        <Typography sx={{
          marginLeft : '3%',
          color : 'white'
        }}
        variant='h1'>TOP 3 MOVIES RIGHT NOW!</Typography> 
        <ImageList sx={{
          alignItems : "center",
          justifyContent : 'center',
          height : '100%',
          width : '100%',
          
        }}  cols={3} >
          <ImageListItem sx={{
            height : '70%',
            width : '70%',
           marginLeft : '15%',
           transition: 'transform 0.5s', 
           '&:hover': {
               height : '72%',
               width : '72%',
           },
           
          }}>
            
            <img style={{borderRadius: '5px 5px 5px 5px'}} src='https://image.tmdb.org/t/p/original/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg'></img>
          </ImageListItem>
          <ImageListItem sx={{
            height : '70%',
            width : '70%',
            marginLeft : '15%',
            transition: 'transform 0.5s', 
            '&:hover': {
                height : '72%',
                width : '72%',
            },
            
          }}>
          <img style={{borderRadius: '5px 5px 5px 5px'}} src='https://image.tmdb.org/t/p/original/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg'></img>
          </ImageListItem>
          <ImageListItem sx={{
            height : '70%',
            width : '70%',
            marginLeft : '15%',
            transition: 'transform 0.5s', 
            '&:hover': {
                height : '72%',
                width : '72%',
            },
            
          }}>
          <img style={{borderRadius: '5px 5px 5px 5px'}} src='https://image.tmdb.org/t/p/original//gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg'></img>
          
          {/* kalo mau nambahin info dibawah gambar
          <ImageListItemBar
            title='avatar'
            position="below"
          /> */}
          </ImageListItem>
        </ImageList>
      </Box>
  )
}

export default TopThree
