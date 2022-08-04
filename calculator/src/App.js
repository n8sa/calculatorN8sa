import './index.css';
import Wrapper from './component/Wrapper';
import Screen from './component/Screen';
import ButtonBox from './component/ButtonBox';
import Button from './component/Button';

const btnValues =[
  ["C","+-","%","/"],
  ["7","8","9","x"],
  ["4","5","6","-"],
  ["1","2","3","+"],
  ["0",".","="],
];

function App() {
  return (
    <div className="App">
     <Wrapper>
      <Screen/>
      <ButtonBox>
        {btnValues.flat().map((btn,i)=>(
          <Button
          value={btn}
          key={i}
          />
        ))}
      </ButtonBox>
     </Wrapper>
    </div>
  );
}

export default App;
