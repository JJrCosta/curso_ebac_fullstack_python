$(document).ready(function() {

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#cep').mask('00.000-000', {
        placeholder: '00.000-000'
    });

    $('#state').mask('AA', {
        placeholder: 'AA'
    });
    
    $('form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            confirmEmail: {
                required: true,
                email: true
            },
            password: {
                required: true,
                password: true
            },
            confirmPassword: {
                required: true,
                password: true
            },
            fullName: {
                required: true
            },
            cpf: {
                required: true
            },
            tel: {
                required: true
            },
            date: {
                required: true,
                date: true
            },
            postalCode: {
                required: true
            },
            street: {
                required: true
            },
            neighborhood: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            ref: {
                required: false
            },
            houseNumber: {
                required: false
            },
            complement: {
                required: false
            }
        }
    });
})