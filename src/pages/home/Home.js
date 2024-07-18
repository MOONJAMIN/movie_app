/** @format */

import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import "swiper/css";
import { Movies } from "./components/Movies";
import { MainBanner } from "./components/MainBanner";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        const { results: popResults } = await popular();
        const { results: topResults } = await topRated();
        const { results: upResults } = await upcoming();
        // =>비구조 할당시 이름이 중복될 때 위와 같이 (:)를 사용해 이름을 설정할 수 있음
        // console.log(nowResults);

        setNowData(nowResults);
        setPopData(popResults);
        setTopData(topResults);
        setUpData(upResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);
  console.log(isloading);

  // console.log(isloading);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <>
          <MainBanner data={nowData[0]} />

          <Movies movieData={nowData} />
          <Movies title="현재 상영 영화" movieData={nowData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="평점 좋음" movieData={topData} />
          <Movies title="개봉 예정" movieData={upData} />
        </>
      )}
    </>
  );
};
