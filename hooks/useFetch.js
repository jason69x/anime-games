import useSWR from "swr";

const fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json());

const useFetch = (URL) => {
  const { data, error, mutate } = useSWR(URL, fetcher, {
    revalidateOnFocus: false,
  });
  let isLoading = !error && !data;
  let isError = error;
  return { mutate, data, isError, isLoading };
};

export default useFetch;
