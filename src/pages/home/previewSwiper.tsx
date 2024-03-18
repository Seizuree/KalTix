import Box from '@mui/material/Box'
import { Direction } from '@mui/material'
// import Grid from '@mui/material/Grid'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'
// import * as source from './SwiperSourceCode'
// import CardSnippet from '@hooks/cards/card-snippet'


const PreviewSwiper = ({ direction }: { direction: Direction }) => {



    const [ref] = useKeenSlider<HTMLDivElement>({
        rtl: direction === 'rtl'
      })

  return (

    
          
            <Box  sx={{
                display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap : '1rem'
          
            }} ref={ref} className='keen-slider'>
                <Box className='keen-slider__slide'>
                    <img style={{maxWidth: '100%', height : 'auto'}} src='https://image.tmdb.org/t/p/original/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg' alt='swiper 1' />
                </Box>
                <Box className='keen-slider__slide'>
                    <img style={{maxWidth: '100%', height : 'auto'}} src='https://image.tmdb.org/t/p/original/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg' alt='swiper 2' />
                </Box>
                <Box className='keen-slider__slide'>
                    <img style={{maxWidth: '100%', height : 'auto'}} src='https://image.tmdb.org/t/p/original/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg' alt='swiper 3' />
                </Box>
                <Box className='keen-slider__slide'>
                    <img style={{maxWidth: '100%', height : 'auto'}} src='https://image.tmdb.org/t/p/original/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg' alt='swiper 4' />
                </Box>
                <Box className='keen-slider__slide'>
                    <img style={{maxWidth: '100%', height : 'auto'}} src='https://image.tmdb.org/t/p/original/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg' alt='swiper 5' />
                </Box>
            </Box>
          
        

   
  )
}

export default PreviewSwiper

