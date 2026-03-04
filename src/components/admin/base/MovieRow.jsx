function MovieRow({ data }) {

    // console.log(data);
    return (
        <tr className="">
            <td><img className=" w-20  bg-primary" src={data.cover_path} alt="" /></td>
            <td>{data.english_title}</td>
            <td className="p-2">{data.director.firstname}<br />{data.director.lastname}</td>
            <td>{data.status}</td>
            <td>{new Date(data.submitted_at).toLocaleString()}</td>
            {/* <td>{data.submitted_at}</td> */}
            <td><button>Edit</button></td>
        </tr>
    );
}

export default MovieRow;

// {
//   "id": 2,
//   "original_title": "allo",
//   "english_title": "allo",
//   "slug": "allo",
//   "submitted_at": "2026-03-02T14:25:32.000Z",
//   "youtube_url": null,
//   "video_path": "https://s3.fr-par.scw.cloud/lyn/jakah/video/2be05f18-6ff4-4002-9a59-8536bc2a1ce6.mp4",
//   "cover_path": "https://s3.fr-par.scw.cloud/lyn/jakah/coverImage/19e209c9-cb9a-4443-a6bd-11b75c765e77.png",
//   "duration": 24,
//   "is_hybrid": 1,
//   "language": "FR",
//   "original_synopsis": "laskd;ak",
//   "english_synopsis": ";lk;k;kl",
//   "creative_process": "czxczzczcz",
//   "ai_tools": "cxzcczcz",
//   "has_subs": 0,
//   "status": "draft",
//   "director": {
//     "gender": "Mr",
//     "lastname": "jhkj",
//     "firstname": "cxzcz"
//   }
// }