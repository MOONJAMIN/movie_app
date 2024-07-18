import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 600px;
`;

const TitleWrap = styled.h2``;

export const Detail = () => {
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(1022789);

        setDetailData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(detailData);

  return <Container></Container>;
};
