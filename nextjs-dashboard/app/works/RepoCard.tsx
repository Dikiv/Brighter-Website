import { Repository } from './Repos'

type RepoProps = {
  repo: Repository
}

export default function UserCard({ repo }: RepoProps) {
  const repoURL = 'https://github.com/' + repo.full_name

  return (
    <a onClick={()=>window.open(repoURL)}>
    <div className='flex-initial sm:flex-row bg-blue-900 bg-gradient-to-b from-gray-800 border-yellow-700 hover:border-yellow-500 to-black border-2 mb-3 p-3'>
      <div className=''>{repo.name}</div>
      <hr className=" border-yellow-300 mb-4" />
      <div></div>
      <div className='text-base mb-4 '>{repo.description}
      <img src="svgIcons/github-color.svg" alt="GitHub" className="float-right h-6 w-6" />
      </div>
      <div className='text-xs'>{repo.url}</div>
    </div>
    </a>
  )
}