/* eslint-disable react/display-name */
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Movie } from '@nxweb/icons/tabler';

const AddMovie = () => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/add`);
  };

  return (
    <Grid
      container={true}
      sx={{
        justifyContent: 'center',
        marginTop: '40px'
      }}
    >
      <Grid item={true} xs={8}>
        <Card>
          <CardContent
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              p: (theme) => `${theme.spacing(9.75, 5, 9.25)} !important`
            }}
          >
            <Movie
              style={{ height: '50px', marginBottom: 2.25, width: '50px' }} />
            <Typography sx={{ mb: 2.75 }} variant="h4">
              Add Your Favourite Movie
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 6 }}>
              You can add your favourite movie on Kaltix. We always appriciate
              your way to help us. You can add movie by clicking the button
              below
            </Typography>
            <Button variant="contained" onClick={handleDetail}>
              Add Movie
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddMovie;
