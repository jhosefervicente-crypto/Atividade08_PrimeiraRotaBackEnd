import { Setor } from "../model/Setor.js";

import {
    cadastrar,
    listar, 
    buscarPorIndice, 
    atualizar, 
    excluir

} from "../repository/setorRepository.js";


export function cadastrarSetor(req, res) {
    const {nome, sigla, responsavel, ramal} = req.body;

    const setor = new Setor(nome, sigla, responsavel, ramal);

    cadastrar(setor);

    return res.status(201).json(setor);
};

export function listarSetores(req, res) {
    const setores = listar();

    return res.status(200).json(setores);
};

export function buscarSetor(req, res) {
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if(!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        })
    }

    return res.status(200).json(setor);
};

export function atualizarSetor(req, res) {
    const indice = Number(req.params.indice);

    if (!Number.isInteger(indice) || indice < 0) {
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        });
    };

    const setor = buscarPorIndice(indice);

    if(!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        });
    };

    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
        return res.status(400).json({
            mensagem: "O corpo da requisição deve ser um objeto JSON"
        });
    };

    const {nome, sigla, responsavel, ramal} = req.body;

    if (nome !== undefined) {
        setor.nome = nome
    };

    if (sigla !== undefined) {
        setor.sigla = sigla
    };

    if (responsavel !== undefined) {
        setor.responsavel = responsavel
    };

    if (ramal !== undefined) {
        setor.ramal = ramal
    };

    atualizar(indice, setor);
    return res.status(200).json(setor);
}

export function excluirSetor(req, res) {
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if(!setor) {
        return res.status(404).json({
            mensagem: "Nenhum Setor encontrado"
        });
    };

    excluir(indice)

    return res.status(200).json({
        mensagem : "exclusão bem sucedida"
    });
};