import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {clearCurrentCountry, selectCurrentCountry} from "../store/countries/currentCountryReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {asyncCurrentCountry, asyncNeighbors} from "../store/countries/asyncCountries";
import Loader from "../components/loader/Loader";


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {countryInfo, loading, errors} = useSelector(selectCurrentCountry);

  useEffect(() => {
      dispatch(asyncCurrentCountry(name))

      return () => {
          dispatch(clearCurrentCountry())
      }
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
        {loading && <Loader/>}
      {countryInfo && <Info push={navigate} {...countryInfo} />}
    </div>
  );
};
