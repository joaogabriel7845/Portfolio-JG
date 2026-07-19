function Title({ children, className}) {
    return (
        <h1 className={`${className} text-4xl md:text-6xl font-bold font-['Montserrat'] `}>{children}</h1>
    )
}

export default Title