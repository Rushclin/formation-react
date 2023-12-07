import { AxiosRequestConfig } from 'axios';
import mock from './../MockConfig';

import { produitDatas } from '@/__mock__/fakedb/products';

let produitList = produitDatas

mock.onGet('/api/products/list').reply((request: AxiosRequestConfig) => {
    // On doit ici extraire tous les filtres 
    const {limit} = request.params

    if (limit){
        return [200,produitList.slice(0, limit)]
    }
    
    // On construit les données à renvoyer
    const list = produitList
    const total = list.length

    return [200, list]
})