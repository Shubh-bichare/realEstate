import axios from 'axios';


    export const baseUrl ='https://bayut.p.rapidapi.com'


export const fetchApi= async(url) =>{
      const {data}=await axios.get((url) , {
          
     headers: {
    'X-RapidAPI-Key': 'fd5ea8d242msh39212293b9647f0p18bf19jsn0c136833ed13',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
           }
      })
       return data;
}





