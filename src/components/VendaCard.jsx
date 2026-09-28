import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Plus, Trash2, Copy, Save, Smartphone, RefreshCw, Headphones, CreditCard } from 'lucide-react'

const STORAGE_KEY = 'softfone-vendas'

const formasPagamento = [
  'Dinheiro',
  'PIX',
  'Cartão de Débito',
  'Cartão de Crédito à vista',
  'Cartão de Crédito parcelado',
]

const vendaVazia = {
  cliente: '',
  formaPagamento: 'PIX',
  parcelas: 1,
  aparelhoVendido: '',
  precoAparelho: '',
  custoAparelho: '',
  temTroca: false,
  aparelhoTroca: '',
  valorTroca: '',
  acessorios: [],
}

const num = (valor) => {
  const n = parseFloat(String(valor).replace(',', '.'))
  return Number.isFinite(n) ? n : 0
}

const brl = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function calcularTotais(venda) {
  const precoAcessorios = venda.acessorios.reduce((soma, a) => soma + num(a.preco), 0)
  const custoAcessorios = venda.acessorios.reduce((soma, a) => soma + num(a.custo), 0)
  const totalVenda = num(venda.precoAparelho) + precoAcessorios
  const valorTroca = venda.temTroca ? num(venda.valorTroca) : 0
  const custoTotal = num(venda.custoAparelho) + custoAcessorios
  const valorEntra = totalVenda - valorTroca
  // A troca entra como um aparelho no estoque, então conta a favor da loja no lucro
  const lucro = totalVenda - custoTotal

  return { precoAcessorios, custoAcessorios, totalVenda, valorTroca, custoTotal, valorEntra, lucro }
}

function lerVendas() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

function resumoTexto(venda, totais) {
  const linhas = [
    `*Venda SoftFone RP* - ${venda.data || new Date().toLocaleDateString('pt-BR')}`,
    venda.cliente && `Cliente: ${venda.cliente}`,
    `Aparelho vendido: ${venda.aparelhoVendido || '-'} (${brl(num(venda.precoAparelho))})`,
  ]
  if (venda.acessorios.length) {
    linhas.push('Acessórios:')
    venda.acessorios.forEach((a) => linhas.push(`  • ${a.nome || '-'} (${brl(num(a.preco))})`))
  }
  if (venda.temTroca) {
    linhas.push(`Seminovo na troca: ${venda.aparelhoTroca || '-'} (${brl(totais.valorTroca)})`)
  }
  const pagamento = venda.formaPagamento === 'Cartão de Crédito parcelado'
    ? `${venda.formaPagamento} em ${venda.parcelas}x`
    : venda.formaPagamento
  linhas.push(
    `Forma de pagamento: ${pagamento}`,
    `Custo (aparelho + acessórios): ${brl(totais.custoTotal)}`,
    `Valor que vai entrar: ${brl(totais.valorEntra)}`,
    `Lucro: ${brl(totais.lucro)}`,
  )
  return linhas.filter(Boolean).join('\n')
}

function VendaCard() {
  const [venda, setVenda] = useState(vendaVazia)
  const [vendas, setVendas] = useState(lerVendas)
  const [aviso, setAviso] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vendas))
    } catch {
      // armazenamento indisponível (aba anônima etc.)
    }
  }, [vendas])

  const totais = calcularTotais(venda)
  const atualizar = (campo, valor) => setVenda((v) => ({ ...v, [campo]: valor }))

  const adicionarAcessorio = () =>
    atualizar('acessorios', [...venda.acessorios, { nome: '', preco: '', custo: '' }])
  const atualizarAcessorio = (i, campo, valor) =>
    atualizar('acessorios', venda.acessorios.map((a, idx) => (idx === i ? { ...a, [campo]: valor } : a)))
  const removerAcessorio = (i) =>
    atualizar('acessorios', venda.acessorios.filter((_, idx) => idx !== i))

  const mostrarAviso = (texto) => {
    setAviso(texto)
    setTimeout(() => setAviso(''), 2500)
  }

  const salvar = () => {
    if (!venda.aparelhoVendido) {
      mostrarAviso('Informe o aparelho vendido.')
      return
    }
    setVendas((lista) => [{ ...venda, id: Date.now(), data: new Date().toLocaleDateString('pt-BR') }, ...lista])
    setVenda(vendaVazia)
    mostrarAviso('Venda salva!')
  }

  const copiar = async (v) => {
    try {
      await navigator.clipboard.writeText(resumoTexto(v, calcularTotais(v)))
      mostrarAviso('Resumo copiado!')
    } catch {
      mostrarAviso('Não foi possível copiar.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            SoftFone <span className="text-orange-500">Vendas</span>
          </h1>
          <a href="#" className="text-sm text-gray-500 hover:text-orange-500">Voltar ao blog</a>
        </div>

        <Card className="border-t-4 border-t-orange-500">
          <CardHeader>
            <CardTitle>Registrar Venda</CardTitle>
            <CardDescription>Preencha os dados e veja na hora o custo e o valor que vai entrar.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cliente">Cliente (opcional)</Label>
              <Input id="cliente" value={venda.cliente} onChange={(e) => atualizar('cliente', e.target.value)} placeholder="Nome do cliente" />
            </div>

            {/* Forma de pagamento */}
            <section className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2"><CreditCard className="w-4 h-4 text-orange-500" /> Forma de pagamento</h3>
              <div className="flex flex-wrap gap-2">
                {formasPagamento.map((forma) => (
                  <Button
                    key={forma}
                    type="button"
                    size="sm"
                    variant={venda.formaPagamento === forma ? 'default' : 'outline'}
                    className={venda.formaPagamento === forma ? 'bg-orange-500 hover:bg-orange-600' : ''}
                    onClick={() => atualizar('formaPagamento', forma)}
                  >
                    {forma}
                  </Button>
                ))}
              </div>
              {venda.formaPagamento === 'Cartão de Crédito parcelado' && (
                <div className="flex items-center gap-2 pt-1">
                  <Label htmlFor="parcelas">Parcelas</Label>
                  <Input
                    id="parcelas"
                    type="number"
                    min="2"
                    max="18"
                    className="w-24"
                    value={venda.parcelas}
                    onChange={(e) => atualizar('parcelas', e.target.value)}
                  />
                </div>
              )}
            </section>

            <Separator />

            {/* Aparelho vendido */}
            <section className="space-y-3">
              <h3 className="font-semibold flex items-center gap-2"><Smartphone className="w-4 h-4 text-orange-500" /> Aparelho vendido</h3>
              <Input value={venda.aparelhoVendido} onChange={(e) => atualizar('aparelhoVendido', e.target.value)} placeholder="Ex.: POCO X7 Pro 256GB" />
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="preco">Preço de venda (R$)</Label>
                  <Input id="preco" inputMode="decimal" value={venda.precoAparelho} onChange={(e) => atualizar('precoAparelho', e.target.value)} placeholder="0,00" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="custo">Custo (R$)</Label>
                  <Input id="custo" inputMode="decimal" value={venda.custoAparelho} onChange={(e) => atualizar('custoAparelho', e.target.value)} placeholder="0,00" />
                </div>
              </div>
            </section>

            <Separator />

            {/* Seminovo na troca */}
            <section className="space-y-3">
              <label className="font-semibold flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-orange-500 w-4 h-4" checked={venda.temTroca} onChange={(e) => atualizar('temTroca', e.target.checked)} />
                <RefreshCw className="w-4 h-4 text-orange-500" /> Cliente deu seminovo na troca
              </label>
              {venda.temTroca && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1 sm:col-span-2">
                    <Label htmlFor="aparelhoTroca">Aparelho seminovo</Label>
                    <Input id="aparelhoTroca" value={venda.aparelhoTroca} onChange={(e) => atualizar('aparelhoTroca', e.target.value)} placeholder="Ex.: iPhone 11 64GB" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="valorTroca">Valor da troca (R$)</Label>
                    <Input id="valorTroca" inputMode="decimal" value={venda.valorTroca} onChange={(e) => atualizar('valorTroca', e.target.value)} placeholder="0,00" />
                  </div>
                </div>
              )}
            </section>

            <Separator />

            {/* Acessórios */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold flex items-center gap-2"><Headphones className="w-4 h-4 text-orange-500" /> Acessórios que levou</h3>
                <Button type="button" size="sm" variant="outline" onClick={adicionarAcessorio}>
                  <Plus className="w-4 h-4" /> Adicionar
                </Button>
              </div>
              {venda.acessorios.length === 0 && <p className="text-sm text-gray-500">Nenhum acessório.</p>}
              {venda.acessorios.map((a, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr] gap-2">
                    <Input className="col-span-2 sm:col-span-1" value={a.nome} onChange={(e) => atualizarAcessorio(i, 'nome', e.target.value)} placeholder="Ex.: Capinha + película" />
                    <Input inputMode="decimal" value={a.preco} onChange={(e) => atualizarAcessorio(i, 'preco', e.target.value)} placeholder="Preço (R$)" />
                    <Input inputMode="decimal" value={a.custo} onChange={(e) => atualizarAcessorio(i, 'custo', e.target.value)} placeholder="Custo (R$)" />
                  </div>
                  <Button type="button" size="icon" variant="ghost" onClick={() => removerAcessorio(i)} aria-label="Remover acessório">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </section>

            {/* Resumo */}
            <div className="rounded-lg bg-gray-50 border p-4 space-y-2 text-sm">
              <Linha rotulo="Aparelho" valor={brl(num(venda.precoAparelho))} />
              <Linha rotulo="Acessórios" valor={brl(totais.precoAcessorios)} />
              <Linha rotulo="Total da venda" valor={brl(totais.totalVenda)} forte />
              {venda.temTroca && <Linha rotulo="(-) Seminovo na troca" valor={`- ${brl(totais.valorTroca)}`} />}
              <Separator />
              <Linha rotulo="Custo (aparelho + acessórios)" valor={brl(totais.custoTotal)} />
              <Linha rotulo="Lucro" valor={brl(totais.lucro)} className={totais.lucro >= 0 ? 'text-green-600' : 'text-red-600'} />
              <div className="flex items-center justify-between rounded-md bg-orange-500 text-white px-3 py-2 mt-2">
                <span className="font-semibold">Valor que vai entrar</span>
                <span className="text-lg font-bold">{brl(totais.valorEntra)}</span>
              </div>
              {venda.formaPagamento === 'Cartão de Crédito parcelado' && num(venda.parcelas) > 1 && (
                <p className="text-right text-gray-500">{venda.parcelas}x de {brl(totais.valorEntra / num(venda.parcelas))}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="flex-1 bg-orange-500 hover:bg-orange-600" onClick={salvar}>
                <Save className="w-4 h-4" /> Salvar venda
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => copiar(venda)}>
                <Copy className="w-4 h-4" /> Copiar resumo
              </Button>
            </div>
            {aviso && <p className="text-center text-sm text-orange-600">{aviso}</p>}
          </CardContent>
        </Card>

        {vendas.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Vendas salvas</CardTitle>
              <CardDescription>Ficam guardadas neste navegador.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {vendas.map((v) => {
                const t = calcularTotais(v)
                return (
                  <div key={v.id} className="border rounded-lg p-3 text-sm space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <strong>{v.aparelhoVendido}</strong>
                      <span className="text-gray-500">{v.data}</span>
                    </div>
                    <p className="text-gray-600">
                      {v.formaPagamento}{v.formaPagamento === 'Cartão de Crédito parcelado' ? ` em ${v.parcelas}x` : ''}
                      {v.temTroca && ` • Troca: ${v.aparelhoTroca} (${brl(t.valorTroca)})`}
                    </p>
                    {v.acessorios.length > 0 && (
                      <p className="text-gray-600">Acessórios: {v.acessorios.map((a) => a.nome).filter(Boolean).join(', ')}</p>
                    )}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <span>Custo: {brl(t.custoTotal)} • <strong>Entra: {brl(t.valorEntra)}</strong></span>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" onClick={() => copiar(v)} aria-label="Copiar resumo"><Copy className="w-4 h-4" /></Button>
                        <Button size="sm" variant="ghost" onClick={() => setVendas((l) => l.filter((x) => x.id !== v.id))} aria-label="Excluir venda">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

function Linha({ rotulo, valor, forte, className = '' }) {
  return (
    <div className={`flex items-center justify-between ${forte ? 'font-semibold' : ''} ${className}`}>
      <span>{rotulo}</span>
      <span>{valor}</span>
    </div>
  )
}

export default VendaCard
