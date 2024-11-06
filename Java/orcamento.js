document.addEventListener('DOMContentLoaded', function () {
    // Função para enviar dados do formulário para Formspree
    function enviarFormulario(form, formspreeURL) {
        const formData = new FormData(form);
        const data = {};

        // Converte os dados do FormData para um objeto
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Envia os dados via fetch
        fetch(formspreeURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Orçamento enviado com sucesso!');
                form.reset(); // Reseta o formulário após o sucesso
            } else {
                alert('Erro ao enviar o orçamento. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar o orçamento.');
        });
    }

    // Verifica se o formulário de orçamento está na página
    const orcamentoForm = document.getElementById('form-orcamento');
    if (orcamentoForm) {
        const formspreeURLOrcamento = 'https://formspree.io/f/myzyeqay'; // Substitua pela URL do Formspree de orçamento
        orcamentoForm.addEventListener('submit', function (event) {
            event.preventDefault();
            enviarFormulario(orcamentoForm, formspreeURLOrcamento);
        });
    }
});
