import React, { useContext, useCallback } from 'react';
import { ContextMainArea } from './MainArea';
import Item from './Item'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 15px;
`;

const ItemsGallery = ({data, location}) => {
    const setSelectedItem = useContext(ContextMainArea);

     const getSelectedItem = useCallback((item)=>{
         setSelectedItem(()=>item);
     },[setSelectedItem]);

    const getStyle = () =>{
        if(location === "MainArea"){
            return {
                height: '180px',
                margin: '15px 0 0 0 ',
            }
        }
        return {
            margin: '0 0 0 8px ',
            height: '120px',
        }
    }

    return (
        <Container>
            {
              data?.length > 0 &&
              data.map((item, index) => 
                <Item 
                    key={item.name + index} 
                    data={item}
                    style={getStyle()} 
                    getSelectedItem={getSelectedItem}
                />
              )
            }
        </Container>
    )
}

export default ItemsGallery
