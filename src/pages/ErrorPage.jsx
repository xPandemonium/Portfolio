import Header from '../components/Header';
import { Styles } from '../Styles/Styles';

// In case of an error, the ErrorPage component will be rendered.
export default function ErrorPage() {
  return (
    <>
    <Header />
    <div className='flex items-center justify-center'>
      <div className={Styles.errorContainer}>
        <h1 className='text-4xl font-bold text-center'>404</h1>
        <p className='text-center'>Sorry, the page you are looking for cannot be found.</p>
      </div>
    </div>
    </>
  )
}
