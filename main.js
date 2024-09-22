const form = document.getElementById('form-atividade');
const imgContact = `<img src="./images/est.png" alt="Emoji celebrando"/>`;
const contatos = [];

let linhas = ``;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atTabela();
    atContatos();
});

function addLinha() {
    const inputnmContact = document.getElementById('nmContact');
    const inputemContact = document.getElementById('emContact');
    const inputContatoPrincipal = document.getElementById('principalContato');
    const inputtelContact = document.getElementById('telContact');
    const inputUrl = document.getElementById('linkContact');

    if (contatos.some(contato => contato.nome === inputnmContact.value)) {
        alert(`O contato ${inputnmContact.value} já está cadastrado`);
    } else {
        const novoContato = {
            nome: inputnmContact.value,
            email: inputemContact.value,
            telefone: inputtelContact.value,
            url: inputUrl.value,
            favorito: inputContatoPrincipal.checked
        };

        contatos.push(novoContato);

        let linha = '<tr>';
        if (inputUrl.value) {
            linha += `<td><img src="${inputUrl.value}" alt="Imagem do contato" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;"></td>`;
        } else {
            linha += `<td></td>`; 
        }
        linha += `<td>${inputnmContact.value}</td>`;
        linha += `<td>${inputemContact.value}</td>`;
        linha += `<td>${inputtelContact.value}</td>`;
        linha += `<td>${inputContatoPrincipal.checked ? imgContact : ''}</td>`; 
        linha += `</tr>`;

        linhas += linha; 
        
        inputnmContact.value = '';
        inputemContact.value = '';
        inputtelContact.value = '';
        inputUrl.value = '';
        inputContatoPrincipal.checked = false;
    }
}


function atTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atContatos() {
    const totalContatos = contatos.length;
    document.getElementById('totatContact').innerHTML = totalContatos;
}
