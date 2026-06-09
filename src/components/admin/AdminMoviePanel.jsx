import { useState } from "react";
import MovieStatusButton from "./base/MovieStatusButton";

function AdminMoviePanel({ movie, setMovie }) {
    const [textContent, setTextContent] = useState('');


    return (
        <div className="flex flex-col bg-primary items-center text-white">
            <p className="">Admin Panel</p>
            <div className="flex flex-col text-white  w-5/7 items-center">
                <textarea className="h-50 w-full bg-white text-black rounded-xl p-3" name=" admin-response" id="admin-response"
                    // &#10; is newline
                    value={textContent} placeholder="Administrator comment &#10;for Winner input won title" onChange={e => setTextContent(e.target.value)} ></textarea>
                <div className="flex flex-row gap-5 my-2">
                    <MovieStatusButton className="bg-green-500" text="Accept" newStatus="accepted" movie={movie} adminText={textContent} setMovie={setMovie} />
                    <MovieStatusButton className="bg-orange-500" text="Change Needed" newStatus="pending_change" movie={movie} adminText={textContent} setMovie={setMovie} />
                    <MovieStatusButton className="bg-red-500" text="Rejected" newStatus="rejected" movie={movie} adminText={textContent} setMovie={setMovie} />
                    <MovieStatusButton className="bg-blue-500" text="Selected" newStatus="selected" movie={movie} adminText={textContent} setMovie={setMovie} />
                    <MovieStatusButton className="bg-amber-300" text="Winner" newStatus="winner" movie={movie} adminText={textContent} setMovie={setMovie} />
                </div>
            </div >
        </div>
    );
}

export default AdminMoviePanel;