import type { PageComponent } from '@nxweb/react';

import { getPost } from '@api/clients/products';


import { useSettings } from '@hooks/use-settings';


import { TopSec } from './top';
import  PreviewSeadanya  from './previewMinimalis';
import TopThree from './topThree';
import KaltixScreen from './kaltixScreen';
import PreviewSwiper from './previewSwiper';

import Box from '@mui/material/Box';



const Home: PageComponent = () => {

  

  const {
    settings: { direction }
  } = useSettings()
  
  return (

        // hanya ui, mau taro slider tapi error, blom backend , reducer saya error :((

        <Box>

          {/* looping slider, slider error, butuh konsul sm mentor
          <TopSec/> */}

        <PreviewSwiper direction={direction}/>
          {/* nanti kubikin slider */}
          <PreviewSeadanya/>

          <TopThree/>


          {/* cuma tampilin 4 doang, sisanya di viewall product */}
          <KaltixScreen/>

          


        </Box>
    
  );
};

Home.displayName = 'Home';

export default Home;
