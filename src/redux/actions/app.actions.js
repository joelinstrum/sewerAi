import { SET_TITLE, IS_LOADING, SET_DATA, SET_SCHEMA } from "../types";
import { API_DATA_ENDPOINT } from "./api";
import test_schema from "../../assets/mock-data/field_schema.json";
import test_data from "../../assets/mock-data/mocked-item.json";

/* if the schema changes often, we would probably want that as an external resource,
       but for the purposes of this challenge, I'm assuimg it does not change very often, so we'll get it as a local resource */

const isTesting = false;

export const getData = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    dispatch({
      type: SET_TITLE,
      payload: "(loading...)",
    });

    await pause(500);
    let schema;
    let data;

    if (isTesting) {
      schema = test_schema;
      data = test_data;
      await pause(1000);
    } else {
      schema = test_schema;
      data = await fetch(API_DATA_ENDPOINT)
        .then((response) => response.json())
        .then((data) => data);
    }

    dispatch({
      type: SET_SCHEMA,
      payload: schema,
    });

    dispatch({
      type: SET_DATA,
      payload: data,
    });

    dispatch({
      type: IS_LOADING,
      payload: false,
    });

    dispatch({
      type: SET_TITLE,
      payload: "SewerAI: Data loaded",
    });
  };
};

export const postData = (payload, id) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    dispatch({
      type: SET_TITLE,
      payload: "(posting data...)",
    });

    console.log(payload, id);
    if (isTesting) {
      await pause(1000);
    } else {
      const result = await postFormData(`${API_DATA_ENDPOINT}/${id}`, payload);
      console.log(result);
    }

    dispatch({
      type: SET_TITLE,
      payload: "Data posted",
    });

    dispatch(getData());
  };
};

async function postFormData(url = "", data = {}) {
  return new Promise(async (resolve) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    console.log("RESPONSE: ", response);
    resolve(response.body);
  });
}

const pause = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
