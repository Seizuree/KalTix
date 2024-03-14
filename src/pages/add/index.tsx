/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from '@mui/material';

import type { PageComponent } from '@nxweb/react';

import { useCommand, useStore } from '@models/store';

import type { SelectChangeEvent } from '@mui/material';

const AddMovie: PageComponent = () => {
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.products.load());
  }, []);
  const genres = useStore((store) => store.products?.genres)[0];
  const [genreName, setGenreName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof genreName>) => {
    const {
      target: { value }
    } = event;

    setGenreName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Card>
      <CardHeader title="Add New Movie" />
      <CardContent>
        <form>
          <Grid container={true} spacing={5}>
            <Grid item={true} sm={6} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Name"
                placeholder="The Avengers" />
            </Grid>
            <Grid item={true} sm={6} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Overview"
                placeholder="The quick brown fox jumps over the lazy dog" />
            </Grid>
            <Grid item={true} sm={6} xs={12}>
              <InputLabel id="genre-checkbox-label">Genre</InputLabel>
              <Select
                fullWidth={true}
                id="genre-checkbox"
                input={<OutlinedInput label="Tag" />}
                labelId="genre-checkbox-label"
                multiple={true}
                renderValue={(selected) => selected.join(', ')}
                value={genreName}
                onChange={handleChange}
              >
                {!genres
                  ? <div>Loading</div>
                  : genres.map((data) => (
                    <MenuItem key={data.id} value={data.name}>
                      <Checkbox checked={genreName.indexOf(data.name) > -1} />
                      <ListItemText primary={data.name} />
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

AddMovie.displayName = 'Add Movie';

export default AddMovie;
