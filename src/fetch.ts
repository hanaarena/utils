interface RequestOptions extends RequestInit {
  endpoint: string;
  baseUrl?: string;
}

// placeholder for the base URL
const BASEURL = "";

const request = async <T>(options: RequestOptions): Promise<T> => {
  const {
    endpoint,
    method = "GET",
    headers = {},
    body,
    baseUrl = BASEURL,
    ...rest
  } = options;

  const url = `${baseUrl ?? ""}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  const fetchOptions: RequestInit = {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  };

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorMsg = await response.json();
      throw new Error(
        `${(errorMsg as { message: string })?.message || response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};

const get = <T>(endpoint: string, options?: RequestInit): Promise<T> =>
  request<T>({ ...options, endpoint, method: "GET" });

const post = <T>(
  endpoint: string,
  body: any,
  options?: RequestInit
): Promise<T> => request<T>({ ...options, endpoint, method: "POST", body });

const put = <T>(
  endpoint: string,
  body: any,
  options?: RequestInit
): Promise<T> => request<T>({ ...options, endpoint, method: "PUT", body });

const del = <T>(endpoint: string, body: any, options?: RequestInit): Promise<T> =>
  request<T>({ ...options, endpoint, method: "DELETE", body });

const patch = <T>(
  endpoint: string,
  body: any,
  options?: RequestInit
): Promise<T> => request<T>({ ...options, endpoint, method: "PATCH", body });

const upload = async <T>(
  endpoint: string,
  body: any,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(endpoint, { ...options, method: "POST", body });
  if (!response.ok) {
    const errorMsg = await response.json();
    throw new Error(
      `${(errorMsg as { message: string })?.message || response.statusText}`
    );
  }
  const data: T = await response.json();
  return data;
};

export { get, post, put, del, patch, upload };
