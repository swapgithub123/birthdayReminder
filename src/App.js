import React, { useState } from 'react';

import './App.css';
import Card from './UI/Card';
import PersonDetail from './components/PersonDetail';

const DUMMY_PERSONS = [
  {
    id:'p1',
    name:'Swapna Mishra',
    image:'https://scontent.fbho5-1.fna.fbcdn.net/v/t1.6435-1/s960x960/45279132_349768792235004_4716093855894601728_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=V0y9lvzzEkoAX_pPHc_&_nc_ht=scontent.fbho5-1.fna&tp=7&oh=812ee6a2b9ae49aaf5329312171e7c34&oe=60E50BE0',
    age:'29 years'
  },
  {
    id:'p2',
    name:'Subhashish Rath',
    image:'https://pbs.twimg.com/profile_images/751328790794543104/5x8ZMglf.jpg',
    age:'30 years'
  },
  {
    id:'p3',
    name:'Abhishek Rath',
    image:'https://qph.fs.quoracdn.net/main-thumb-329147118-200-jwwsictofmleimnzlkvdxyqnjglqofoo.jpeg',
    age:'25 years'
  },
  {
    id:'p4',
    name:'Chinu Rath',
    image:'https://www.parentingideas.com.au/wp-content/uploads/2021/01/Communicating-with-teenage-boys-product.jpg',
    age:'14 years'
  },
  {
    id:'p5',
    name:'Oana Decruza',
    image:'https://pbs.twimg.com/profile_images/1251713262049095680/Rxx_G5yS_400x400.jpg',
    age:'29 years'
  },
];
function App() {
 const [clear,setClear] = useState(false);

 const clearCardHandler = () => {
    setClear(true);
 };

  return (
    <Card>
      <h2>{!clear ? '5' : '0'}  birthdays today</h2>
      {!clear && <section className="person">
      <ul>
        {DUMMY_PERSONS.map(p =>
        (<li>
          <PersonDetail 
            key={p.id}
            image={p.image}
            name={p.name}
            age={p.age}
             />
        </li>
        ) )}
      </ul>
      </section>
}
      <button type="button" className="button" onClick={clearCardHandler}>Clear All</button>
    </Card>
  );
}

export default App;
