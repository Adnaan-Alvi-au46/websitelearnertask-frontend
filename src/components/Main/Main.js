
import Greetings from '../Greeting/Greetings';
import Card from '../UI/Card';
import './Main.css';

const Main = () => {

  return (
    <div>
      <Card className='main'>
        <Greetings/>
      </Card>
    </div>
  );
};

export default Main;
