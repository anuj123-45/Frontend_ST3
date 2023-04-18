import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black">
    <div className='flex items-baseline justify-content-center ' >
    <div className="font-extrabold text-neutral-200 p-4 max-w-9xl mx-auto container tracking-widest ">
        <Link href="/" passHref>
      <button >  <span className='text-xl'> book  <span className='text-red-600'>my</span> show</span></button>
        </Link>
      </div>
      <div className='gap-5 flex'>
      <Link href="/login" passHref><button className="bg-rose-700 text-white py-3 px-6 rounded text-sm mt-4">Login</button></Link>
      <Link href="/signup" passHref><button className="bg-lime-700 text-white py-3 px-6 rounded text-sm mt-4">SignUp</button></Link>
      </div>

    </div>
     
    </nav>
  );
};

export default Navbar;
