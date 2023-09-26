function DarkTheme() {
    return (
        <style jsx global>{`
            /* Dark Theme */
            :root {
                --background-color: rgb(37, 37, 37);
                --link-color: rgb(240, 171, 22);
                --text-color: rgb(243, 243, 243);  
            }

        `}</style>
    )
}

export default DarkTheme;