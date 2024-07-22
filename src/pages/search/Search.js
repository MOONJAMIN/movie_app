import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import { spacing } from "../../GlobalStyled";
import { useEffect } from "react";
import { movieSearch } from "../../api";

const Container = styled.div`
  padding: 150px ${spacing.side};
`;
const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
    &::placeholder {
      font-size: 20px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.h4`
  opacity: 0.7;
  font-size: 18px;
  margin-top: 20px;
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    const result = await movieSearch(keyword);
    console.log(result);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해 주세요.",
          })}
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <button>
          <IoMdSearch />
        </button>
        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>
    </Container>
  );
};
