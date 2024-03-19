import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main className='flex flex-col justify-between h-[100vh]'>
      <div className='flex flex-col gap-10'>
        <Header />
        <Hero />
      </div>
      <p className='text-center'>©Ilham Rizqyakbar Portfolio</p>
    </main>
  )
}

export default Home;