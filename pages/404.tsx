import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 3000);
  // }, []);

  return (
    <div className='h-screen w-full item-center flex flex-col justify-center'>
      <h1 className="text-center text-5xl w-full">Ooops.....</h1>
      <h1 className="w-full text-center text-3xl mt-4">Halaman yang anda cari tidak ditemukan</h1>
    </div>
  );
}
