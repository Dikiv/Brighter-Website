import getRepos from './getRepos'
import RepoList from './RepoList';

const INITIAL_NUMBER_OF_REPOS = 7

export default async function Page() {
    const initialRepos = await getRepos(0, INITIAL_NUMBER_OF_REPOS)
    return (
    
    <div className="flex grow p-8 items-center justify-center flex-col">
            <h1 className={`text-center text-yellow-300 text-6xl leading-tight mb-4`}>
                My Works
            </h1>
            <hr className="w-1/2 border-yellow-300 mb-4" />
    <RepoList initialRepos={initialRepos}
    />
    </div>
    
    );

}