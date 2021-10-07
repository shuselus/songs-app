import React, {useState, useEffect, useCallback} from 'react'
import SearchBar from './SearchBar'
import ItemsGallery from './ItemsGallery'
import PlayerArea from './PlayerArea'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  margin-top:30px;
  width:100%;
  height:100%;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  max-width: 1024px;
  height: 100%;
  background-color: #f9f9f9; 
  font-size: 17px;
  margin-top: 30px;
  padding:0 15px;
`;

export const ContextMainArea = React.createContext(null);

const MainArea = ({data}) => {
    
    const [searchResData, setSearchResData] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
     
    useEffect(()=>{
        if(selectedItem && Object.entries(selectedItem).length > 0){
            setSelectedItem(null);
        }
    },[searchResData]);

    const getSearchInputValue = useCallback((value) => {
            if(value){
                let searchRes = data.filter(({name}) => 
                   name.toLowerCase().includes(value.toLowerCase())
                );
                setSearchResData(() => searchRes ? searchRes : [] );
            }
        },[searchResData],
    )

    return (
        <ContextMainArea.Provider value={setSelectedItem}>
            <Container>
                <SearchBar getSearchInputValue={getSearchInputValue}/>
                <InnerContainer>
                {
                     selectedItem
                     ?
                      <PlayerArea data={selectedItem}/>
                     :
                      <ItemsGallery data={searchResData} location="MainArea"/>
                }
               </InnerContainer>
            </Container>
        </ContextMainArea.Provider>
    )
}

export default MainArea
