import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { fetchAllTasks } from "../api";

export default function Header() {
    const [all, setAll] = useState(null);
  
    useEffect(() => {
        fetchAllTasks().then((response) => {
            setAll(response.data.length)
        });
    }, [])
  
    return (
    <header className="flex justify-between items-center px-4">
      <h1 className="p-0">TODO list</h1>

      <nav className="">
        <ul className="list-none flex justify-center gap-4 ">
          <li>
            <Link to="/">Wszystkie {all ? ` – ${all}`: '' }</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}
