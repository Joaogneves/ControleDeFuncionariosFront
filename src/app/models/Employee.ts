export class EmployeeDto {
    id: string
    firstName: string
    lastName: string
    cpf: string
    cnpj: string
    funcao: string

    constructor() {
        this.id = ''
        this.firstName = ''
        this.lastName = ''
        this.cpf = ''
        this.cnpj = ''
        this.funcao = ''
    }

 }

 export class EmployeeDtoResponse {
    name: string

    constructor() {
        this.name = ''
    }
 }