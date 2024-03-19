import { useEffect } from 'react';

import {  Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useKeenSlider } from 'keen-slider/react';

import { useCommand, useStore } from '@models/store.js';

import type { Direction } from '@mui/material';

const Upcoming = ({ direction }: { readonly direction: Direction }) => {
  const [state, dispatch] = useStore((store) => store.upcoming);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.products.upComingLoad()).catch((err: unknown) => {
      console.error(err);
    });
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: direction === 'rtl',
    slides: {
      perView: 4,
      spacing: 32
    }
  });

  return (
     <Box
       className="keen-slider"
       ref={ref}
       sx={{
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center'

       }}
     >

                {state?.upcoming?.map((movies) => (
                    <Box
                      className="keen-slider__slide"
                      key={movies.id}
                    >

                    <Card>
                        <CardMedia />
                    <CardContent>
                        <img alt="" src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} style={{ height: '100%', width: '100%' }} />
                    </CardContent>
                    <CardContent sx={{ p: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}>
                        <Typography sx={{ mb: 2 }} variant="h5">
                            {/* judul */}
                            {movies.title}
                        </Typography>
                        <Typography sx={{ mb: 2 }}>
                            {/* tanggal */}
                            {movies.release_date}
                        </Typography>

                    </CardContent>
                    <Button sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} variant="contained">
                        <Link color="white" href={`/movies/${movies.id}`} underline="none">Details</Link>
                    </Button>
                    </Card>
                    </Box>
                ))}

     </Box>
  );
};

export default Upcoming;
