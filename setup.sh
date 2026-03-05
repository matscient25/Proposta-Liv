#!/bin/bash

# Script de Setup Automático
# Gestão de Licenças HubSpot

echo "🚀 Iniciando Setup..."
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale Node.js v18+ em https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node --version) encontrado"
echo ""

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Instale npm v9+"
    exit 1
fi

echo "✅ npm $(npm --version) encontrado"
echo ""

# Limpar instalações anteriores
echo "🧹 Limpando instalações anteriores..."
rm -rf node_modules
rm -f package-lock.json
echo "✅ Limpeza concluída"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro na instalação. Tentando com --legacy-peer-deps..."
    npm install --legacy-peer-deps
fi

if [ $? -ne 0 ]; then
    echo "❌ Falha na instalação do npm"
    exit 1
fi

echo ""
echo "✅ Dependências instaladas com sucesso!"
echo ""

# Criar .data se não existir
mkdir -p .data

echo "🎉 Setup concluído!"
echo ""
echo "Próximo passo:"
echo "  npm run dev"
echo ""
echo "Depois abra: http://localhost:3000"
echo ""
