document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.querySelector('.form-cadastro');

    formCadastro.addEventListener('submit', async function (event) {
        event.preventDefault();

        const id = document.getElementById('id').value;
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const idade = document.getElementById('idade').value;

        const userData = {
            id: parseInt(id),
            nome,
            email,
            senha,
            idade: parseInt(idade)
        };

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                formCadastro.reset();
            } else {
                const errorData = await response.json();
                alert(errorData.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});