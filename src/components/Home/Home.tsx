import { useSelector } from 'react-redux';
import { IState } from '../../types';

export const Home = () => {
  const store = [...useSelector((state: IState) => state.main)];
  
  return (
    <main className="home">
      <div className="container"> 
        <section>
          {/* <ul className="months">{weeks}</ul> */}
        </section>
      </div>
    </main>
  );
};
