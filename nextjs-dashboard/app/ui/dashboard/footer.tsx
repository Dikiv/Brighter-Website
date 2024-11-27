import { oswald } from '@/app/ui/fonts';

export function Footer() {
    return (
        <div className={`${oswald.className} h-40 bg-gray-900 border-t-2 border-yellow-300 p-4 shadow-md"`}>
            <p>This is the footer.</p>
        </div>
    );
}
