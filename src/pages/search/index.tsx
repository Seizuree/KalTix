import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';

import { Search } from '@nxweb/icons/tabler';
import type { PageComponent } from '@nxweb/react';

import { useCommand, useStore } from '@models/store.js';

const SearchMovie: PageComponent = () => {
  const [state, dispatch] = useStore((store) => store.search);
  const command = useCommand((cmd) => cmd);
  const navigate = useNavigate();
  const [searchId, setsearchId] = useState<string>('');
  const [showMovieList, setShowMovieList] = useState<boolean>(false);

  const toDetail = (id: number) => {
    navigate(`/movies/${id}`);
  };

  const handleSearch = () => {
    dispatch(command.search.clear());

    const id = searchId;

    console.log(id);

    dispatch(command.search.search(id)).catch((err: unknown) => {
      console.error(err);
    });

    setShowMovieList(true);
  };

  const SearchButton = () => {
    return (
          <Grid
            container={true}
            spacing={6}
            sx={{
              marginTop: 20
            }}
          >

              {state?.search?.map((row) => (
            <Grid item={true} key={row.id} md={3} sx={{ pb: 4 }} xs={12}>
            <Card>
           <CardContent>
             <img
               alt=""
               src={row.poster_path}
               style={{ height: '100%', width: '100%' }} />
           </CardContent>
           <CardContent>
             <Typography sx={{ mb: 2 }} variant="h5">
               {row.title}
             </Typography>
           </CardContent>
           <CardActions className="card-action-dense">
             <Box
               sx={{
                 alignItems: 'center',
                 justifyContent: 'center',
                 width: '100%'
               }}
             >

               <Button
                 sx={{
                   justifyContent: 'center',
                   alignItems: 'center',
                   width: '100%'
                 }}
                 variant="text"
                 onClick={() => toDetail(row.id)}
               >
                 Details
               </Button>

             </Box>
           </CardActions>
            </Card>

            </Grid>
              ))}
          </Grid>

    );
  };

  return (
        <Grid container={true}>
            <Grid item={true}>

                <Box
                  sx={{
                    position: 'absolute',
                    display: 'flex',
                    width: '50%'
                  }}
                >
                    <TextField
                      fullWidth={true}
                      label="Search Movies Here"
                      value={searchId}
                      onChange={(e) => setsearchId(e.target.value)} />
                    <Button onClick={handleSearch}>
                        <Search />
                    </Button>
                </Box>

            </Grid>
            <Grid item={true}>
            {showMovieList ? <SearchButton /> : null}
            </Grid>

        </Grid>
  );
};

export default SearchMovie;
