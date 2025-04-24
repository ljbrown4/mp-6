export default function Header() {
    const headerStyle = "w-full flex flex-wrap justify-between items-center p-3 text-blue-900 bg-[white]";

    return (
        <header className={headerStyle}>
            <h2 className="text-2xl md:text-4xl font-semibold">CS-391 Oath Assignment</h2>
        </header>
    )
}