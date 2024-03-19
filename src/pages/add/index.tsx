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
import { renderTimeViewClock } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
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

const AddMovie: PageComponent = () => {
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.products.load());
  }, []);
  const genres = useStore((store) => store.products?.genres)[0];

  const [genreName, setGenreName] = useState<string[]>([]);

  const [newBackdropPath, setNewBackdropPath] = useState<string>('');
  const [newGenreId, setNewGenreId] = useState<number[]>([]);
  const [newOriginalLanguage, setNewOriginalLanguage] = useState<string>('');
  const [newOverview, setNewOverview] = useState<string>('');
  const [newPosterPath, setNewPosterPath] = useState<string>('');
  const [newReleaseDate, setNewReleaseDate] = useState<Dayjs | null>(
    dayjs(new Date())
  );
  const [newRuntime, setNewRuntime] = useState<Dayjs | null>(dayjs(new Date()));
  const [newTagline, setNewTagline] = useState<string>('');
  const [newTitle, setNewTitle] = useState<string>('');

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

  const handleBackdropPathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBackdropPath(e.target.value);
  };

  const handlePosterPathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPosterPath(e.target.value);
  };

  const handleOriginalLanguageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewOriginalLanguage(e.target.value);
  };

  const handleTaglineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTagline(e.target.value);
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

  const handleRuntimeChange = () => {
    return Math.floor((dayjs(newRuntime).hour() - 12) * 60 + dayjs(newRuntime).minute());
  };

  const handleAddButton = () => {
    dispatch(
      command.products.create({
        backdrop_path: newBackdropPath,
        genre_ids: newGenreId,
        id: Math.floor(Math.random() * 9999999) + 1,
        original_language: newOriginalLanguage,
        overview: newOverview,
        poster_path: newPosterPath,
        release_date: handleDateChange(),
        runtime: handleRuntimeChange(),
        tagline: newTagline,
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
              <InputLabel id="genre-checkbox-label">Movie Genre</InputLabel>
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
                    label="Movie Release Date"
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
                label="Movie Backdrop Path"
                placeholder="The quick brown fox jumps over the lazy dog"
                onChange={handleBackdropPathChange} />
            </Grid>
            <Grid item={true} mt={2} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Poster Path"
                placeholder="The quick brown fox jumps over the lazy dog"
                onChange={handlePosterPathChange} />
            </Grid>
            <Grid item={true} mt={2} sm={4} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Original Language"
                placeholder="The quick brown fox jumps over the lazy dog"
                onChange={handleOriginalLanguageChange} />
            </Grid>
            <Grid item={true} mt={1} sm={4} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                  <TimePicker
                    ampmInClock={false}
                    format="hh:mm"
                    label="Movie Duration"
                    slotProps={{ textField: { fullWidth: true } }}
                    value={newRuntime}
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock
                    }}
                    onChange={(time) => setNewRuntime(time)} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item={true} mt={2} sm={4} xs={12}>
              <TextField
                fullWidth={true}
                label="Movie Tagline"
                placeholder="The quick brown fox jumps over the lazy dog"
                onChange={handleTaglineChange} />
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
