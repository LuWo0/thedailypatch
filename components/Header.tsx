
export default function Header(){
    return (
        <header className="flex flex-col items-center gap-6 space-x-2 px-10 pt-6 pb-2 border-b-2 border-b-[#b9971f]">
            <h1 className="text-4xl font-mono">The Daily Patch</h1>
            <h2 className="text-xs opacity-50 font-mono pb-2">Welcome to the daily patch notes. </h2>
        </header>
    );
}