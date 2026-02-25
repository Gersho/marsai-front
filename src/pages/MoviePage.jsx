import { useParams } from "react-router";
import TopPageTwo from "../components/base/TopPageTwo";
import { useEffect, useState } from "react";



function MoviePage() {
    let { id } = useParams();
    let [data, setData] = useState({});

    useEffect(() => {
        async function getMovieData() {
            try {
                const res = await fetch(import.meta.env.VITE_SERVER_ADDRESS + '/movies/' + id, { method: 'GET' });
                const json = await res.json();
                if (res.ok) {
                    console.log(json);
                    setData(json);
                } else {
                    console.log(json);
                }
            } catch (e) {
                console.error('error: ', e);
            }
        }
        getMovieData();
    }, []);

    return (
        <>
            <TopPageTwo />
            <div className="flex flex-col items-center">

                <video src={data.video_path} controls></video >

                <div>
                    {/* synthetica : l’aube */}
                    {/* <p>{data.}</p> */}
                    <p></p>
                    <p></p>


                </div>




            </div>

        </>

    );
}

export default MoviePage;