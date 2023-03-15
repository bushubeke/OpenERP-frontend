import { create } from 'zustand'

export const useStyle = create((set) => ({
    styles:{ 
        appSecClass : "flex flex-row w-full h-full overflow-auto p-1 items-start justify-start",
        dashDivSection : "w-3/12 min-h-full h-full bg-gray-100",
        contDivSection : "h-auto w flex flex-col text-black justify-center",
        sideBarNav : 'hidden lg:block lg:w-2/12 flex flex-col shadow-xl items-start justify-start overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100',
        bushuContSec : "w-full lg:w-10/12 h-full bg-slate-50 shadow-xl grid py-1 place-items-center  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",
        bushuComponentContainer : "items-start justify-center w-11/12 h-auto p-2 m-2",
        componentWorkingDiv : " flex flex-col items-center items-stretch space-y-3 justify-start w-full h-full pt-5 pb-5 px-3",
    },
    
  }))

