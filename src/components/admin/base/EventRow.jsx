import { useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import toast from "react-hot-toast";

function EventRow({ event }) {

    const api = useApi();

    const handleDelete = async (id, title) => {
        const confirm = window.confirm("Are you sure you want to delete event " + title + " ?");
        if (!confirm) return;

        console.log(confirm);
        console.log(id);

        try {
            const res = await api('/events/' + id, { method: "DELETE" });
            if (res) {
                if (res.ok) {
                    toast.success("Delete event OK");
                } else {
                    console.log(res);
                    toast.error("Something went wrong");
                }
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const getFormatedTime = (date) => {
        let h = date.getHours();
        let m = date.getMinutes();
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        return "" + h + ":" + m;
    }

    return (<>
        <div className="p-4 border text-white border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-200 hover:bg-neutral-600 bg-primary">

            <div className="flex justify-between gap-5 mb-2">
                <p className="text-3xl">{event.lang === "FR" ? "🇫🇷" : "🇬🇧"}</p>
                <h3 className="text-xl font-bold">
                    {event.title}
                </h3>
                <button onClick={() => handleDelete(event.id, event.title)} className="bg-red-500 w-15 rounded-lg hover:bg-accent hover:border-2 hover:text-black cursor-pointer">X</button>
            </div>

            <p className="text-sm mb-1">
                <span className="font-semibold"></span> {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="flex flex-wrap gap-x-6 text-sm ">
                <p>
                    <span className="font-medium"></span> {getFormatedTime(new Date(event.date)) + " (" + event.duration + " Minutes)"}
                </p>
                <p>
                    <span className="font-medium">Lieu:</span> {event.location}
                </p>
            </div>

            <p><span className="font-medium"> {event.description}
            </span></p>

            <p>
                {event.is_bookable ?
                    <span>
                        Places disponibles: {event.remaining_seats} / {event.capacity}
                    </span>
                    : <></>}
            </p>

        </div>
    </>);
}

export default EventRow;


// {"id":1,
//     "slug":"titre",
//     "status":null,
//     "created_at":"2026-06-04T12:11:12.000Z",
//     "updated_at":"2026-06-04T12:11:12.000Z",
//     "published_at":"2026-06-04T00:00:00.000Z",
//     "date":"1111-11-11T00:00:00.000Z",
//     "location":"location",
//     "title":"titre",
//     "lang":"FR",
//     "description":"descriptiondddddddddddddd",

//     "duration":50,

//     "is_bookable":1,
//     "capacity":100,
//     "remaining_seats":100},

