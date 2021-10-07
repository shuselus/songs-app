import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%; 
  min-height: 120px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: baseline;
  cursor: pointer;
  margin-bottom: 4px;
`;
const Image = styled.div`
    ${props => props.customStyle && props.customStyle}
    position: relative;
    img{
      width: auto;
      height: 100%;
    }
`
const TextBlock = styled.div`
   margin-left: 15px;
   display: flex;
   flex-flow: column;
   align-items: flex-start;
   justify-content: flex-start;
   font-family: Roboto, Arial, sans-serif;
   overflow: hidden;
   h3{
    font-size: 1.2em;
    color: #030303;
   }
   p{
    font: 12px;
    color: #606060;
   }

`
const Item = ({data, style, getSelectedItem}) => {
    console.log("Item>>>", data);
    //https://i.ytimg.com/vi/f3XlIQ5pmdQ/hqdefault.jpg
    const getImageSrc = () => {
        const linkArr = data.link.split("v=");
        return `https://i.ytimg.com/vi/${linkArr[1]}/hqdefault.jpg`;
    }
    return (
        <Container onClick={() => getSelectedItem(data)}>
           <Image customStyle={style}>
               <img src={getImageSrc()} alt={data.name} />
           </Image>
           <TextBlock>
               <h3>{data.name}</h3>
               <p>{`${data.views} views`}</p>
               <p>{`likes: ${data.likes}`}</p>
               <p>{`dislikes: ${data.dislikes}`}</p>
           </TextBlock>
            
        </Container>
    )
}

export default Item
