import React from 'react'

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const KaltixScreen = () => {
  return (
    <Box sx={{
       
        width: '100%',
        height : '100%',
       justifyContent : 'center',
        alignItems : 'center',
      marginBottom : '20px',
      marginTop : '40px',
      borderRadius : '10px'
      }}>
        <Box sx={{
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center',

        }}>
        <Typography sx={{
          
          color : 'primary.main'
        }}
        variant='h1'>KAlTIX Screen</Typography>  
        
        {/* untuk ke productlist  */}
        <Link href="#" underline="hover">
        See All 
        </Link>
           
        </Box>
       
        <ImageList sx={{
          alignItems : "center",
          justifyContent : 'center',
          height : '100%',
          width : '100%',
          
        }}  cols={4} >
          <ImageListItem sx={{
            height : '80%',
            width : '80%',
           marginLeft : '15%',
           
           
          }}>
            <img style={{borderRadius: '5px 5px 5px 5px'}} src='https://image.tmdb.org/t/p/original//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg'></img>
          </ImageListItem>
          <ImageListItem sx={{
            height : '80%',
            width : '80%',
            marginLeft : '15%',
            
            
          }}>
          <img style={{borderRadius: '5px 5px 5px 5px'}} src='https://image.tmdb.org/t/p/original//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg'></img>
          </ImageListItem>
          <ImageListItem sx={{
            height : '80%',
            width : '80%',
            marginLeft : '15%',
            
            
          }}>
          <img style={{borderRadius: '5px 5px 5px 5px'}} src='https://image.tmdb.org/t/p/original//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg'></img>
          
          </ImageListItem>
          <ImageListItem sx={{
            height : '80%',
            width : '80%',
            marginLeft : '15%',
            
            
          }}>
          <img style={{borderRadius: '5px 5px 5px 5px'}} src='https://image.tmdb.org/t/p/original//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg'></img>
          
          </ImageListItem>
        </ImageList>
      </Box>
  )
}

export default KaltixScreen
