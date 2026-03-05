import { TbTriangleFilled } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";


function SortableTableHead({
    text,
    value,
    sort,
    order,
    setSort,
    setOrder,
    setIsPageChange,
    className = ""
}) {


    return (
        <th className={`p-4  ${className}`}>
            <div className='inline'>{text}</div>
            <TbTriangleFilled onClick={() => {
                setSort(value);
                setOrder("ASC");
                setIsPageChange(false);
            }} className={`mt-1 ml-1 inline cursor-pointer ${sort === value && order === "ASC" ? "text-accent" : ""} `} />
            <TbTriangleInvertedFilled onClick={() => {
                setSort(value);
                setOrder("DESC");
                setIsPageChange(false);
            }} className={`mt-1 ml-1 inline cursor-pointer ${sort === value && order === "DESC" ? "text-accent" : ""}`} />
        </th>
    );
}

export default SortableTableHead;