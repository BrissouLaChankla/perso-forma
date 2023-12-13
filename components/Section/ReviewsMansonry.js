// import { unstable_serialize } from 'swr' // ✅ Available in server components
// import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite' // ✅ Available in server components
'use client';
import useSWR from 'swr'
 
const fetcher = (...args) => fetch(...args).then((res) => res.json())
 

export default function ReviewsMansonry() {


    const { data, error, isLoading } = useSWR('https://maps.googleapis.com/maps/api/place/details/json?&place_id=ChIJPTn1VkErzBIRoSNzaF6pN0A&key=AIzaSyDCU9Mqg8OTUljSH_4RRZW8_s4SMde2zIk', fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
   


  return (
    <div>

      <p> salut </p>
  </div>
  )
}
