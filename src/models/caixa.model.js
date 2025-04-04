const mongoose = require('mongoose');

// Model de Caixa
const CaixaSchema = new mongoose.Schema({
  codigo_loja: {
    type: String,
    required: true
  },
  codigo_empresa: {
    type: String,
    required: true
  },
  codigo_caixa: {
    type: Number,
  },
  caixa: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['aberto', 'fechado'],
    default: 'aberto'
  },
  responsavel_abertura: {
    type: String,
    required: true
  },
  responsavel_fechamento: {
    type: String,
    default: null
  },
  data_abertura: {
    type: Date,
    default: Date.now
  },
  data_fechamento: {
    type: Date,
    default: null
  },
  saldo_inicial: {
    type: Number,
    default: 0
  },
  saldo_final: {
    type: Number,
    default: 0
  }
});

const Caixa = mongoose.model('Caixa', CaixaSchema);

module.exports =  Caixa ;