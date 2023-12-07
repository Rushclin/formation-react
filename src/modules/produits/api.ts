import createHttpApi, { ResultContainer } from "@/configs/storeHttp";
import { ProduitType } from "@/types/produits";

const apiEndpoint = '/api/products'
const apiTagHttp = 'produits'

export const produitApi = createHttpApi(apiTagHttp)
.enhanceEndpoints({addTagTypes: [apiTagHttp]})
.injectEndpoints({
    endpoints(build){
        return {
            selectMany: build.query<ProduitType[], Record<string, never>>({
                query: () => ({url: `${apiEndpoint}/list`, method:'GET', params: {limit: 4}}),
                transformResponse: ({result}: ResultContainer<ProduitType[]>) => result,
            }),
            selecAll: build.query<ProduitType[], Record<string, never>>({
                query: () => ({url: `${apiEndpoint}/list`, method:'GET', params: {limit: 0}}),
                transformResponse: ({result}: ResultContainer<ProduitType[]>) => result,
            })
        }
    }
})

export function useProduitApi(){
    return produitApi;
}

