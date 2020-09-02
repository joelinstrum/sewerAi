import React from "react";
import useFavicon from "@uicomponents/hooks/useFavicon";
import useSetTitle from "@uicomponents/hooks/useSetTitle";
import { Header, Footer, Loader } from "@uicomponents";
import { useData, useLoading, useSchema } from "@components/shared";
import DataFormContainer from "./components/DataFormContainer";
import "./home.scss";

const Home = () => {
  useFavicon();
  useSetTitle();
  const data = useData();
  const schema = useSchema();
  const isLoading = useLoading();

  return (
    <div className="container-main">
      <Header />
      <div className="container-home">
        <Loader isLoading={isLoading} message={"Loading, please wait..."}>
          {data && schema && <DataFormContainer data={data} schema={schema} />}
        </Loader>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
