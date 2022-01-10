import { toast } from 'react-toastify';
import { ThunkActionResult } from '../types/action';
import { loadGuitar, loadGuitarComplete, loadGuitarError, loadGuitars } from './action';
import { APIRoute, ToastMessage } from '../const';
import { Guitar } from '../types/guitar';

const fetchGuitars = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try{
      const {data} = await api.get<Guitar[]>(APIRoute.Guitars);
      dispatch(loadGuitars(data));
    } catch {
      toast.error(ToastMessage.ServerFail);
    }
  };

const fetchGuitar = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadGuitar());
    try {
      const {data} = await api.get<Guitar>(`${APIRoute.Guitars}/${id}`);
      dispatch(loadGuitarComplete(data));
    } catch {
      dispatch(loadGuitarError());
      toast.error(ToastMessage.ServerFail);
    }
  };

export {fetchGuitars, fetchGuitar};
