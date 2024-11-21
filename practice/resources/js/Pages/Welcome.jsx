import { Head, Link } from '@inertiajs/react';

export default function Welcome({ }) {

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-red-200 text-black px-32 min-h-screen w-full flex flex-col">
                {/* Header */}
                <header className='text-blue-900 flex justify-between py-5 items-center'>
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

                {/* Body of Landing Page */}
                <main className='flex justify-between items-center flex-1'>
                    <div className='w-[45%]'>
                        <div className='space-y-8'>
                            <h2 className='text-blue-900 text-5xl'>Introduce Your Product Quickly & Effectively</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </div>
                            <div className='flex gap-x-5'>
                                <button className='bg-blue-900 text-white px-16 py-1.5 rounded-sm'>Buy Kit</button>
                                <button className='bg-transparen border text-blue-900 border-blue-900 px-16 py-1.5 rounded-sm'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Right side will be empty to leave space for the illustration */}
                    <div className='w-[45%]'></div>
                </main>
                <footer>
                    <div className='flex justify-between items-start'>
                        <div><span>&copy;</span>2024 Yourcompany</div>
                        <h2 className="font-extrabold text-4xl">Landing</h2>
                        <div><button className='bg-blue-900 text-white px-16 py-1.5 rounded-sm'>Buy Now</button></div>
                    </div>
                </footer>
            </div>
        </>
    );
}
