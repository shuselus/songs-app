import './App.css';
import { useState, useEffect } from 'react';
import FetchData from './api/FetchData';
import MainArea from './components/MainArea';
import ErrorMessage from './components/ErrorMessage'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner} from "@fortawesome/free-solid-svg-icons";

const AppContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const Loading = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  span{
    margin-bottom: 15px;
  }
`;

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    FetchData()
    .then(response => {
      setApiData(() => response.data);
      setLoading(false);
      console.log("data>>>>", response.data)
    })
    .catch(error => setError(error))
  }, []);

  if(loading && !error){
    return (
      <AppContainer>
        <Loading >
          <span>loading...</span>
          <FontAwesomeIcon icon={faSpinner} size="2x" color="#6d6d6f" spin />
        </Loading>
      </AppContainer>
    
    )
  }

  if(error){
    return (
      <AppContainer>
        <ErrorMessage />
      </AppContainer>
    
    )
  }

  return (
      <AppContainer className='AppContainer'>
        {apiData?.length > 0 &&
           <MainArea data={apiData}/>
        }
      </AppContainer>
  );
}

export default App;
