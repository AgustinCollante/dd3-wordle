import React, {useEffect, useState} from "react";
import { getWords } from "../service/request";

const useGetWords = () => {
    const [words, setWords] = useState(null);
    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        let data = await getWords();
        console.log("DATA", data)
    }
}

export default useGetWords