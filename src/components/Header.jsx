function Header() {
    return (
        <div className="w-screen z-50 p-6 md:p-10 fixed bg-white shadow ">
            
            <div className="flex justify-between">

                <div className="flex gap-2">

                    <div className="w-12 h-12 border-4 flex justify-center items-center">
                        <h1 className="text-3xl font-['HelveticaNowDisplay-ExtraBold'] text-black">J</h1>
                    </div>
                    
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-['HelveticaNowDisplay-ExtraBold']">João Gabriel</h1>
                        <p className="text-[12px] font-['Montserrat'] tracking-widest">WEB DEVELOPER & FRONT-END</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Header