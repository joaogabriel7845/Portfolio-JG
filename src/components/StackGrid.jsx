function StackGrid({ title, items }) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl font-bold font-['Montserrat']">
                {title}
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
                {items.map((item) => (
                    <div key={item.name} className={`w-full md:w-[calc(50%-10px)] xl:w-[calc(25%-15px)] ${item.bg} border border-black/20 shadow-md px-5 py-4 rounded-2xl transition-all duration- hover:-translate-y-1  hover:scale-[1.02]  hover:shadow-2xl `}>
                        <div className="flex items-center gap-2">
                            <i className={`${item.icon} ${item.name === "GitHub" || item.name === "Framer" ? "text-white" : ""}  text-4xl`}></i>
                            <p className="text-white font-medium font-[Montserrat]">{item.name}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 ">
                            {item.tags.map((tag) =>
                                <div key={tag} className="flex">
            
                                    <p className="text-xs px-2.5 py-1 font-[Montserrat] text-white  bg-white/10 rounded-2xl border border-white/15">
                                        {tag}
                                    </p>
            
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StackGrid