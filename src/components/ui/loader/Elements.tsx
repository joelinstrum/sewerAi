import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: calc(50% - 20%);
  left: calc(50% - 10%);
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircleLoaderContainer = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  border: 10px solid #afafaf;
  border-top: 10px solid #22a1d8;
  border-radius: 50%;
`;

export const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
`;
