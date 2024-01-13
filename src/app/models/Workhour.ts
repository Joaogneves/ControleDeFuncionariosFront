import { EmployeeDto } from "./Employee"

export class WorkhourDto {
    id: string
    workDay: string
    entry: string
    leave: string
    breakInit: string
    breakEnd: string
    startExtra: string | null
    endExtra: string | null
    workhourStatus: string;

    constructor() {
        this.id = ''
        this.workDay = ''
        this.entry = ''
        this.leave = ''
        this.breakInit = ''
        this.breakEnd = ''
        this.startExtra = null
        this.endExtra = null
        this.workhourStatus = ''
    }
}

export class WorkhourResponseDto extends WorkhourDto {
    employee: EmployeeDto

    constructor() {
        super()
        this.employee = new EmployeeDto()
    }
}