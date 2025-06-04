import { useSelector } from "react-redux";
import { RootStateType } from "../store/store";

const useAppSelector = useSelector.withTypes<RootStateType>()

export default useAppSelector