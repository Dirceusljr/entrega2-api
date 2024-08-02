const mensagemErro = (campo) => {
    return {
        'string.empty': `O campo ${campo} não pode ser vazio`,
        'any.required': `O campo ${campo} é obrigatório`,
        'string.email': `${campo} deve ser um email válido`,
        'string.min': `O campo ${campo} deve ter no mínimo {#limit} caracteres`,
        'string.max': `O campo ${campo} deve ter no máximo {#limit} caracteres`,
        'number.min': `O campo ${campo} deve ser maior ou igual a {#limit}`,
        'number.max': `O campo ${campo} deve ser menor ou igual a {#limit}`,
        'number.precision': `O campo ${campo} deve ter no máximo {#limit} casas decimais`,
        'string.pattern.base': `${campo} deve conter pelo menos um caractere alfanumérico, um símbolo especial e ter entre 6 e 20 caracteres`,
    }
}

export default mensagemErro;