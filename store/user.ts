import { create } from 'zustand'

type Idprops={
    id: String
}
export const userStore = create((set)=>{
    user:{
        full_name:'Eunicio Aires'
    }
})