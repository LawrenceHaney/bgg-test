import Axios from "axios"

export const api = Axios.create({
baseURL:"https://bcw-sandbox.herokuapp.com/api/spells",
timeout: 3000
})

export const sand = Axios.create({
  baseURL:"http://bcw-sandbox.herokuapp.com/api/lhaney/spells",
  timeout: 3000
})