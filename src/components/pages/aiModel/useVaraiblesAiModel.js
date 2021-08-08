import {useState, useEffect} from 'react';
import { fetchApi } from '../bankenergi/Api';


const useVariablesAiModel = () => {
    //variables that contains data fetched through API : 
    const [v1, setV1] = useState([]);
    const [v2, setV2] = useState([]);
   
    // Exlen
    const [graphV1Id, setGraphEV1Id] = useState(0)
    const nextGraphV1Id = () => {
        setGraphEV1Id(graphV1Id == 3 ? 0 : graphV1Id+ 1);
    }
    const prevGraphV1Id = () => {
        setGraphEV1Id(graphV1Id == 0 ? 3 : graphV1Id- 1);
    }
   //// 
   const [graphV2Id, setGraphEV2Id] = useState(0)
   const nextGraphV2Id = () => {
        setGraphEV2Id(graphV2Id == 3 ? 0 : graphV2Id+ 1);
   }
   const prevGraphV2Id = () => {
       setGraphEV2Id(graphV1Id == 0 ? 3 : graphV2Id- 1);
   }
useEffect(() => {
        fetchApi('ai_1').then(data => {
            setV1(data);
            })
        fetchApi('ai_2').then(data => {
            setV2(data);
            })
            
        }, [])


    return {v1,v2,graphV1Id,graphV2Id,nextGraphV1Id,prevGraphV1Id,nextGraphV2Id,prevGraphV2Id};
}

export default useVariablesAiModel