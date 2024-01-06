export class EmployeeDto {
    id: string
    firstName: string
    lastName: string
    cpf: string
    cnpj: string
    funcao: string
    workPlace: string

    constructor() {
        this.id = ''
        this.firstName = ''
        this.lastName = ''
        this.cpf = ''
        this.cnpj = ''
        this.funcao = ''
        this.workPlace = ''
    }

 }

 export class EmployeeDtoResponse {
    name: string

    constructor() {
        this.name = ''
    }
 }