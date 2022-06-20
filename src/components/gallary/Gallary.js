import React from 'react';
import {GridItem,Grid,Image, Box} from '@chakra-ui/react'
import dog2 from '../images/gallary/dog2.jpg'
import dog3 from '../images/gallary/dog3.jpeg'
import dog4 from '../images/gallary/dog4.jpg'
import dog5 from '../images/gallary/dog5.jpg'
import { width } from '@mui/system';


const Gallary = () => {
  return (
    <div>
<Grid
  // h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
  // w='auto'
> 
  <GridItem 
    // height={"100px"}
  rowSpan={2} colSpan={1}  > 
    <Image src={dog2}/>
  </GridItem>
  <GridItem colSpan={2}  > <Image src={dog4}/> </GridItem>
  <GridItem colSpan={2}  ><Image src={dog3}/> </GridItem>
  <GridItem colSpan={1}  ><Image src={dog4}/></GridItem>
  <GridItem colSpan={1}  ><Image src={dog5}/> </GridItem>
  <GridItem colSpan={1}  ><Image src={dog4}/> </GridItem>
</Grid>
  
{/*   
  <Image src={dog2}/>  */}
  

  {/* <GridItem colSpan={4} bg='purple' ><Image src={dog2} height={'200px'} width={'300px'}/> </GridItem>
  <GridItem colSpan={2} bg='papayawhip' ><Image src={dog2}/> </GridItem>
  <GridItem colSpan={4} bg='tomato' ><Image src={dog2}/> </GridItem> */}

    </div>
  )
}

export default Gallary
