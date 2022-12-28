
import axios from 'axios';
import BASE_URL from '../config/host';
type AppProps = {
  body: any[];
}
export const loadProgram = async () => {
    const program = await axios.get(BASE_URL + "/gt/index.php/wp-json/programs/list?per_page=10",  {
        auth: {
          username: "GTAuthToken",
          password: "gtAuth$%^@#132"
        },
      });
  
    return program.data.data;
  };


  export const programDetails = async (id: any) => {
    // program_id=MjQ2
     
    const details = await axios.get(`${BASE_URL}/gt/index.php/wp-json/program/details?program_id=${id}`,  {
        auth: {
          username: "GTAuthToken",
          password: "gtAuth$%^@#132"
        },
      });
  
    return details.data.data;
  };



