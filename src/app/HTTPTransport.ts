


function queryStringify(data: Record<string, any>): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be an object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export enum Methods {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

interface IOption {
  method?: Methods;
  data?: unknown;
  headers?: Record<string, string>;
}



export class HTTPTransport {

  public get = (url: string, options: IOption) => {
    const newUrl = options.data
      ? `${url}${queryStringify(options.data as Record<string, any>)}`
      : url;
  
    return this.request(newUrl, { ...options, method: Methods.GET });
  };

  public put = (url: string, options: IOption) => {
    return this.request(url, { ...options, method: Methods.PUT });
  };

  public post = (url: string, options: IOption) => {
    return this.request(url, { ...options, method: Methods.POST });
  };

  public delete = (url: string, options: IOption) => {
    return this.request(url, { ...options, method: Methods.DELETE });
  };

  request = (
    url: string,
    options: IOption = { method: Methods.GET }
  ): Promise<any> => {
    const { headers, data, method } = options;

    const isFormData = headers?.["Content-Type"] === "multipart/form-data";

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method || Methods.GET, `${url}`);
      if (!isFormData) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      if (headers) {
        Object.entries(headers).forEach((item) => {
          const [key, value] = item;
          if (!isFormData) {
            xhr.setRequestHeader(key, value);
          }
        });
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === Methods.GET || !data) {
        xhr.send();
      } else if (isFormData) {
        xhr.send(data as XMLHttpRequestBodyInit);
      } else {
        console.log(JSON.stringify(data))
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
