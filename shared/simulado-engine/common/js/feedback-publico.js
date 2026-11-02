// ==========================================
// Arquivo: feedback-publico.js
// Descrição: Seção pública "O que os alunos dizem" (home e páginas de curso).
//            Só exibe avaliações aprovadas. Todo texto do aluno entra por
//            textContent, nunca como HTML.
// ==========================================
import { listarAprovados, resumirAvaliacoes } from './feedback.js';

function el(tag, classe, texto) {
  const n = document.createElement(tag);
  if (classe) n.className = classe;
  if (texto !== undefined) n.textContent = texto;
  return n;
}

function estrelas(qtd) {
  const n = el('span', 'text-yellow-500 tracking-tight', '★'.repeat(qtd) + '☆'.repeat(5 - qtd));
  n.setAttribute('role', 'img');
  n.setAttribute('aria-label', qtd + ' de 5 estrelas');
  return n;
}

function cartao(f) {
  const c = el('figure', 'bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col');
  const topo = el('div', 'flex items-center justify-between mb-3');
  topo.appendChild(estrelas(f.estrelas));
  if (f.destaque === true) topo.appendChild(el('span', 'text-[10px] font-bold uppercase tracking-wide bg-blue-100 text-blue-700 rounded-full px-2 py-0.5', 'Destaque'));
  c.appendChild(topo);
  c.appendChild(el('blockquote', 'text-gray-700 text-sm leading-relaxed flex-grow', '“' + f.texto + '”'));
  c.appendChild(el('figcaption', 'mt-4 text-sm font-semibold text-gray-900', f.nomePublico));
  return c;
}

// Esconde a seção quando não há avaliações aprovadas ou a leitura falha.
export async function montarDepoimentos(secao, { escopo, limite = 6 }) {
  const lista = secao.querySelector('[data-depoimentos]');
  const resumo = secao.querySelector('[data-depoimentos-resumo]');
  if (!lista) return;

  try {
    const todos = await listarAprovados({ escopo, limite: 50 });
    if (todos.length === 0) return;

    const { total, media } = resumirAvaliacoes(todos);
    if (resumo) {
      resumo.textContent = '';
      resumo.appendChild(estrelas(Math.round(media)));
      resumo.appendChild(el('span', 'ml-2 text-sm text-gray-600',
        media.toLocaleString('pt-BR') + ' de 5 · ' + total + (total === 1 ? ' avaliação' : ' avaliações')));
    }

    lista.textContent = '';
    todos.slice(0, limite).forEach(f => lista.appendChild(cartao(f)));
    secao.hidden = false;
  } catch (erro) {
    console.warn('Avaliações indisponíveis:', erro);
  }
}
