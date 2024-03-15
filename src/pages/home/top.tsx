import React from 'react'

import { useKeenSlider } from 'keen-slider/react'

import Box from '@mui/material/Box'
import { Direction } from '@mui/material'

export const TopSec = ({ direction }: { direction: Direction }) => {

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        rtl: direction === 'rtl'
      })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img  src='https://image.tmdb.org/t/p/original//gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg' alt='swiper 7' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='https://image.tmdb.org/t/p/original//gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg' alt='swiper 8' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='https://image.tmdb.org/t/p/original//gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg' alt='swiper 9' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='https://image.tmdb.org/t/p/original//gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg' alt='swiper 10' />
      </Box>
    </Box>
  )
}
