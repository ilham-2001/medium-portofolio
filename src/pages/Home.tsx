import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className='flex flex-col justify-between h-[100vh]'>
      <div>
        <Header />
        <Hero />
      </div>
      <p className='text-center'>©Ilham Rizqyakbar Portfolio</p>
    </div>
  )
}

export default Home;