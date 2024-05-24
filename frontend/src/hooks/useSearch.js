import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useSearch = () => {
    const [search, setSearch] = useState([])

    useEffect(() => {
        const getSearch = async () => {
            try{
            const res = await fetch('/api/users/search-users',{
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ searchVal:"san" }) 
              })
            const data = await res.json()
            console.log("====search data",data)
            setSearch(data)
            }catch(error){
                toast.error(error.message);
            }
        }
        getSearch()
    }, [])
    
 return { search }
}

export default useSearch
