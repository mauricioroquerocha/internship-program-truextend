import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../types/ErrorMessages";

const baseUrl = process.env.REACT_APP_BACKEND_API_BASE_URL;
const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};

export const Api = {
  get: async <T>(
    endpoint: string,
    urlSearchParams: string = "",
    headers?: Record<string, string>
  ): Promise<T | null> => {
    try {
      const res = await fetch(`${baseUrl}${endpoint}${urlSearchParams}`, {
        method: "GET",
        headers: { ...defaultHeaders, ...headers },
      });

      if (!res.ok) {
        toast(ERROR_MESSAGES.SEARCH);

        return null;
      }

      return res.json();
    } catch (error) {
      toast(ERROR_MESSAGES.GENERIC);

      return null;
    }
  },
};
