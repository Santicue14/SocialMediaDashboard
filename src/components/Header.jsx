import { useState, useEffect } from "react"

export default function Header() {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)

    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-fit rounded-b-[20px] pt-8 px-6 p-3">
            <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
            <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">Total Followers: 23,004</p>
            <hr className="bg-black mb-[19px]" />
            <div className="flex justify-between">
                <p className="text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue">Dark Mode</p>
                <label htmlFor="toggleDarkMode" className="border bg-Toggle w-12 rounded-full h-6 cursor-pointer p-[3px] relative overflow-hidden">
                    <input type="checkbox" onClick={handleClick} id="toggleDarkMode" className="peer sr-only" />
                    <div className=" w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0"></div>
                    <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>


    )
}
