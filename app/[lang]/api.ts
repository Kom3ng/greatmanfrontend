import { BaseAPI, Configuration, DefaultApi } from "../lib/api";

export const api = new DefaultApi(new Configuration({
    fetchApi: (input,init?) => fetch(input,{...init, cache: 'no-store'})
}))