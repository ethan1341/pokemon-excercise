import {MoveState} from "../../../../ui-type/type";
type props = {
    onChange: any;
    moveState: any;

}
export const MovesDropdown: React.FC<props> = ({onChange, moveState}) => {
    console.log('hello')
    return (
        <>
            <p>Current State: {moveState}</p>
            <button type="button" onClick={() => onChange(MoveState.LEVELUP)}>
                {MoveState.LEVELUP}
            </button>
            <button type="button" onClick={() => onChange(MoveState.EGG)}>
                {MoveState.EGG}
            </button>
            <button type="button" onClick={() => onChange(MoveState.TUTOR)}>
                {MoveState.TUTOR}
            </button>
            <button type="button" onClick={() => onChange(MoveState.MACHINE)}>
                {MoveState.MACHINE}
            </button>

            <button type="button" onClick={() => onChange(MoveState.ALL)}>
                {MoveState.ALL}
            </button>
        </>
    )
}