import { FC } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
interface CardProp {
  title: string;
  id: string;
}
 

const LocationCard: FC<CardProp> = ({ title, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/master/filledchecklist/${id}`)} className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default transform transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
      <GiShoppingCart size={30} />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {title}
          </h4>
          <span className="text-sm font-medium"></span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default LocationCard;
