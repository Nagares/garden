
import {
    Box,
    Grid,
    Heading,
    Divider,
    Text,
  } from "@chakra-ui/react"

  import { useTranslation } from 'react-i18next';

  function Content() {

    const { t } = useTranslation();

    return (
  

<Box textAlign="center" fontSize="xl">
        <Grid p={5}>
         
          
          <Heading as='h1'size='3xl'> {t('header.title')}</Heading>

          <Divider mt={5} />
          <Heading as='h2'>{t('services.title')}</Heading>
          <Text fontSize='xl'>{t('services.pruning')}</Text>
          <Text fontSize='xl'>{t('services.pest_control')}</Text>
          <Text fontSize='xl'>{t('services.scarification')}</Text>
          <Text fontSize='xl'>{t('services.lawn_mowing')}</Text>
          <Text fontSize='xl'>{t('services.other')}</Text>

          <Divider mt={5} mb={5} />
          <Heading as='h2'> {t('calendar.title')}</Heading>
          <Text fontSize='xl'> {t('calendar.winter_end.title')}</Text>
          <Text fontSize='xl'> {t('calendar.winter_end.section1')}</Text>
          <Text fontSize='xl'> {t('calendar.winter_end.tasks')}</Text>
          <Text fontSize='xl'> {t('calendar.spring.title')}</Text>
          <Text fontSize='xl'> {t('calendar.spring.section1')}</Text>
          <Text fontSize='xl'> {t('calendar.spring.tasks')}</Text>
          <Text fontSize='xl'> {t('calendar.winter_end.title')}</Text>
          <Text fontSize='xl'> {t('calendar.winter_end.section1')}</Text>
          <Text fontSize='xl'> {t('calendar.winter_end.tasks')}</Text>
          <Text fontSize='xl'> {t('calendar.spring.title')}</Text>
          <Text fontSize='xl'> {t('calendar.spring.section1')}</Text>
          <Text fontSize='xl'> {t('calendar.spring.tasks')}</Text>


          
        </Grid>
      </Box>
    )
}

export default Content;
