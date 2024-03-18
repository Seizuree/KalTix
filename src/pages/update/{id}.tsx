/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

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
import type { Dayjs } from 'dayjs';

dayjs.extend(utc);
dayjs.extend(timezone);

const UpdateMovie: PageComponent = () => {
  const { id } = useParams();
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.products.load());
  }, []);

  const currentMovie = useMemo(
    () => state?.products?.find((current) => current.id?.toString() === id),
    [state, id]
  );
  const genres = useStore((store) => store.products?.genres)[0];
  const [genreName, setGenreName] = useState<string[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newOverview, setNewOverview] = useState<string>('');
  const [newGenreId, setNewGenreId] = useState<number[]>([]);
  const [newPosterPath, setNewPosterPath] = useState<string>('');
  const [newReleaseDate, setNewReleaseDate] = useState<Dayjs | null>(dayjs(new Date()));

  const genreNames = useMemo(() => {
    if (!currentMovie || !state || !state.genres) return [];

    return currentMovie.genre_ids.map((genreId: number) => {
      if (state.genres) {
        const genre = state.genres.find((g) => g.id === genreId);

        return genre ? genre.name : 'Unknown';
      }

      return '';
    });
  }, [currentMovie, state]);

  useEffect(() => {
    if (currentMovie !== undefined) {
      setTimeout(() => {
        const currentDate = dayjs(currentMovie.release_date);

        setNewTitle(currentMovie.title);
        setNewOverview(currentMovie.overview);
        setNewGenreId(currentMovie.genre_ids);
        setGenreName(genreNames);
        setNewPosterPath(currentMovie.poster_path);
        setNewReleaseDate(currentDate);
      }, 1000);
    }
  }, [currentMovie]);

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

  const handleUpdateButton = () => {
    if (currentMovie) {
      dispatch(
        command.products.update({
          genre_ids: newGenreId,
          id: currentMovie.id,
          overview: newOverview,
          poster_path: newPosterPath,
          release_date: handleDateChange(),
          title: newTitle
        })
      );
    }
  };

  return (
    <Card>
      <CardHeader title="Update Movie" />
      <CardContent>
        <form>
          <Grid container={true} spacing={5}>
            <Grid item={true} sm={6} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Title"
                placeholder="The Avengers"
                value={newTitle}
                onChange={handleTitleChange} />
            </Grid>
            <Grid item={true} sm={6} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Overview"
                placeholder="The quick brown fox jumps over the lazy dog"
                value={newOverview}
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
                    <MenuItem key={data.name} value={data.name}>
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
                      setNewReleaseDate(dayjs(date));
                    }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item={true} mt={2} xs={12}>
              <TextField
                fullWidth={true}
                label="Poster Path"
                placeholder="The quick brown fox jumps over the lazy dog"
                value={newPosterPath}
                onChange={handlePosterPathChange} />
            </Grid>
            <Grid item={true} mt={2} xs={12}>
              <Button
                endIcon={<Send />}
                variant="contained"
                onClick={handleUpdateButton}
              >
                Update Movies
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

UpdateMovie.displayName = 'Add Movie';

export default UpdateMovie;
