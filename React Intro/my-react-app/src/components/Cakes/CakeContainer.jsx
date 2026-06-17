import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux/cakes/cakesAction";

export default function CakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);

  const dispatch = useDispatch();
  return (
    <div>
      <p>Tortlar soni: {numOfCakes}</p>
      <button className='bg-amber-400' onClick={() => dispatch(buyCake())}>
        Sotib olish
      </button>
    </div>
  );
}
