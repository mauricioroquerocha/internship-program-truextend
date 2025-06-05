const baseUrl = process.env.REACT_APP_BACKEND_API_BASE_URL;
const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};

export const Api = {
  get: async <T>(
    endpoint: string,
    urlSearchParams: string = "",
    headers?: Record<string, string>
  ): Promise<T> => {
    try {
      const res = await fetch(`${baseUrl}${endpoint}${urlSearchParams}`, {
        method: "GET",
        headers: { ...defaultHeaders, ...headers },
      });

      if (!res.ok) {
        console.log(`GET ${endpoint} failed`);
      }

      return res.json();
    } catch (error) {
      throw new Error("Can not make GET request" + error);
    }
  },
};
