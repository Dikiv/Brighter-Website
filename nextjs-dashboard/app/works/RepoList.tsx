'use client'
import {Repository} from './Repos'
import RepoCard from './RepoCard'
import {useState,useEffect} from 'react'
import getRepos from './getRepos'
import { useInView } from 'react-intersection-observer'


type RepoListProps = {
  initialRepos: Repository[]
}

const NUMBER_OF_REPOS_TO_FETCH = 10

export default function RepoList({ initialRepos }: RepoListProps) {
    const [offset, setOffset] = useState(NUMBER_OF_REPOS_TO_FETCH)
    const [repos, setRepos] = useState<Repository[]>(initialRepos)
    const { ref, inView } = useInView()

    const loadMoreRepos = async () => {
        const apiRepos = await getRepos(offset, NUMBER_OF_REPOS_TO_FETCH)
        setRepos(repos => [...repos, ...apiRepos])
        setOffset(offset => offset + NUMBER_OF_REPOS_TO_FETCH)
    }

    useEffect(() => {
        if (inView) {
          loadMoreRepos()
    }
    }, [inView])

    
    if(Array.isArray(repos)){
    return (
      
      <div className="columns-sm space-y-3 gap-2 mx-auto mt-8 w-4/5 ">
      {
      repos.map(rep => (
        <RepoCard key={rep.id + rep.created_at} repo={rep} />
       ))}
      <div ref={ref}>
        
      </div>
    </div>
    )
  }

  return (
    <h2 className='text-6xl content-center flex-col gap-3'>
      NO REPOSITORIES FOUND
    </h2>
    )
}