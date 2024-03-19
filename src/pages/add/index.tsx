/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable capitalized-comments */
/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from 'react';

import {
  Button,
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { Send } from '@nxweb/icons/tabler';
import type { PageComponent } from '@nxweb/react';

import { useCommand, useStore } from '@models/store';

import type { SelectChangeEvent } from '@mui/material';

dayjs.extend(utc);
dayjs.extend(timezone);

const AddMovie: PageComponent = () => {
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.products.load());
  }, []);
  const genres = useStore((store) => store.products?.genres)[0];
  const [genreName, setGenreName] = useState<string[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newOverview, setNewOverview] = useState<string>('');
  const [newGenreId, setNewGenreId] = useState<number[]>([]);
  const [newPosterPath, setNewPosterPath] = useState<string>('');
  const [newReleaseDate, setNewReleaseDate] = useState<Date | null>(null);

  const handleGenreChange = (event: SelectChangeEvent<typeof genreName>) => {
    const {
      target: { value }
    } = event;

    setGenreName(typeof value === 'string' ? value.split(',') : value);

    if (genres) {
      const selectedGenreIds = genres
        .filter((g) => value.includes(g.name))
        .map((g) => g.id);

      setNewGenreId(selectedGenreIds);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleOverviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewOverview(e.target.value);
  };

  const handlePosterPathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPosterPath(e.target.value);
  };

  const handleDateChange = () => {
    return `${dayjs(newReleaseDate).toDate().getFullYear()}-${(
      (dayjs(newReleaseDate).toDate().getMonth() ?? 0) + 1
    )
      .toString()
      .padStart(2, '0')}-${(dayjs(newReleaseDate).toDate().getDate() ?? 1)
      .toString()
      .padStart(2, '0')}`;
  };

  const handleAddButton = () => {
    dispatch(
      command.products.create({
        genre_ids: newGenreId,
        id: Math.floor(Math.random() * 9999999) + 1,
        overview: newOverview,
        poster_path: newPosterPath,
        release_date: handleDateChange(),
        title: newTitle
      })
    );
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
                label="Movie Title"
                placeholder="The Avengers"
                onChange={handleTitleChange} />
            </Grid>
            <Grid item={true} sm={6} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Overview"
                placeholder="The quick brown fox jumps over the lazy dog"
                onChange={handleOverviewChange} />
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
                onChange={handleGenreChange}
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
            <Grid item={true} mt={4} sm={6} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    format="YYYY-MM-DD"
                    label="Basic date picker"
                    slotProps={{ textField: { fullWidth: true } }}
                    timezone="Asia/Jakarta"
                    value={newReleaseDate}
                    onChange={(date) => {
                      setNewReleaseDate(date);
                    }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item={true} mt={2} xs={12}>
              <TextField
                fullWidth={true}
                label="Poster Path"
                placeholder="The quick brown fox jumps over the lazy dog"
                onChange={handlePosterPathChange} />
            </Grid>
            <Grid item={true} mt={2} xs={12}>
              <Button
                endIcon={<Send />}
                variant="contained"
                onClick={handleAddButton}
              >
                Add Movies
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

AddMovie.displayName = 'Add Movie';

export default AddMovie;
