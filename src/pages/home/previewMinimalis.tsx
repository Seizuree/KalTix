import React from 'react'

import { useCommand, useStore } from '@models/store.js';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react';


const PreviewSeadanya = () => {

    const stringformat = "https://image.tmdb.org/t/p/original";
    const posterPath = "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg" //.poster_path ;
    const posterimg = stringformat.concat(posterPath)

    const [state, dispatch] = useStore((store) => store.products);
    const command = useCommand((cmd) => cmd);

    useEffect(() => {
        dispatch(command.products.load()).catch((err: unknown) => {
          console.error(err);
        });
    }, []);


  return (

    
    
    <Grid container spacing={6}>
          <Grid item xs={12} sx={{ pb: 4 }}>
        <Typography variant='h4'>Now Playing</Typography>
      </Grid>
      <Grid item xs={12} md={3} >
      <Card >
            <CardMedia sx={{height: '184.6px', width : '100%'}} image= {posterimg}  />
                <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                    <Typography variant='h5' sx={{ mb: 2 }}> 
                        {/* judul */}
                        batman 
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        {/* tanggal */}
                        release date 
                    </Typography>
                    
                 </CardContent>
                 <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    Details
                 </Button>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} >
      <Card >
            <CardMedia sx={{height: '184.6px', width : '100%'}} image= {posterimg}  />
                <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                    <Typography variant='h5' sx={{ mb: 2 }}> 
                        {/* judul */}
                        batman 
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        {/* tanggal */}
                        release date 
                    </Typography>
                    
                 </CardContent>
                 <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    Details
                 </Button>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} >
      <Card >
            <CardMedia sx={{height: '184.6px', width : '100%'}} image= {posterimg}  />
                <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                    <Typography variant='h5' sx={{ mb: 2 }}> 
                        {/* judul */}
                        batman 
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        {/* tanggal */}
                        release date 
                    </Typography>
                    
                 </CardContent>
                 <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    Details
                 </Button>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} >
      <Card >
            <CardMedia sx={{height: '184.6px', width : '100%'}} image= {posterimg}  />
                <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                    <Typography variant='h5' sx={{ mb: 2 }}> 
                        {/* judul */}
                        batman 
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        {/* tanggal */}
                        release date 
                    </Typography>
                    
                 </CardContent>
                 <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    Details
                 </Button>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} >
      <Card >
            <CardMedia sx={{height: '184.6px', width : '100%'}} image= {posterimg}  />
                <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
                    <Typography variant='h5' sx={{ mb: 2 }}> 
                        {/* judul */}
                        batman 
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        {/* tanggal */}
                        release date 
                    </Typography>
                    
                 </CardContent>
                 <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    Details
                 </Button>
        </Card>
        </Grid>
    </Grid>
    
        
     
      

      
  
  )
}

export default PreviewSeadanya
