const mensagensCustomizadas = (field) => {
    return {
        'string.empty': `O campo ${field} não pode ser vazio!`,
        'any.required': `O campo ${field} é obrigatório!`,
        'string.min': `O campo ${field} deve ter pelo menos {#limit} caracteres!`,
        'string.max': `O campo ${field} deve ter no máximo {#limit} caracteres!`,
        'string.email': `O campo ${field} deve ser um e-mail válido.`,
        'number.base': `O campo ${field} deve ser um número!`,
        'number.min': `O campo ${field} deve ser pelo menos {#limit}!`,
        'number.max': `O campo ${field} não pode ser maior que {#limit}!`,
        'number.precision': `O campo ${field} deve ter no máximo {#limit} casa decimal!`,
        'string.base': `O campo ${field} deve ser um texto!`,
        'string.guid': `O ${field} deve ser um UUID válido.`,
        'custom': `Erro de validação personalizado para o campo ${field}.`
    };
};

export { mensagensCustomizadas }