import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Welcome({ auth }) {

    const isAuth = (auth) => {
        if (auth) {
            return (
                <>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold w-full">
                            Perpustakaan Digital <br /> <span className='text-3xl'>SMKN 21 Jakarta</span>
                        </h1>
                        <p className="py-6">Perpustakaan digital SMK 21 Jakarta</p>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Selamat Datang</h1>
                        <p className="py-6">Silahkan Login/Register untuk langkah selanjutnya</p>
                        <Link className="btn mx-1 border-solid border-2 bg-slate-800 text-white" href={route('login')} >Login</Link>
                        <Link className="btn mx-1 border-solid border-2 bg-slate-800 text-white" href={route('register')} >Register</Link>
                    </div>
                </>
            )
        }
    }
    return (
        <>
            <Head title="PerpusID" />
            {/* Start Container */}
            <div className="bg-slate-50 min-h-screen text-gray-800">
                <Navbar auth={auth.user} />
                <div className="hero min-h-screen bg-grey">
                    <div className="hero-content text-center">
                        {isAuth(auth.user)}
                    </div>
                </div>
            </div>
            {/* End Container */}
        </>
    );
}
