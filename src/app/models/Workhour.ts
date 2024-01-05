import { Time } from "@angular/common"

export class WorkhourDto {
    id: string
    workday: string
    entry: string
    leave: string
    breakInit: string
    breakEnd: string
    startExtra: string | null
    endExtra: string | null
    itsHolliday: boolean

    constructor() {
        this.id = ''
        this.workday = ''
        this.entry = ''
        this.leave = ''
        this.breakInit = ''
        this.breakEnd = ''
        this.startExtra = null
        this.endExtra = null
        this.itsHolliday = false
    }
}