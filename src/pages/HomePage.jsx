import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import {useDispatch, useSelector} from "react-redux";
import {countriesFilteredSelector, countriesSelector} from "../store/countries/countriesReducer";
import {useEffect} from "react";
import {asyncCountries} from "../store/countries/asyncCountries";
import Loader from "../components/loader/Loader";
import {searchSelector} from "../store/searchReducer";

export const HomePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {errors, loading} = useSelector(countriesSelector);
  const {countryToSearch, filter} = useSelector(searchSelector)

  const countries = useSelector(state => countriesFilteredSelector(state, {countryToSearch, filter}))

  useEffect(() => {
      console.log('loading')
      if (countries.length === 0) {
          dispatch(asyncCountries())
      }
  }, [countryToSearch, filter])

  return (
    <>
        <Controls />
        {errors && <h2>something wrong :(</h2>}
        {loading ? <Loader status={loading}/> :
            <List>
            {countries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        }
    </>
  );
};
