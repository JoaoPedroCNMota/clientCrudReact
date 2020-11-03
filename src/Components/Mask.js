export const CpfMask = value =>{
    return value
    .replace(/\D/g, '') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const CepMask = value =>{
    return value
    .replace(/\D/g, '') 
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const ResidencialPhoneMask = value =>{
    return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}


export const CelphoneMask = value =>{
    return value
    .replace(/\D/g, '') 
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}