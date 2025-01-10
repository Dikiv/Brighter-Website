import { Repository } from './Repos'

type RepoProps = {
  repo: Repository
}

export default function UserCard({ repo }: RepoProps) {
  const x = 'https://github.com/' + repo.full_name
  return (
    <a href={x}>
    <div  className='bg-blue-900 bg-gradient-to-b from-gray-800 border-yellow-700 to-black border-2 w-96 mt-6 p-3'>
      <div className=''>{repo.full_name}</div>
      <div></div>
      <div className='text-base'>{repo.url}</div>
    </div>
    </a>
  )
}