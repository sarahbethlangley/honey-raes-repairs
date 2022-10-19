import { useState } from "react"
import { TicketSearch } from "./TicketList"
import { TicketList } from "./TicketSearch"




export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState()

    return <>
                    <TicketSearch setterFunction={setSearchTerms} /> 
                    <TicketList searchTermState={searchTerms} />
    </>
}