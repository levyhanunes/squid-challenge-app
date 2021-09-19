import React from 'react';
import Head from './Helper/Head';
import useFetch from '../Hooks/useFetch'
import { PEGAR_FOTOS } from '../Api';
import Loading from '../Components/Helper/Loading';
import Error from '../Components/Helper/Error';
import UserStatsGraphs from './Dashboard/UserStatsGraphs';

const Dashboard = () => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {

      const {url, options} = PEGAR_FOTOS()
      const {json} = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  },[request]);

    if (loading) return <Loading />
    if (error) return <Error />
    if (data)


    return (
        <section className = "container mainContainer">
          <h1 className="title">Estatísticas</h1>
          <Head title="Estatísticas" />
          <UserStatsGraphs data={data}/>
        </section>);

        else return null
};

export default Dashboard;
