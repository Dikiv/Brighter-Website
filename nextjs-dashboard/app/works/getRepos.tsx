'use server'
import { ApiResponse } from './Repos'




export default async function getRepos(offset: number, limit: number){
  try {    
    const url = `https://api.github.com/users/Dikiv/repos?per_page=${limit}&page=${offset}`
    const response = (await fetch(url,{headers:{Authorization:`Bearer ${process.env.GITHUB_AUTH_TOKEN}`,}}))
    const data = (await response.json()) as ApiResponse

    return data
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
  
}
