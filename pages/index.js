import  Link from 'next/link'
import Image from 'next/image'
import {Flex , Box , Text , Button} from '@chakra-ui/react';
import { baseUrl ,fetchApi } from '@/utils/fetchapi'; 
import Property from '@/Component/Property';


const Bannerv= ({purpose ,  title , title2 , desc1, desc2 ,buttonText ,linkName , imageUrl })=>(
    <Flex flexWrap='wrap' justifyContent={'center'} alignItems='center'  m={'10'}  >
     <Image src={imageUrl} width={500} height={300} alt='banner' />
     <Box padding={'5'} >
  <Text  color={'gray.500'} fontSize='sm' fontWeight='medium'  > {purpose} </Text>
  <Text   fontSize='3xl' fontWeight='bold'  > {title} <br /> {title2} </Text>
  <Text  color={'gray.700'} fontSize='lg' paddingBottom='3'  paddingTop='3' > {desc1} </Text>
<Button fontSize={'xl'}bg='blue.300' color={'blackAlpha.700'} >
     <Link href={linkName}> {buttonText} </Link>

</Button>

     </Box>
    </Flex>
)

export  function Home({propertyForRent , propertyForSale}) {
    console.log(propertyForSale ,propertyForRent);
  return (
       
    <Box>

       <Bannerv 
       purpose='RENT A HOME ' 
       title='Rental Home For'
       title2='Everyone'
       desc1='xplore Apartments , villas , Homes'
       desc2='and More '
       buttonText='Explore Renting'
       linkName='/search?purpose=for-rent'
       imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
       />

         <Flex flexWrap={'wrap'} >
            {
                 propertyForRent.map((property)=> <Property  property={property} key={property.id} /> )
            }
         </Flex>
   <Bannerv 
       purpose='BUY A HOME ' 
       title='Find , Buy & Own Your'
       title2='Dream  Home'
       desc1='Explore Apartments , villas , Homes'
       desc2='and More '
       buttonText='Explore Renting'
       linkName='/search?purpose=for-seal'
       imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
       />

<Flex flexWrap={'wrap'} >

{
                 propertyForSale.map((property)=> <Property  property={property} key={property.id} /> )
            }
            </Flex>
</Box>
  
  )
}

export default Home;

export async function getStaticProps(){
     const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
     const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

     return{
       props:{
            propertyForSale: propertyForSale?.hits,
            propertyForRent: propertyForRent?.hits,

       }
     }
}

