# 🚀 Upload para GitHub - Guia Passo a Passo

## ✅ Status Atual

Seu projeto está **pronto para upload**:
- ✅ Git configurado (usuário: Daniel)
- ✅ Email: danielsoli0888@gmail.com
- ✅ 2 commits criados
- ✅ Código completo versionado

---

## 📋 PASSO A PASSO

### **Opção 1: Criar Repositório pelo Site (Recomendado)**

#### **Passo 1: Criar Repositório no GitHub**

1. **Acesse**: https://github.com/new

2. **Preencha os dados**:
   ```
   Repository name: pensemed-website
   Description: Website de locação de equipamentos médicos - PenseMed
   Visibility: ✅ Public (ou Private, sua escolha)

   ❌ NÃO marque:
   - Add a README file
   - Add .gitignore
   - Choose a license
   ```

3. **Clique em**: "Create repository"

#### **Passo 2: Conectar Repositório Local**

Após criar o repositório, o GitHub mostrará instruções. Use esta versão:

```bash
# Conectar ao repositório remoto
git remote add origin https://github.com/SEU_USUARIO/pensemed-website.git

# Renomear branch para main
git branch -M main

# Enviar código
git push -u origin main
```

**⚠️ IMPORTANTE**: Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub!

#### **Passo 3: Autenticar (se necessário)**

Se for a primeira vez usando Git com GitHub, você precisará autenticar:

**Windows** (vai abrir uma janela):
- Uma janela do navegador abrirá
- Faça login no GitHub
- Autorize a conexão

**Ou use Token (alternativa)**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Marque: `repo` (full control)
4. Copie o token
5. Use como senha quando o Git pedir

---

### **Opção 2: Comandos Completos (Copy & Paste)**

Se você já sabe seu nome de usuário do GitHub, execute estes comandos:

```bash
# Substitua SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU_USUARIO/pensemed-website.git
git branch -M main
git push -u origin main
```

**Exemplo** (se seu usuário for `danielsoli`):
```bash
git remote add origin https://github.com/danielsoli/pensemed-website.git
git branch -M main
git push -u origin main
```

---

## 🎯 Comandos Prontos Para Você

Baseado no seu email (danielsoli0888@gmail.com), provavelmente seu usuário é algo como:
- `danielsoli`
- `danielsoli0888`
- ou similar

### **Execute no terminal (substituindo SEU_USUARIO)**:

```bash
# 1. Adicionar remote (SUBSTITUA SEU_USUARIO!)
git remote add origin https://github.com/SEU_USUARIO/pensemed-website.git

# 2. Renomear branch
git branch -M main

# 3. Push
git push -u origin main
```

---

## ✅ Verificar se Funcionou

### **Ver configuração do remote**:
```bash
git remote -v
```

Deve mostrar:
```
origin  https://github.com/SEU_USUARIO/pensemed-website.git (fetch)
origin  https://github.com/SEU_USUARIO/pensemed-website.git (push)
```

### **Acessar repositório**:
Abra no navegador:
```
https://github.com/SEU_USUARIO/pensemed-website
```

Você verá todos os arquivos do projeto! 🎉

---

## ❌ Problemas Comuns

### **Erro: "remote origin already exists"**
```bash
# Remover remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/SEU_USUARIO/pensemed-website.git
```

### **Erro: "authentication failed"**
Opções:
1. Use GitHub Desktop (mais fácil)
2. Configure token de acesso (veja acima)
3. Configure SSH keys

### **Erro: "repository not found"**
- Verifique se criou o repositório no GitHub
- Confirme o nome do usuário e do repositório

---

## 🎯 Resumo Rápido

1. **Criar repositório**: https://github.com/new
   - Nome: `pensemed-website`
   - ❌ Não adicione README, .gitignore, license

2. **Conectar e enviar**:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/pensemed-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Verificar**: Acesse https://github.com/SEU_USUARIO/pensemed-website

---

## 🚀 Próximo Passo: Deploy

Após o upload para GitHub:

1. **Acesse**: https://vercel.com/new
2. **Import** o repositório `pensemed-website`
3. **Configure** variáveis de ambiente
4. **Deploy!**

Guia completo em: `GUIA-DEPLOY.md`

---

## 📞 Links Úteis

- **Criar repositório**: https://github.com/new
- **Seus repositórios**: https://github.com/SEU_USUARIO?tab=repositories
- **Configurar token**: https://github.com/settings/tokens
- **GitHub Desktop**: https://desktop.github.com/ (alternativa visual)

---

**Status**: ⏳ Aguardando você criar repositório no GitHub e executar os comandos

**Próximo passo**:
1. Acesse https://github.com/new
2. Crie o repositório
3. Execute os comandos acima
4. ✅ Pronto!
