# ⚡ Upload para GitHub - INSTRUÇÕES RÁPIDAS

## 🎯 O QUE FAZER AGORA

### **Opção 1: Método Automático (Windows)**

1. **Crie o repositório**:
   - Acesse: https://github.com/new
   - Nome: `pensemed-website`
   - Clique: "Create repository"

2. **Execute o script**:
   - Dê duplo clique em: `upload-github.bat`
   - Digite seu usuário do GitHub
   - Pronto! ✅

---

### **Opção 2: Método Manual (3 comandos)**

1. **Crie o repositório no GitHub**:
   - https://github.com/new
   - Nome: `pensemed-website`

2. **Execute no terminal** (substitua `SEU_USUARIO`):

```bash
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

3. **Verifique**:
   - Acesse: https://github.com/SEU_USUARIO/pensemed-website
   - Veja seus arquivos! 🎉

---

## 🔑 Informações do Seu Git

```
Nome: Daniel
Email: danielsoli0888@gmail.com
Commits: 2 commits prontos para upload
Branch: master (será renomeada para main)
```

---

## ❓ Não Sabe Seu Usuário do GitHub?

1. Acesse: https://github.com
2. Faça login
3. Clique na sua foto (canto superior direito)
4. Seu usuário aparece abaixo do nome

Ou procure no email de cadastro do GitHub.

---

## ✅ Após Upload

1. **Repositório criado** ✅
2. **Código no GitHub** ✅
3. **Próximo passo**: Deploy na Vercel
   - Leia: `GUIA-DEPLOY.md`

---

## 📞 Links Importantes

| Ação | Link |
|------|------|
| Criar Repositório | https://github.com/new |
| Seus Repositórios | https://github.com?tab=repositories |
| Deploy na Vercel | https://vercel.com/new |

---

**Status**: ⏳ Aguardando você executar os comandos

**Tempo estimado**: 2 minutos ⏱️
