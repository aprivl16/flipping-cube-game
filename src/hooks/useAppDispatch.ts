import { useDispatch } from "react-redux";
import { DispatchType } from "../store/store";

const useAppDispatch = useDispatch.withTypes<DispatchType>()

export default useAppDispatch