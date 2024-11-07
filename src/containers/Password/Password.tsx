import { useDispatch, useSelector } from 'react-redux';
import { addNumber, checkPassword, deleteNumber } from './PasswordSlice.ts';
import { RootState } from '../../app/store.ts';

const Password = () => {
  const dispatch = useDispatch();
  const { enteredPassword, status } = useSelector((state: RootState) => state.password);

  const numbers = [1,2,3,4,5,6,7,8,9,0];

  return (
    <div className="container my-5">
      <div className="border border-3 p-3">
        <div
          className={`border border-3 p-3 ${status === 'granted' ? 'bg-success-subtle' : status === 'denied' ? 'bg-danger-subtle' : ''}`}>
          <h3>
            {enteredPassword.length > 0 && (
              <div>
                {status === 'granted' ? 'Access Granted' : status === 'denied' ? 'Access Denied' : ''}
              </div>
            )}

            {'*'.repeat(enteredPassword.length)}
          </h3>
        </div>
        <hr/>
        <div className="row justify-content-center">
          {numbers.map((number) => (
            <div key={number} className="col-4 mb-2 d-flex">
              <button
                value={number}
                onClick={() => dispatch(addNumber(number.toString()))}
                className="btn btn-outline-info w-100"
              >
                {number}
              </button>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-sm-between">
          <button className="btn btn-outline-danger col-4" onClick={() => dispatch(deleteNumber())}>
            del
          </button>
          <button className="btn btn-outline-success col-4" onClick={() => dispatch(checkPassword())}>
            E
          </button>
        </div>
      </div>
    </div>

  );
};

export default Password;