import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchQuery = (queryKey: unknown[], url: string) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};

export default useFetchQuery;
