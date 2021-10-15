function Footer() {
    return (
        <div className="flex h-24 ml-32 items-center justify-between px-10">
            <p className="text-sm text-[#424242]">Copyright HEIP Vie Étudiante</p>
            <div className="flex text-sm text-[#424242] space-x-1 items-center">
                <p>Dev with </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="red">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <p>by </p>
                <a href="https://thomas-fritschy.tech" className="text-[#5f5f5f]" target="_blank">Thomas Fritschy</a>
            </div>
        </div>
    )
}

export default Footer
