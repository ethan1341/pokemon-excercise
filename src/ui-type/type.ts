export enum MoveState {
    TUTOR = 'TUTOR', // if user has manager_id return true
    MACHINE = 'MACHINE', // if user has null manager_id return true
    LEVELUP = 'LEVELUP', // return true
    EGG = 'EGG',
    ALL = 'ALL'
}