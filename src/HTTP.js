import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HTTP = () => {
  const [videos, setVideos] = useState([]);
  // const [searchKey, setSearchKey] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const OnSearchClick = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchKey}&type=video&key=AIzaSyDi-yVo9dlufz8nOmZa84D2wchRgUV11Lw`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos/?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyDi-yVo9dlufz8nOmZa84D2wchRgUV11Lw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Container>
      <Title>Yotube</Title>
      <Input
        placeholder="검색 키워드를 입력하세요..."
        value={searchKey}
        onChange={(event) => setSearchKey(event.target.value)}
      />
      <SearchButton onClick={OnSearchClick}>Search</SearchButton>
      <VideoWrapper>
        {videos
          ? videos.map((video) => {
              return (
                <VideoContainer key={video.snippet.title}>
                  <img src={video.snippet.thumbnails.medium.url} alt="" />
                  <VideoTitle>Title: {video.snippet.title}</VideoTitle>
                </VideoContainer>
              );
            })
          : ""}
      </VideoWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 20px;
  :focus {
    outline-width: 0;
  }
`;

const SearchButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #303030;
  color: white;
  border-radius: 5px;
  width: 150px;
  font-size: 15px;
`;

const VideoWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoTitle = styled.span`
  margin: 10px 0;
  font-size: 15px;
  width: 300px;
  text-overflow: ellipsis;
`;
export default HTTP;
