import type { PageComponent } from '@nxweb/react';






import { TopSec } from './top';
import  PreviewSeadanya  from './previewMinimalis';
import TopThree from './topThree';
import KaltixScreen from './kaltixScreen';

import Box from '@mui/material/Box';



const Home: PageComponent = () => {

  
  return (

        // hanya ui, mau taro slider tapi error, blom backend , reducer saya error :((

        <Box>

          {/* looping slider, slider error, butuh konsul sm mentor
          <TopSec/> */}
          
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
