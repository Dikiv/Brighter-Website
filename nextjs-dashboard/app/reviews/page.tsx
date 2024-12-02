import { oswald } from '@/app/ui/fonts';

export default function Page() {
    return (
        <div className="flex grow p-8 items-center justify-center flex-col">
            <h1 className={`${oswald.className} text-center text-yellow-300 text-6xl mb-4"`}>My Reviews</h1>
            <hr className="w-1/2 border-yellow-300" />
        </div>
    );
}