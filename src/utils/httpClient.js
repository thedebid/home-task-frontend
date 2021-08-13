import axios from "axios";
// const BaseURL = "http://localhost:3001/api/v1/";
const BaseURL = "https://home-task.herokuapp.com/api/v1/";

const http = axios.create({
  baseURL: BaseURL,
  responseType: "json",
});

function getHeaders(isSecured) {
  let options = {
    "Content-Type": "application/json",
  };
  if (isSecured) {
    options["Authorization"] = localStorage.getItem("token");
  }
  return options;
}

function POST(url, data, isSecure = false, params = {}) {
  // console.log(data, isSecure);
  /// console.log(data);
  return http.post(url, data, {
    headers: getHeaders(isSecure),
    params,
  });
}

function GET(url, isSecure = true, params = {}) {
  return http.get(url, {
    headers: getHeaders(isSecure),
    params,
  });
}

function UPLOAD(method, url, data = {}, files = []) {
  return new Promise((resolve, reject) => {
    // send xml http request to upload file
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    if (files.length) {
      files.forEach((item, i) => {
        formData.append("img", files[i], files[i].name);
      });
    }

    for (let key in data) {
      formData.append(key, data[key]);
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      }
    };

    xhr.open(
      method,
      `${BaseURL}${url}?token=${localStorage.getItem("token")}`,
      true
    );
    xhr.send(formData);
  });
}

const exportedObject = {
  POST,
  GET,
  UPLOAD,
};

export default exportedObject;
