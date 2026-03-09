// import { FaFolderOpen } from "react-icons/fa";

import { Link } from "react-router-dom";

function MovieRow({ data }) {

    function dateDiffString(date1) {
        let datediff = (new Date() - date1.getTime()) / (24 * 60 * 60 * 1000);

        if (datediff > 1) { return "" + Math.floor(datediff) + " days" }
        else return "" + Math.floor(datediff * 24) + " hours";
    }

    return (
        <tr className="md:*:p-5 *:text-center relative">
            <td className="absolute top-0 left-0 w-full h-full">
                <Link to={"/movies/" + data.slug}
                    className="hover:bg-gray-400 hover:opacity-15 rounded-xl absolute top-0 left-0 w-full h-full"
                ></Link></td>
            <td className="hidden lg:block"><img className="md:max-w-20 rounded-xl bg-primary" src={data.cover_path} alt="" /></td>
            <td className="max-w-xs lg:max-w-md  lg:min-w-md truncate">{data.english_title}</td>
            <td className="hidden lg:table-cell md:max-w-20">{data.director.firstname}<br />{data.director.lastname}</td>
            <td className="">{data.status}</td>
            <td className="" title={new Date(data.submitted_at).toLocaleString()}>{dateDiffString(new Date(data.submitted_at))}</td>
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