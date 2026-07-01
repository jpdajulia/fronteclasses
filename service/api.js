// BASE_URL aponta para o JSON local enquanto a API não está integrada.
// Quando a API estiver pronta, basta trocar para: 'http://localhost:3000/api'
const BASE_URL = 'http://localhost:3000/api';

// Função genérica para requisições GET
async function getDados(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`Dados de ${endpoint}:`, data);

        return data;

    } catch (error) {
        console.error(`Erro ao buscar ${endpoint}:`, error);
        return [];
    }
}

// Funções específicas
async function getJogos() {
    return await getDados('/jogos');
}

async function getTimes() {
    return await getDados('/times');
}

async function getCompetidores() {
    return await getDados('/competidores');
}

async function getConfrontos() {
    return await getDados('/confrontos');
}