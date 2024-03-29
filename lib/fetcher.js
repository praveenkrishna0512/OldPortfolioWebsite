import useSWR from 'swr';
import { server } from '../config';

const baseURL = server;

const response = (...args) => fetch(...args).then(res=>res.json())

export default function fetcher(endpoint) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR(`${baseURL}/${endpoint}`, response)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}