import {useState, useEffect}from 'react'
import ItemsGallery from './ItemsGallery'
import styled from 'styled-components'
import YouTube from 'react-youtube';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flax-start;
  justify-content: center;
  margin-top:30px; 
  width:100%;
  height:100%;
  margin-top: 6px;
  font-size: 12px;
`;
const PlayerContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
`;

const PlayerFooterPanel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.1rem;
  font-weight: bold;
`;

const PlayerArea = ({data}) => {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        if(data?.relatedPlaylists?.length){
            setGalleryData(()=>data.relatedPlaylists)
        }else{
            window.open(data.link, "_blank");
        }
    }, [data])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        }
    }
    const getVideoId = () => {
        const linkArr = data.link.split("v=");
        return linkArr[1];
    }
    return (
        <Container>
            <PlayerContainer>
               <YouTube videoId={getVideoId()} opts={opts} />
               <PlayerFooterPanel>
                 {data.name}
               </PlayerFooterPanel>
            </PlayerContainer>
                        
            {
                data?.relatedPlaylists?.length &&
                    <ItemsGallery data={galleryData} location="PlayerArea"/>
            }
        </Container>
    )
}

export default PlayerArea
