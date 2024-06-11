
import {
    Box,
    Grid,
    Heading,
    Divider,
    Text,
    useColorModeValue
  } from "@chakra-ui/react"

  import { useTranslation } from 'react-i18next';
  import  CalendarComponent  from './CalendarComponent';
  import  Contact from './Contact';
  import  Footer from './Footer';

  function Content() {

    const { t } = useTranslation();
    
    return (
  

<Box textAlign="center" fontSize="xl" color={useColorModeValue("#485727", "#c5d6a1")} pt={100}>
        <Grid >
         
          
          <Heading as='h1'size='3xl'> {t('header.title')}</Heading>
          
          <Divider mt={5} />
          <Heading as='h2'>{t('services.title')}</Heading>
          <Box mt='3'>
            <Text fontSize='xl'w='65%'  margin={"auto"} textAlign={[ 'justify' ]}>
              {t('services.pruning')+" "} 
              {t('services.pest_control')+" "} 
              {t('services.scarification')+" "} 
              {t('services.lawn_mowing')+" "} 
              {t('services.other')}</Text>
          </Box>
          <Divider mt={5} mb={5} />
          <CalendarComponent />
          <Contact/>
          <Footer />


          

          
        </Grid>
      </Box>
    )
}

export default Content;
