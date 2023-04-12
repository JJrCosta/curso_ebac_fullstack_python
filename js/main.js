$(document).ready(function() {

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    
    $('#numero-casa').mask('00000')
    
    $('#cep').mask('00.000-000', {
        placeholder: '00.000-000'
    });
    
    $('form').on('submit', function(e) {
        e.preventDefault()
        this.classList.add('was-validated')

        if ($('input:invalid').length != 0) {
            $('#formulario-invalido').css('display', 'block')
            $('#formulario-valido').css('display', 'none')
        } else {
            $('#formulario-valido').css('display', 'block')
            $('#formulario-invalido').css('display', 'none')
            $('form')[0].classList.remove('was-validated')
            $('input').val('')
        }
    })

})