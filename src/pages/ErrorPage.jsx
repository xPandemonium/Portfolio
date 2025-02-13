import Header from '../components/Header';


// In case of an error, the ErrorPage component will be rendered.
export default function ErrorPage() {
  return (
    <>
    <Header />
    <div className='flex items-center justify-center'>
      <div className='bg-error p-4 min-xl:w-[65%] max-sm:w-[90%] w-[80%] mx-auto my-10 rounded-lg shadow-lg text-white'>
        <h1 className='text-4xl font-bold text-center'>404</h1>
        <p className='text-center'>Sorry, the page you are looking for cannot be found.</p>
      </div>
    </div>
    </>
  )
}
