import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        const { results: popResults } = await popular();
        const { results: topResults } = await topRated();
        const { results: upResults } = await upcoming();
        // =>비구조 할당시 이름이 중복될 때 위와 같이 (:)를 사용해 이름을 설정할 수 있음
        console.log(popResults);

        setNowData(nowResults);
        setPopData(popResults);
        setTopData(topResults);
        setUpData(upResults);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  console.log(upData);

  return <div>Home</div>;
};
