import { useContext } from 'react';
import Hero from '../../components/Hero'
import { UserContext } from '../../context';
import Articles from '../Articles';

const LandingPage = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <>
      {
        state.data ?
          <Articles /> :
          <Hero />
      }
    </>
  )
}

export default LandingPage