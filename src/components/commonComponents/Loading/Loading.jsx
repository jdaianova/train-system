import './Loading.css';
import loadingTrain from '../../../data/img/train.gif';

const Loading = () => {
  return (
    <div className='Loading'>
        <div className="Loading__pending">
          <img src={loadingTrain} alt='loading'></img>
          <h4>ИДЕТ ПОИСК</h4>
        </div>
    </div>
  )
}

export default Loading