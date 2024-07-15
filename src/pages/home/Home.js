import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";

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
        console.log(popResults);

        setNowData(`현재상영작: ${nowResults}`);
        setPopData(`인기영화: ${popResults}`);
        setTopData(`평점높은: ${topResults}`);
        setUpData(`개봉예정: ${upResults}`);
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

  return <>{isloading ? <Loading /> : "HOME"}</>;
};
