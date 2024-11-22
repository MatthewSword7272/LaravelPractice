export default function Header() {
    return (
        <header className='max-auto text-blue-900 flex justify-between py-5 items-center z-10'>
                    <div>
                        <ul className='flex gap-14'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-extrabold text-4xl">Landing</h2>
                    </div>
                    <div><button className='bg-blue-900 text-white px-16 py-1.5 rounded-sm'>Buy Now</button></div>
                </header>
    )
}
