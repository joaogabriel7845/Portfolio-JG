import Title from "./Title"

function WhatIDo() {
    return (
        <div className="flex flex-col justify-center gap-5 px-5 py-10 md:px-10 md:py-16">
            <div className="flex flex-col gap-10 section-padding">
                <Title>O que eu faço ?</Title>
                <div className="max-w-4xl border-l-4 border-gray-600 pl-6">
                    <p className="italic text-xl md:text-2xl leading-relaxed font-medium font-['Montserrat'] text-[#212830]">
                        Crio interfaces web modernas e responsivas — landing pages, blogs e aplicações front-end com foco em design e experiência do usuário.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo