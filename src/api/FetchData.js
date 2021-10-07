import axios from 'axios';

const FetchData = async () => {
  try {
    return await axios.get('https://mocki.io/v1/24f90b85-6b05-445f-9822-4e611d45fc27');
  } catch (error) {
    console.error(`FetchData ERROR: ${error}`);
  }
};

export default FetchData;
