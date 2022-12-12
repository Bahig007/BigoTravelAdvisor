import axios from 'axios';


  

export const getPlacesData = async (type,sw,ne) => {
    try {
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat ,
              bl_longitude:sw.lng ,
              tr_longitude:ne.lng ,
        
            },
            headers: {
              'X-RapidAPI-Key': '363b42a1e1mshf9773731df15586p1545b0jsn8d52b0e26b65',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data ;
    } catch (error) {
        console.log(error)
    }
}